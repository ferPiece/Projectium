# -*- coding: utf-8 -*-
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, ReadOnlyPasswordHashField
from django.contrib.auth.models import Group, Permission, User
from django import forms
from django.core.exceptions import ValidationError
from django.forms import BaseFormSet
from django.utils import timezone
from guardian.shortcuts import get_perms_for_model
from project.models import Proyecto, Flujo, Sprint, Actividad, MiembroEquipo, Adjunto
from project.models import UserStory
from django.forms.models import inlineformset_factory
import datetime

def __general_perms_list__():
    '''

    :return: lista con los permisos que pueden asignarse a nivel general
    :rtype: list
    '''
    permlist = []

    permlist.append(Permission.objects.get(codename="list_all_projects"))
    permlist.append(Permission.objects.get(codename="add_flow_template"))
    permlist.append(Permission.objects.get(codename="change_flow_template"))
    permlist.append(Permission.objects.get(codename="delete_flow_template"))
    permlist.append(Permission.objects.get(codename="add_proyecto"))
    return permlist

def __user_and_group_permissions__():
    perms_user_list = [(perm.codename, perm.name) for perm in get_perms_for_model(User)]
    perms_group_list = [(perm.codename, perm.name) for perm in get_perms_for_model(Group)]
    perms = []
    perms.extend(perms_user_list)
    perms.extend(perms_group_list)
    return perms

class UserCreateForm(UserCreationForm):
    '''
    Formulario para la creación de usuarios
    '''
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)

    general_perms_list = [(perm.codename, perm.name) for perm in __general_perms_list__()]
    general_perms_list.extend(__user_and_group_permissions__())
    general_perms = forms.MultipleChoiceField(general_perms_list, widget=forms.CheckboxSelectMultiple, label="General permissions", required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username']

class UserEditForm(UserChangeForm):
    '''
    Formulario para edición de usuarios
    '''

    general_perms_list = [(perm.codename, perm.name) for perm in __general_perms_list__()]
    general_perms_list.extend(__user_and_group_permissions__())
    general_perms = forms.MultipleChoiceField(general_perms_list, widget=forms.CheckboxSelectMultiple, label="General permissions", required=False)


class RolForm(forms.ModelForm):
    '''
    Formulario para el manejo de roles
    '''


    perms_proyecto_list = [(perm.codename, perm.name) for perm in get_perms_for_model(Proyecto) if 'proyecto' in perm.codename]
    perms_userstories_list = [(perm.codename, perm.name) for perm in get_perms_for_model(Proyecto) if 'userstory' in perm.codename]
    perms_userstories_list.extend([(perm.codename, perm.name) for perm in get_perms_for_model(UserStory)])
    perms_flujo_list = [(perm.codename, perm.name) for perm in get_perms_for_model(Proyecto) if 'flujo' in perm.codename and not('template' in perm.codename)]
    perms_sprint_list = [(perm.codename, perm.name) for perm in get_perms_for_model(Proyecto) if 'sprint' in perm.codename]

    #perms_list = [(perm.codename, perm.name) for perm in Permission.objects.all()] #alternativa con una sola lista

    perms_proyecto = forms.MultipleChoiceField(perms_proyecto_list, widget=forms.CheckboxSelectMultiple, label=Proyecto._meta.verbose_name_plural.title(), required=False)
    perms_userstory = forms.MultipleChoiceField(perms_userstories_list, widget=forms.CheckboxSelectMultiple, label=UserStory._meta.verbose_name_plural.title(), required=False)
    perms_flujo = forms.MultipleChoiceField(perms_flujo_list, widget=forms.CheckboxSelectMultiple, label=Flujo._meta.verbose_name_plural.title(), required=False)
    perms_sprint = forms.MultipleChoiceField(perms_sprint_list, widget=forms.CheckboxSelectMultiple, label=Sprint._meta.verbose_name_plural.title(), required=False)
    #perms = forms.MultipleChoiceField(perms_list, widget=forms.CheckboxSelectMultiple, label="Permisos", required=False)

    class Meta:
        model = Group
        fields = ["name"]

class FlujosCreateForm(forms.ModelForm):
    """
    Formulario para la creacion de flujos
    """
    class Meta:
        model = Flujo
        fields = ['nombre']
#ActividadFormSet utilizamos este form para agregar la actividad al flujo, extra es la cantidad que aparecera en el formulario, can_order es
#para poder ordenar(aun a prueba hasta que le encuentre el uso)
ActividadFormSet = inlineformset_factory(Flujo, Actividad, can_order=True, max_num=None, extra=1, fields='__all__',)

class PlantillaCreateForm(forms.ModelForm):
    """
    Formulario para la creacion de plantillas
    """
    class Meta:
        model = Flujo
        fields = ['nombre']

class CreateFromPlantillaForm(forms.Form):
    '''
    Formulario para la creacion de copias de plantilla
    '''
    plantilla = forms.ModelChoiceField(queryset=Flujo.objects.filter(proyecto=None), empty_label=None)

class AddSprintBaseForm(forms.ModelForm):
    """
    Formulario base para la creacion de Sprints
    """

    class Meta:
        model= Sprint
        fields = ['nombre', 'inicio', 'proyecto']



    def clean(self):
        """
        Chequea que  las fechas  de los Sprints no se solapen
        """
        if any(self.errors):
            return

        if 'inicio' and 'proyecto' in self.cleaned_data :
                inicio= self.cleaned_data['inicio']
                proyecto= self.cleaned_data['proyecto']
                fin = inicio + datetime.timedelta(days= proyecto.duracion_sprint)
                sprint = proyecto.sprint_set.filter(inicio__lte=fin , fin__gte=inicio).exclude(pk=self.instance.pk)
                sprint2=proyecto.sprint_set.get(inicio__lte=fin , fin__gte=inicio)
                try:
                    if inicio.date() < timezone.now().date():
                        if inicio != sprint2.inicio:
                            raise ValidationError({'inicio': 'Fecha inicio debe  ser mayor o igual a la fecha actual '})
                    if sprint.exists():
                        raise ValidationError({'inicio':'Durante este tiempo existe  ' + str(sprint[0].nombre)})
                except TypeError:
                    pass


class AddToSprintForm(forms.Form):
    """
    formulario para la agregacion de userStory, desarrollador y flujo a un Sprint
    """
    userStory =forms.ModelChoiceField(queryset=UserStory.objects.all())
    desarrollador=forms.ModelChoiceField(queryset=User.objects.all())
    flujo = forms.ModelChoiceField(queryset=Flujo.objects.all())




class AddToSprintFormset(BaseFormSet):
    def clean(self):
        """
        Chequea que no se incluye el mismo user story más de una vez en el sprint
        """
        if any(self.errors):
            return #si algún form del formset tiene errores, no se hace la validación

        userstories = []
        for form in self.forms:
            if 'userStory' in form.cleaned_data and not form in self.deleted_forms:
                us = form.cleaned_data['userStory']
                if us in userstories:
                    raise forms.ValidationError("Un mismo User Story puede aparecer sólo una vez en el sprint.")
                userstories.append(us)

                userstories.append(us)


class FileUploadForm(forms.ModelForm):
    """
    Formulario para adjuntar un archivo.
    """
    file = forms.FileField()
    class Meta:
        model = Adjunto
        fields = ['nombre', 'descripcion']


class RegistrarActividadForm(forms.ModelForm):
    '''
    Formulario para registrar actividad en un User Story
    '''
    horas_a_registrar = forms.IntegerField(min_value=0, error_messages={'required':'Ingrese cantidad de horas'}, initial=0)
    class Meta:
        model = UserStory