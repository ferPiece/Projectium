Search.setIndex({envversion:46,filenames:["index","modules/forms","modules/models","modules/signals","modules/views"],objects:{"project.forms":{RolForm:[1,4,1,""],UserCreateForm:[1,4,1,""],UserEditForm:[1,4,1,""],general_perms_list:[1,6,1,""]},"project.forms.RolForm":{Meta:[1,4,1,""],base_fields:[1,2,1,""],declared_fields:[1,2,1,""],media:[1,2,1,""],perm:[1,2,1,""],perms_actividad_list:[1,2,1,""],perms_flujo_list:[1,2,1,""],perms_proyecto_list:[1,2,1,""],perms_sprint_list:[1,2,1,""],perms_teammembers_list:[1,2,1,""],perms_userstories_list:[1,2,1,""]},"project.forms.RolForm.Meta":{fields:[1,2,1,""],model:[1,2,1,""]},"project.forms.UserCreateForm":{Meta:[1,4,1,""],base_fields:[1,2,1,""],declared_fields:[1,2,1,""],general_perms_list:[1,2,1,""],media:[1,2,1,""],perm:[1,2,1,""],perms_group_list:[1,2,1,""],perms_user_list:[1,2,1,""]},"project.forms.UserCreateForm.Meta":{fields:[1,2,1,""],model:[1,2,1,""]},"project.forms.UserEditForm":{base_fields:[1,2,1,""],declared_fields:[1,2,1,""],general_perms_list:[1,2,1,""],media:[1,2,1,""],perm:[1,2,1,""],perms_group_list:[1,2,1,""],perms_user_list:[1,2,1,""]},"project.models":{Actividad:[2,4,1,""],Adjunto:[2,4,1,""],Flujo:[2,4,1,""],MiembroEquipo:[2,4,1,""],Nota:[2,4,1,""],Proyecto:[2,4,1,""],Sprint:[2,4,1,""],UserStory:[2,4,1,""],Version:[2,4,1,""],validate_dates:[2,6,1,""]},"project.models.Actividad":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],flujo:[2,2,1,""],get_next_in_order:[2,3,1,""],get_previous_in_order:[2,3,1,""],objects:[2,2,1,""],userstory_set:[2,2,1,""]},"project.models.Adjunto":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_creacion:[2,3,1,""],get_previous_by_creacion:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.models.Flujo":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],actividad_set:[2,2,1,""],get_actividad_order:[2,3,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],set_actividad_order:[2,3,1,""]},"project.models.MiembroEquipo":{"delete":[2,3,1,""],DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],roles:[2,2,1,""],usuario:[2,2,1,""]},"project.models.Nota":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_fecha:[2,3,1,""],get_previous_by_fecha:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.models.Proyecto":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],clean:[2,3,1,""],equipo:[2,2,1,""],estado_choices:[2,2,1,""],flujo_set:[2,2,1,""],get_absolute_url:[2,3,1,""],get_estado_display:[2,3,1,""],get_next_by_creacion:[2,3,1,""],get_next_by_fin:[2,3,1,""],get_next_by_inicio:[2,3,1,""],get_previous_by_creacion:[2,3,1,""],get_previous_by_fin:[2,3,1,""],get_previous_by_inicio:[2,3,1,""],miembroequipo_set:[2,2,1,""],objects:[2,2,1,""],sprint_set:[2,2,1,""],userstory_set:[2,2,1,""]},"project.models.Sprint":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_fin:[2,3,1,""],get_next_by_inicio:[2,3,1,""],get_previous_by_fin:[2,3,1,""],get_previous_by_inicio:[2,3,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],save:[2,3,1,""],userstory_set:[2,2,1,""]},"project.models.UserStory":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],actividad:[2,2,1,""],adjunto_set:[2,2,1,""],desarrollador:[2,2,1,""],estado_choices:[2,2,1,""],get_estado_display:[2,3,1,""],get_next_by_ultimo_cambio:[2,3,1,""],get_previous_by_ultimo_cambio:[2,3,1,""],get_prioridad_display:[2,3,1,""],nota_set:[2,2,1,""],objects:[2,2,1,""],proyecto:[2,2,1,""],sprint:[2,2,1,""],version_set:[2,2,1,""]},"project.models.Version":{DoesNotExist:[2,1,1,""],MultipleObjectsReturned:[2,1,1,""],get_next_by_modificacion:[2,3,1,""],get_previous_by_modificacion:[2,3,1,""],objects:[2,2,1,""],user_story:[2,2,1,""]},"project.signals":{add_permissions_team_member:[3,6,1,""]},"project.views":{AddRolView:[4,4,1,""],AddUser:[4,4,1,""],DeleteRolView:[4,4,1,""],DeleteUser:[4,4,1,""],LoginRequiredMixin:[4,4,1,""],ProjectCreate:[4,4,1,""],ProjectDelete:[4,4,1,""],ProjectDetail:[4,4,1,""],ProjectList:[4,4,1,""],ProjectUpdate:[4,4,1,""],RolDetail:[4,4,1,""],RolList:[4,4,1,""],UpdateRolView:[4,4,1,""],UpdateUser:[4,4,1,""],UserDetail:[4,4,1,""],UserList:[4,4,1,""],get_selected_perms:[4,6,1,""],home:[4,6,1,""]},"project.views.AddRolView":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.AddUser":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.DeleteRolView":{"delete":[4,3,1,""],dispatch:[4,3,1,""],model:[4,2,1,""],success_url:[4,2,1,""],template_name:[4,2,1,""]},"project.views.DeleteUser":{context_object_name:[4,2,1,""],dispatch:[4,3,1,""],model:[4,2,1,""],success_url:[4,2,1,""],template_name:[4,2,1,""]},"project.views.LoginRequiredMixin":{as_view:[4,5,1,""]},"project.views.ProjectCreate":{TeamMemberInlineFormSet:[4,2,1,""],dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.ProjectDelete":{"delete":[4,3,1,""],dispatch:[4,3,1,""],model:[4,2,1,""],success_url:[4,2,1,""],template_name:[4,2,1,""]},"project.views.ProjectDetail":{context_object_name:[4,2,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.ProjectList":{context_object_name:[4,2,1,""],get_queryset:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.ProjectUpdate":{TeamMemberInlineFormSet:[4,2,1,""],dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.RolDetail":{context_object_name:[4,2,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.RolList":{context_object_name:[4,2,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UpdateRolView":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_context_data:[4,3,1,""],get_initial:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UpdateUser":{dispatch:[4,3,1,""],form_class:[4,2,1,""],form_valid:[4,3,1,""],get_initial:[4,3,1,""],get_success_url:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UserDetail":{context_object_name:[4,2,1,""],get_context_data:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},"project.views.UserList":{context_object_name:[4,2,1,""],get_queryset:[4,3,1,""],model:[4,2,1,""],template_name:[4,2,1,""]},project:{forms:[1,0,0,"-"],models:[2,0,0,"-"],signals:[3,0,0,"-"],views:[4,0,0,"-"]}},objnames:{"0":["py","module","Python m\u00f3dulo"],"1":["py","exception","Python excepci\u00f3n"],"2":["py","attribute","Python atributo"],"3":["py","method","Python m\u00e9todo"],"4":["py","class","Python clase"],"5":["py","classmethod","Python m\u00e9todo de la clase"],"6":["py","function","Python funci\u00f3n"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:attribute","3":"py:method","4":"py:class","5":"py:classmethod","6":"py:function"},terms:{"0001_initial":[],"0002_auto_20150324_1442":[],"0003_auto_20150324_2209":[],"0004_auto_20150327_2310":[],"0004_auto_20150328_0155":[],"0005_auto_20150327_2313":[],"0006_merg":[],"0x7f05507bd490":1,"0x7f05507bd890":1,"0x7f05507bdb90":1,"0x7f05507bdc50":1,"0x7f05507bde90":1,"0x7f05507bdf50":1,"0x7f05507c4050":1,"0x7f05507c4210":1,"0x7f05507c4890":1,"0x7f05507c4f50":1,"0x7f05507fc290":1,"0x7f05507fc4d0":1,"0x7f05507fc650":1,"0x7f05507fcc50":1,"0x7f05508174d0":1,"0x7f05508178d0":1,"0x7f0550817d10":1,"0x7f055082b110":1,"0x7f055082b490":1,"0x7f055082b850":1,"0x7f055083f9d0":1,"0x7f0550855f90":1,"0x7f055086bfd0":1,"0x7f05511f3450":1,"0x7f05511f3690":1,"0x7f05511f37d0":1,"0x7f05511f3dd0":1,"0x7fa8f2680190":[],"0x7fa8f26959d0":[],"0x7fa8f26a7990":[],"0x7fa8f26a7c10":[],"0x7fa8f26a7d90":[],"0x7fa8f26c4450":[],"0x7fa8f26c4fd0":[],"0x7fa8f26d03d0":[],"0x7fa8f26d0750":[],"0x7fa8f26d0b10":[],"0x7fa8f26e8290":[],"0x7fa8f26e8d90":[],"0x7fa8f26ee150":[],"0x7fa8f26ee350":[],"0x7fa8f26ee390":[],"0x7fa8f26ee450":[],"0x7fa8f26ee550":[],"0x7fa8f26ee710":[],"0x7fa8f26f8250":[],"0x7fa8f26f8410":[],"0x7fa8f272fdd0":[],"0x7fa8f2fa7990":[],"0x7fa8f3004750":[],"0x7fa8f3004990":[],"0x7fa8f3004ad0":[],"0x7fa8f3011110":[],"0x7fa8f3011450":[],"0x7fb28c584490":[],"0x7fb28c584cd0":[],"0x7fb28c596050":[],"0x7fb28c596410":[],"0x7fb28c596790":[],"0x7fb28c596b50":[],"0x7fb28c5ac2d0":[],"0x7fb28c5acdd0":[],"0x7fb28c5b1190":[],"0x7fb28c5b1390":[],"0x7fb28c5b13d0":[],"0x7fb28c5b1490":[],"0x7fb28c5b1590":[],"0x7fb28c5b19d0":[],"0x7fb28c5b1b90":[],"0x7fb28c5d8a10":[],"0x7fb28c5e89d0":[],"0x7fb28c5e8c50":[],"0x7fb28c5e8dd0":[],"0x7fb28c63f050":[],"0x7fb28c63f1d0":[],"0x7fb28cf08750":[],"0x7fb28cf08990":[],"0x7fb28cf08ad0":[],"0x7fb28cf15110":[],"0x7fb28cf154d0":[],"0x7ff5b737f450":[],"0x7ff5b737fc90":[],"0x7ff5b737ffd0":[],"0x7ff5b738f3d0":[],"0x7ff5b738f750":[],"0x7ff5b738fb10":[],"0x7ff5b73a3290":[],"0x7ff5b73a3d90":[],"0x7ff5b73a8150":[],"0x7ff5b73a8350":[],"0x7ff5b73a8390":[],"0x7ff5b73a8450":[],"0x7ff5b73a8550":[],"0x7ff5b73a8710":[],"0x7ff5b73b2250":[],"0x7ff5b73b2410":[],"0x7ff5b73d09d0":[],"0x7ff5b73e0990":[],"0x7ff5b73e0c10":[],"0x7ff5b73e0d90":[],"0x7ff5b742afd0":[],"0x7ff5b7437190":[],"0x7ff5b7d00750":[],"0x7ff5b7d00990":[],"0x7ff5b7d00ad0":[],"0x7ff5b7d0d110":[],"0x7ff5b7d0d610":[],"\u00cdndic":0,"__first__":[],"__proxy__":4,"__unicode__":2,"_ord":[],"class":[1,2,4],"return":[2,4],"short":[],Activid:2,Actualiz:4,Actualizacion:4,AddField:[],AddRolView:4,AddUser:4,Adjunt:2,Administr:2,Agreg:4,AlterModelOptions:[],AlterOrderWithRespectT:[],AnonymousUs:4,Aprob:2,Aprobacion:2,Argument:4,AutoField:[],BooleanField:1,Borr:4,Busqued:0,Can:1,Cancel:2,CharField:1,Clas:[1,2,3,4],Clav:4,Complet:2,Comprob:4,Con:2,Contents:0,Correct:4,Cre:[],CreateModel:[],CreateView:4,DateTimeField:1,DeleteRolView:4,DeleteUs:4,DeleteView:4,DetailView:4,Detall:4,Devuelv:[1,4],Diccionari:3,Dispatch:4,DoesNotExist:2,Doing:2,Don:2,Edicion:4,Elimin:4,Eliminacion:4,EmailField:1,ErrorList:1,Event:4,Fals:1,Fluj:2,ForeignKey:[],Formulari:[1,4],Group:[1,4],HttpResponseRedirect:4,Inactiv:2,IntegerField:[],Las:2,List:4,ListView:4,Llam:4,LoginRequiredMixin:4,LoginTest:[],Los:2,Manag:2,Manej:2,Met:1,Miembr:2,MiembroEquip:2,MiembroEquipoFormFormSet:4,MiembroProyect:[],Migration:[],Mixin:4,Model:2,ModelForm:1,ModelMultipleChoiceField:1,Modul:[],MultipleChoiceField:1,MultipleObjectsReturn:2,Non:[1,2],Not:2,ObjectDoesNotExist:2,Obten:4,OrderedDict:1,POST:4,Pagin:0,Parametr:[3,4],Pendient:2,Permission:1,Permit:4,Produccion:2,ProjectCreat:4,ProjectDelet:4,ProjectDetail:4,ProjectList:4,ProjectUpdat:4,Proyect:[2,4],ProyectoForm:4,ReadOnlyPasswordHashField:1,RegexField:1,RenameModel:[],Requer:4,Request:4,Requeust:4,Requier:4,Retorn:4,Rol:4,RolDetail:4,RolForm:[1,4],RolList:4,RolesTest:[],Signal:3,Signals:[],Sistem:4,Solicit:4,Sprint:2,Stor:[],Stori:2,Story:2,Submodul:[],Subpackag:[],TeamMemberInlineFormSet:4,TestC:[],TextField:[],TimeField:[],Tip:1,ToD:2,Tru:[],URL:4,UpdateRolView:4,UpdateUs:4,UpdateView:4,Url:4,Urls:[],User:[1,2,4],UserChangeForm:1,UserCreateForm:[1,4],UserCreationForm:1,UserDetail:4,UserEditForm:1,UserForm:4,UserList:4,UserStory:2,Usuari:4,Ver:4,Verific:4,Version:2,View:4,Views:[],Vist:4,activ:[1,2],actividad_:[],actividad_set:2,actualiz:[],add:1,add_act:[],add_flow_templat:1,add_fluj:[],add_group:1,add_miembroequip:[],add_permissions_team_memb:3,add_project:[],add_proyect:1,add_rol:[],add_sprint:[],add_team_memb:[],add_us:[1,4],add_userstory:[],adicional:4,adjunt:2,adjunto_set:2,admin:[],administr:2,agreg:[1,3,4],ali:[1,4],all:2,anterior:2,app_label:[],archiv:2,args:[1,2,4],argument:4,as_view:4,asign:[1,2,3,4],asoci:3,atras:2,auth:1,auto_:1,avail:[],bas:[1,2,4],base_fields:1,cad:2,cambi:2,cancelacion:4,cantid:2,chang:1,change_act:[],change_flow_templat:1,change_fluj:[],change_group:[1,4],change_miembroequip:[],change_proyect:1,change_sprint:[],change_us:[1,4],change_userstory:[],classmethod:4,clav:4,cle:2,client:[2,4],com:2,complet:4,compon:2,constanci:2,contents:[],context:4,context_object_nam:4,contrib:1,cor:2,correct:4,creacion:[1,4],create_act:1,create_fluj:1,create_miembroequip:1,create_rol:[],create_sprint:1,create_userstory:1,cuand:3,dat:[1,4],date_join:1,deb:2,declared_fields:1,def:2,delet:[1,2,4],delete_act:[],delete_flow_templat:1,delete_fluj:[],delete_group:[1,4],delete_miembroequip:[],delete_proyect:1,delete_sprint:[],delete_us:1,delete_userstory:[],dentr:[],dependenci:[],desarroll:2,desarrollador_:[],descripcion:[],desd:2,detail:4,detall:4,devuelt:1,diccionari:4,dispatch:4,dispon:1,distint:2,djang:[1,2,4],duracion_sprint:[],edicion:1,edit:[1,4],edit_act:1,edit_fluj:1,edit_miembroequip:1,edit_sprint:1,edit_userstory:1,ejecut:3,elimin:[1,4],email:1,empty_permitt:1,end:2,entid:2,entrad:2,envi:3,equip:[1,2,3],error_class:1,especif:2,estado_choic:2,etap:2,event:4,exception:2,exceptions:2,exclu:4,exig:4,exit:4,fech:[],field:[],fields:1,fil:1,fin:[],first_nam:1,flow:[],fluj:[1,2],flujo_:[],flujo_set:2,form:[2,4],form_class:4,form_val:4,format:2,forms:[],formulari:4,fuent:[1,2,3,4],funcional:2,functional:4,general:1,general_perms:1,general_perms_list:1,generic:4,get_absolute_url:2,get_actividad_ord:2,get_context_dat:4,get_estado_display:2,get_initial:4,get_next_by_creacion:2,get_next_by_fech:2,get_next_by_fin:2,get_next_by_inici:2,get_next_by_modificacion:2,get_next_by_ultimo_cambi:2,get_next_in_ord:2,get_previous_by_creacion:2,get_previous_by_fech:2,get_previous_by_fin:2,get_previous_by_inici:2,get_previous_by_modificacion:2,get_previous_by_ultimo_cambi:2,get_previous_in_ord:2,get_prioridad_display:2,get_queryset:4,get_selected_perms:4,get_success_url:4,group:1,groups:1,hac:3,hom:4,hor:2,html:4,id_:1,inici:[],inicial:4,initial:1,initkwargs:4,instanc:1,is_activ:1,is_staff:1,is_superus:1,kwargs:[1,2,3,4],label_suffix:1,last_login:1,last_nam:1,list:[1,4],list_all_projects:1,log:4,longn:[],lueg:4,manag:2,manej:[1,2],marc:4,medi:1,methodNam:[],metod:4,miembr:[1,3,4],miembroequip:[],miembroequipo_set:2,miembroproyect:[],migration:[],migrations:[],model:[1,4],model_nam:[],models:[],modificacion:[],modul:[],moreargs:2,morekwargs:2,nam:1,new_nam:[],nivel:1,nombr:[],nombre_cort:[],nombre_larg:[],not:2,nota_set:2,nuev:4,object:[1,2,4],objects:2,objet:4,old_nam:[],operations:[],options:[],order_with_respect_t:[],packag:[],palabr:4,pantall:4,par:[1,2,4],param:[],parametr:3,part:2,password1:1,password2:1,password:1,perm:1,permis:[1,3,4],permissions:[],perms_act:1,perms_actividad_list:1,perms_fluj:1,perms_flujo_list:1,perms_group_list:1,perms_proyect:1,perms_proyecto_list:1,perms_sprint:1,perms_sprint_list:1,perms_teammembers:1,perms_teammembers_list:1,perms_user_list:1,perms_userstories_list:1,perms_userstory:1,perspect:2,pid:[],plantill:[1,2],podr:[],populat:[],population:[],prefix:1,preserve_default:[],principal:4,priorid:[],project_detail:4,project_form:4,project_list:4,projects:4,proyect:[1,2,4],proyect_delet:4,proyecto_:[],pued:[1,2],quis:[],realiz:2,recib:4,redireccion:4,redirig:4,registr:[],relacion:2,relat:[],remove_act:1,remove_fluj:1,remove_miembroequip:1,remove_sprint:1,remove_userstory:1,represent:2,request:4,rol:[1,2,3,4],rol_:[],rol_delet:4,rol_detail:4,rol_form:4,rol_list:4,runTest:[],sav:2,self:2,send:3,setUp:[],set_actividad_ord:2,signal:3,signals:3,singl:[],sistem:[2,4],sol:[],sprint:[1,2],sprint_:[],sprint_set:2,sprints:2,start:2,stori:[],story:2,success_url:4,templat:[],template_nam:4,ten:4,test:[],test_create_rol:[],test_delete_rol:[],test_edit_rol:[],test_login_existing_us:[],test_login_non_existing_us:[],test_login_wrong_password:[],test_logout_after_login:[],test_not_create_invalid_rol:[],testc:[],tests:[],tiempo_estim:[],tiempo_registr:[],tien:[],trabaj:2,ultimo_cambi:[],url:4,urls:[],user:[1,2],user_delet:4,user_detail:4,user_form:4,user_list:4,user_permissions:1,user_story:2,user_story_:[],usernam:1,users:4,userstory:1,userstory_set:2,using:2,usuari:[1,2,4],usuario_:[],utils:[1,4],validate_dat:2,validez:4,valor:1,valor_negoci:[],valor_tecn:[],verbose_name_plural:[],version:2,version_set:2,views:[],vist:4,volv:2},titles:["Welcome to project&#8217;s documentation!","Forms","Models","Signals","Views"],titleterms:{"0001_initial":[],"0002_auto_20150324_1442":[],"0003_auto_20150324_2209":[],"0004_auto_20150327_2310":[],"0004_auto_20150328_0155":[],"0005_auto_20150327_2313":[],"0006_merg":[],Forms:1,Indic:0,Models:2,Modul:[],Signals:3,Submodul:[],Subpackag:[],Urls:[],Views:4,Welcom:0,admin:[],and:0,contents:[],documentation:0,forms:[],migrations:[],models:[],modul:[],packag:[],population:[],project:0,tabl:0,tests:[],urls:[],views:[]}})