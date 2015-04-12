# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from django.contrib.auth.models import Permission
from django.core.urlresolvers import reverse_lazy
from django.core.urlresolvers import reverse
from django.forms.models import modelform_factory
from django.http import HttpResponseRedirect
from django.views import generic
from django.views.generic import DetailView
from django.views.generic import ListView
from guardian.mixins import LoginRequiredMixin
from project.forms import UserEditForm
from project.forms import UserCreateForm
from project.views import GlobalPermissionRequiredMixin
from project.views import CreateViewPermissionRequiredMixin


class UserList(LoginRequiredMixin, ListView):
    """
    Lista de usuarios.
    """
    model = User
    context_object_name = 'users'
    template_name = 'project/user/user_list.html'

    def get_queryset(self):
        """
        Retorna una los usuarios excluyendo el AnonymousUser

        :return: lista de usuarios
        """
        return User.objects.exclude(id=-1)


class UserDetail(LoginRequiredMixin, DetailView):
    """
    Ver detalles de Usuario
    """
    model = User
    context_object_name = 'usuario'
    template_name = 'project/user/user_detail.html'

    def get_context_data(self, **kwargs):
        """
        Agregar lista de proyectos al contexto

        :param kwargs: diccionario de argumentos claves
        :return: contexto
        """
        context = super(UserDetail, self).get_context_data(**kwargs)
        context['projects'] = self.object.miembroequipo_set.all()
        return context


class AddUser(LoginRequiredMixin, CreateViewPermissionRequiredMixin, generic.CreateView):
    """
    Agregar un Usuario al Sistema
    """
    model = User
    form_class = UserCreateForm
    template_name = 'project/user/user_form.html'
    permission_required = 'auth.add_user'

    def get_success_url(self):
        """
        Retorna una los usuarios excluyendo el AnonymousUser

        :return: url del UserDetail
        """
        return reverse('project:user_detail', kwargs={'pk': self.object.id})

    def form_valid(self, form):
        """
        Verificar validez del formulario

        :param form: formulario completado
        :return: Url de Evento Correcto
        """
        super(AddUser, self).form_valid(form)

        escogidas = self.request.POST.getlist('general_perms')
        for permname in escogidas:
            perm = Permission.objects.get(codename=permname)
            self.object.user_permissions.add(perm)

        return HttpResponseRedirect(self.get_success_url())


class DeleteUser(LoginRequiredMixin, GlobalPermissionRequiredMixin, generic.DeleteView):
    """
    Eliminar un Usuario del Sistema
    """
    model = User
    template_name = 'project/user/user_delete.html'
    context_object_name = 'usuario'
    success_url = reverse_lazy('project:user_list')
    permission_required = 'auth.delete_user'


class UpdateUser(LoginRequiredMixin, GlobalPermissionRequiredMixin, generic.UpdateView):
    """
    Actualizar un Usuario del Sistema
    """
    model = User
    template_name = 'project/user/user_form.html'
    permission_required = 'auth.change_user'
    form_class = modelform_factory(User, form=UserEditForm,
                                   fields=['first_name', 'last_name', 'email', 'username', 'password'], )

    def get_success_url(self):
        """
        Obtener url de evento correcto

        :return: url de UserDetail
        """
        return reverse('project:user_detail', kwargs={'pk': self.object.id})

    def get_initial(self):
        """
        Obtener datos iniciales para el formulario

        :return: diccionario con los datos iniciales
        """
        modelo = self.get_object()

        perm_list = [perm.codename for perm in list(modelo.user_permissions.all())]

        initial = {'general_perms': perm_list}

        return initial

    def form_valid(self, form):
        """
        Comprobar validez del formulario recibido

        :param form: Formulario recibido
        :return: URL de evento correcto
        """
        super(UpdateUser, self).form_valid(form)
        # eliminamos permisos anteriores
        self.object.user_permissions.clear()
        escogidas = self.request.POST.getlist('general_perms')
        for permname in escogidas:
            perm = Permission.objects.get(codename=permname)
            self.object.user_permissions.add(perm)

        return HttpResponseRedirect(self.get_success_url())