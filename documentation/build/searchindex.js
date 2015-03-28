Search.setIndex({envversion:46,filenames:["index","modules/forms","modules/models","modules/urls","modules/views"],objects:{"project.forms":{RolForm:[1,4,1,""],UserCreateForm:[1,4,1,""],UserForm:[1,4,1,""],general_perms_list:[1,5,1,""]},"project.forms.RolForm":{Meta:[1,4,1,""],base_fields:[1,2,1,""],declared_fields:[1,2,1,""],media:[1,2,1,""],perm:[1,2,1,""],perms_actividad_list:[1,2,1,""],perms_flujo_list:[1,2,1,""],perms_proyecto_list:[1,2,1,""],perms_sprint_list:[1,2,1,""],perms_teammembers_list:[1,2,1,""],perms_userstories_list:[1,2,1,""]},"project.forms.RolForm.Meta":{fields:[1,2,1,""],model:[1,2,1,""]},"project.forms.UserCreateForm":{Meta:[1,4,1,""],base_fields:[1,2,1,""],declared_fields:[1,2,1,""],media:[1,2,1,""]},"project.forms.UserCreateForm.Meta":{fields:[1,2,1,""],model:[1,2,1,""]},"project.forms.UserForm":{base_fields:[1,2,1,""],declared_fields:[1,2,1,""],general_perms_list:[1,2,1,""],media:[1,2,1,""],perm:[1,2,1,""],perms_group_list:[1,2,1,""],perms_user_list:[1,2,1,""]},"project.models":{Actividad:[2,4,1,""],Adjunto:[2,4,1,""],Flujo:[2,4,1,""],MiembroEquipo:[2,4,1,""],Nota:[2,4,1,""],Proyecto:[2,4,1,""],Sprint:[2,4,1,""],UserStory:[2,4,1,""],Version:[2,4,1,""],validate_dates:[2,5,1,""]},"project.models.Actividad":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],flujo:[2,2,1,""],get_next_in_order:[2,3,1,""],get_previous_in_order:[2,3,1,""],objects:[2,2,1,""],userstory_set:[2,2,1,""]},"project.models.Adjunto":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_creacion:[2,3,1,""],get_previous_by_creacion:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.models.Flujo":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],actividad_set:[2,2,1,""],get_actividad_order:[2,3,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],set_actividad_order:[2,3,1,""]},"project.models.MiembroEquipo":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],rol:[2,2,1,""],usuario:[2,2,1,""]},"project.models.Nota":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_fecha:[2,3,1,""],get_previous_by_fecha:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.models.Proyecto":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],estado_choices:[2,2,1,""],flujo_set:[2,2,1,""],get_estado_display:[2,3,1,""],get_next_by_creacion:[2,3,1,""],get_next_by_fin:[2,3,1,""],get_next_by_inicio:[2,3,1,""],get_previous_by_creacion:[2,3,1,""],get_previous_by_fin:[2,3,1,""],get_previous_by_inicio:[2,3,1,""],miembroequipo_set:[2,2,1,""],objects:[2,2,1,""],sprint_set:[2,2,1,""],userstory_set:[2,2,1,""]},"project.models.Sprint":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_fin:[2,3,1,""],get_next_by_inicio:[2,3,1,""],get_previous_by_fin:[2,3,1,""],get_previous_by_inicio:[2,3,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],userstory_set:[2,2,1,""]},"project.models.UserStory":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],actividad:[2,2,1,""],adjunto_set:[2,2,1,""],desarrollador:[2,2,1,""],estado_choices:[2,2,1,""],get_estado_display:[2,3,1,""],get_next_by_ultimo_cambio:[2,3,1,""],get_previous_by_ultimo_cambio:[2,3,1,""],get_prioridad_display:[2,3,1,""],nota_set:[2,2,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],sprint:[2,2,1,""],version_set:[2,2,1,""]},"project.models.Version":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_modificacion:[2,3,1,""],get_previous_by_modificacion:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.views":{AddRolView:[4,4,1,""],AddUser:[4,4,1,""],DeleteRolView:[4,4,1,""],DeleteUser:[4,4,1,""],LoginRequiredMixin:[4,4,1,""],ProjectDetail:[4,4,1,""],ProjectList:[4,4,1,""],RolDetail:[4,4,1,""],RolList:[4,4,1,""],UpdateRolView:[4,4,1,""],UpdateUser:[4,4,1,""],UserDetail:[4,4,1,""],UserList:[4,4,1,""],get_selected_perms:[4,5,1,""],home:[4,5,1,""]},"project.views.AddRolView":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.AddUser":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.DeleteRolView":{dispatch:[4,3,1,""],model:[4,2,1,""],success_url:[4,2,1,""],template_name:[4,2,1,""]},"project.views.DeleteUser":{context_object_name:[4,2,1,""],model:[4,2,1,""],success_url:[4,2,1,""],template_name:[4,2,1,""]},"project.views.LoginRequiredMixin":{as_view:[4,6,1,""]},"project.views.ProjectDetail":{context_object_name:[4,2,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.ProjectList":{context_object_name:[4,2,1,""],get_queryset:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.RolDetail":{context_object_name:[4,2,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.RolList":{context_object_name:[4,2,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UpdateRolView":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],get_initial:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UpdateUser":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_initial:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UserDetail":{context_object_name:[4,2,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UserList":{context_object_name:[4,2,1,""],get_queryset:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},project:{forms:[1,0,0,"-"],models:[2,0,0,"-"],urls:[3,0,0,"-"],views:[4,0,0,"-"]}},objnames:{"0":["py","module","Python m\u00f3dulo"],"1":["py","exception","Python excepci\u00f3n"],"2":["py","attribute","Python atributo"],"3":["py","method","Python m\u00e9todo"],"4":["py","class","Python clase"],"5":["py","function","Python funci\u00f3n"],"6":["py","classmethod","Python m\u00e9todo de la clase"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:attribute","3":"py:method","4":"py:class","5":"py:function","6":"py:classmethod"},terms:{"0001_initial":[],"0002_auto_20150324_1442":[],"0003_auto_20150324_2209":[],"0004_auto_20150327_2310":[],"0004_auto_20150328_0155":[],"0005_auto_20150327_2313":[],"0006_merg":[],"0x7fb28c584490":1,"0x7fb28c584cd0":1,"0x7fb28c596050":1,"0x7fb28c596410":1,"0x7fb28c596790":1,"0x7fb28c596b50":1,"0x7fb28c5ac2d0":1,"0x7fb28c5acdd0":1,"0x7fb28c5b1190":1,"0x7fb28c5b1390":1,"0x7fb28c5b13d0":1,"0x7fb28c5b1490":1,"0x7fb28c5b1590":1,"0x7fb28c5b19d0":1,"0x7fb28c5b1b90":1,"0x7fb28c5d8a10":1,"0x7fb28c5e89d0":1,"0x7fb28c5e8c50":1,"0x7fb28c5e8dd0":1,"0x7fb28c63f050":1,"0x7fb28c63f1d0":1,"0x7fb28cf08750":1,"0x7fb28cf08990":1,"0x7fb28cf08ad0":1,"0x7fb28cf15110":1,"0x7fb28cf154d0":1,"\u00cdndic":0,"__first__":[],"__proxy__":4,"_ord":2,"class":[1,2,4],"return":4,"short":[],Activid:2,AddField:[],AddRolView:4,AddUser:4,Adjunt:2,AlterModelOptions:[],AlterOrderWithRespectT:[],Aprob:2,Aprobacion:2,AutoField:[],BooleanField:1,Busqued:0,Can:1,Cancel:2,CharField:1,Clas:[1,2,4],Complet:2,Contents:0,CreateModel:[],CreateView:4,DateTimeField:1,DeleteRolView:4,DeleteUs:4,DeleteView:4,DetailView:4,DoesNotExist:2,Doing:2,Don:2,EmailField:1,ErrorList:1,Fals:1,Fluj:2,ForeignKey:[],Group:[1,4],Inactiv:2,IntegerField:[],ListView:4,LoginRequiredMixin:4,LoginTest:[],Manag:2,Met:1,MiembroEquip:2,MiembroProyect:[],Migration:[],Model:2,ModelForm:1,ModelMultipleChoiceField:1,Modul:[],MultipleChoiceField:1,MultipleObjectsReturn:2,Non:1,Not:2,ObjectDoesNotExist:2,OrderedDict:1,POST:4,Pagin:0,Pendient:2,Permission:1,Produccion:2,ProjectDetail:4,ProjectList:4,Proyect:[2,4],ReadOnlyPasswordHashField:1,RegexField:1,RenameModel:[],RolDetail:4,RolForm:[1,4],RolList:4,RolesTest:[],Sprint:2,Stor:2,Submodul:[],Subpackag:[],TestC:[],TextField:[],TimeField:[],ToD:2,Tru:[],UpdateRolView:4,UpdateUs:4,UpdateView:4,Urls:[],User:[1,4],UserChangeForm:1,UserCreateForm:[1,4],UserCreationForm:1,UserDetail:4,UserForm:[1,4],UserList:4,UserStory:2,Version:2,View:4,Views:[],activ:[1,2],actividad_:2,actividad_set:2,add:1,add_act:1,add_flow_templat:1,add_fluj:1,add_group:1,add_miembroequip:1,add_project:[],add_proyect:1,add_rol:[],add_sprint:1,add_team_memb:[],add_us:1,add_userstory:1,adjunt:[],adjunto_set:2,admin:[],agreg:4,ali:[1,4],all:1,app_label:[],args:[1,2,4],as_view:4,auth:1,auto_:1,avail:1,bas:[1,2,4],base_fields:1,chang:1,change_act:1,change_flow_templat:1,change_fluj:1,change_group:1,change_miembroequip:1,change_proyect:1,change_sprint:1,change_us:1,change_userstory:1,classmethod:4,contents:[],context_object_nam:4,contrib:1,cor:2,creacion:2,create_rol:[],dat:1,date_join:1,declared_fields:1,delet:1,delete_act:1,delete_flow_templat:1,delete_fluj:1,delete_group:1,delete_miembroequip:1,delete_proyect:1,delete_sprint:1,delete_us:1,delete_userstory:1,dependenci:[],desarroll:2,desarrollador_:2,descripcion:2,detail:4,detall:4,dispatch:4,djang:[1,2,4],duracion_sprint:[],edit:4,email:1,empty_permitt:1,end:2,equip:1,error_class:1,estado_choic:2,exception:2,exceptions:2,fech:2,field:[],fields:1,fil:1,fin:2,first_nam:1,flow:1,fluj:[1,2],flujo_:2,flujo_set:2,form:4,form_class:4,form_val:4,forms:[],fuent:[1,2,4],functional:4,general_perms:1,general_perms_list:1,generic:4,get_actividad_ord:2,get_context_dat:4,get_estado_display:2,get_initial:4,get_next_by_creacion:2,get_next_by_fech:2,get_next_by_fin:2,get_next_by_inici:2,get_next_by_modificacion:2,get_next_by_ultimo_cambi:2,get_next_in_ord:2,get_previous_by_creacion:2,get_previous_by_fech:2,get_previous_by_fin:2,get_previous_by_inici:2,get_previous_by_modificacion:2,get_previous_by_ultimo_cambi:2,get_previous_in_ord:2,get_prioridad_display:2,get_queryset:4,get_selected_perms:4,get_success_url:4,group:1,groups:1,hom:4,html:4,id_:1,inici:2,initial:1,initkwargs:4,instanc:1,is_activ:1,is_staff:1,is_superus:1,kwargs:[1,2,4],label_suffix:1,last_login:1,last_nam:1,list:[1,4],list_all_projects:1,longn:[],manag:2,medi:1,methodNam:[],miembr:1,miembroequip:[],miembroequipo_set:2,miembroproyect:[],migration:[],migrations:[],model:[1,4],model_nam:[],models:[],modificacion:2,modul:[],moreargs:2,morekwargs:2,nam:[1,2],new_nam:[],nombr:2,nombre_cort:[],nombre_larg:[],not:[],nota_set:2,object:[1,2,4],objects:2,old_nam:[],operations:[],options:[],order_with_respect_t:[],packag:[],password1:1,password2:1,password:1,perm:1,permis:[],permissions:[],perms_act:1,perms_actividad_list:1,perms_fluj:1,perms_flujo_list:1,perms_group_list:1,perms_proyect:1,perms_proyecto_list:1,perms_sprint:1,perms_sprint_list:1,perms_teammembers:1,perms_teammembers_list:1,perms_user_list:1,perms_userstories_list:1,perms_userstory:1,populat:[],population:[],prefix:1,preserve_default:[],priorid:2,project_detail:4,project_list:4,projects:[1,4],proyect:[1,2],proyecto_:2,redireccion:4,relat:[],request:4,rol:[2,4],rol_:2,rol_delet:4,rol_detail:4,rol_form:4,rol_list:4,runTest:[],setUp:[],set_actividad_ord:2,singl:2,sistem:4,sprint:[1,2],sprint_:2,sprint_set:2,start:2,stori:[],story:1,success_url:4,templat:1,template_nam:4,test:[],test_create_rol:[],test_delete_rol:[],test_edit_rol:[],test_login_existing_us:[],test_login_non_existing_us:[],test_login_wrong_password:[],test_logout_after_login:[],test_not_create_invalid_rol:[],testc:[],tests:[],tiempo_estim:2,tiempo_registr:2,ultimo_cambi:2,url:4,urls:[],user:1,user_delet:4,user_detail:4,user_form:4,user_list:4,user_permissions:1,user_story:2,user_story_:2,usernam:1,users:4,userstory:[],userstory_set:2,usuari:[2,4],usuario_:2,utils:[1,4],validate_dat:2,valor_negoci:2,valor_tecn:2,verbose_name_plural:[],version_set:2,views:[],vist:4},titles:["Welcome to project&#8217;s documentation!","Forms","Models","Urls","Views"],titleterms:{"0001_initial":[],"0002_auto_20150324_1442":[],"0003_auto_20150324_2209":[],"0004_auto_20150327_2310":[],"0004_auto_20150328_0155":[],"0005_auto_20150327_2313":[],"0006_merg":[],Forms:1,Indic:0,Models:2,Modul:[],Submodul:[],Subpackag:[],Urls:3,Views:4,Welcom:0,admin:[],and:0,contents:[],documentation:0,forms:[],migrations:[],models:[],modul:[],packag:[],population:[],project:0,tabl:0,tests:[],urls:[],views:[]}})