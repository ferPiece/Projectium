from django.conf.urls import patterns, url
from project import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
                       url(r'^$', views.home, name='home'),
                       url(r'^users/$', views.UserList.as_view(), name='user_list'),
                       url(r'^users/(?P<pk>\d+)/$', views.UserDetail.as_view(), name='user_detail'),
                       url(r'^users/add/$', views.AddUser.as_view(), name="user_add"),
                       url(r'^users/(?P<pk>\d+)/delete/$', views.DeleteUser.as_view(), name="user_delete"),
                       url(r'^users/(?P<pk>\d+)/edit/$', views.UpdateUser.as_view(), name="user_update"),
                       url(r'^users/(\d+)/reporte/userstories/$', views.reporte_userstories_user, name="reporte_userstories_user"),
                       url(r'^projects/$', views.ProjectList.as_view(), name='project_list'),
                       url(r'^projects/cancelled$', views.ProjectList.as_view(show_cancelled=True), name='project_list_cancelled'),
                       url(r'^projects/add/$', views.ProjectCreate.as_view(), name='project_create'),
                       url(r'^projects/(?P<pk>\d+)/edit/$', views.ProjectUpdate.as_view(), name='project_update'),
                       url(r'^projects/(?P<pk>\d+)/delete/$', views.ProjectDelete.as_view(), name='project_delete'),
                       url(r'^projects/(?P<pk>\d+)/aprobar/$', views.ApproveProject.as_view(), name='project_aprobar'),
                       url(r'^projects/(?P<pk>\d+)/$', views.ProjectDetail.as_view(), name='project_detail'),
                       url(r'^projects/(?P<project_pk>\d+)/flujo/$',views.FlujoList.as_view(),name='flujo_list'),
                       url(r'^projects/(?P<proyecto_id>\d+)/reporte/backlog/$',views.reporte_backlog_producto, name='reporte_backlog_producto'),
                       url(r'^projects/(?P<proyecto_id>\d+)/reporte/lista_priorizada/$',views.reporte_lista_priorizada, name='reporte_lista_priorizada'),
                       url(r'^projects/(?P<proyecto_id>\d+)/reporte/equipo/$',views.reporte_equipo_proyecto, name='reporte_equipo_proyecto'),
                       url(r'^flujo/(?P<pk>\d+)/$', views.FlujoDetail.as_view(), name='flujo_detail'),
                       url(r'^flujo/(?P<pk>\d+)/sprint/(?P<sprint_pk>\d+)/$', views.FlujoDetailSprint.as_view(), name='flujo_detail_sprint'),
                       url(r'^projects/(?P<project_pk>\d+)/flujo/add/$', views.AddFlujo.as_view(), name="flujo_add"),
                       url(r'^projects/(?P<project_pk>\d+)/flujo/addfromtemplate/$', views.CreateFromPlantilla.as_view(), name="flujo_addfromtemplate"),
                       url(r'^flujo/(?P<pk>\d+)/edit/$', views.UpdateFlujo.as_view(), name="flujo_update"),
                       url(r'^flujo/(?P<pk>\d+)/delete/$', views.DeleteFlujo.as_view(), name="flujo_delete"),
                       url(r'^projects/(?P<project_pk>\d+)/userstories/$', views.UserStoriesList.as_view(),name='product_backlog'),
                       url(r'^projects/(?P<project_pk>\d+)/userstories/pending/$', views.ApprovalPendingUserStories.as_view(),name='pending_userstories'),
                       url(r'^userstory/(?P<pk>\d+)/$', views.UserStoryDetail.as_view(), name='userstory_detail'),
                       url(r'^projects/(?P<project_pk>\d+)/userstories/add/$', views.AddUserStory.as_view(), name="userstory_add"),
                       url(r'^userstory/(?P<pk>\d+)/edit/$', views.UpdateUserStory.as_view(), name="userstory_update"),
                       url(r'^userstory/(?P<pk>\d+)/registrar/$', views.RegistrarActividadUserStory.as_view(), name="userstory_registraractividad"),
                       url(r'^userstory/(?P<pk>\d+)/delete/$', views.DeleteUserStory.as_view(), name="userstory_delete"),
                       url(r'^userstory/(?P<pk>\d+)/aprobar/$', views.ApproveUserStory.as_view(), name="userstory_aprobar"),
                       url(r'^userstory/(?P<pk>\d+)/rechazar/$', views.RechazarUserStory.as_view(), name="userstory_rechazar"),
                       url(r'^userstory/(?P<pk>\d+)/cancelar/$',views.CancelUserStory.as_view(action='cancelar'),name="userstory_cancelar"),
                       url(r'^userstory/(?P<pk>\d+)/version/$', views.VersionList.as_view(), name="version_list"),
                       url(r'^userstory/(?P<pk>\d+)/revert/(?P<version_pk>\d+)/$', views.UpdateVersion.as_view(), name="version_revert"),
                       url(r'^userstory/(?P<pk>\d+)/files/$', views.FileList.as_view(), name="file_list"),
                       url(r'^userstory/(?P<pk>\d+)/files/upload/$', views.UploadFileView.as_view(), name="file_upload"),
                       url(r'^file/(?P<pk>\d+)/$', views.FileDetail.as_view(), name="file_detail"),
                       url(r'^nota/(?P<pk>\d+)/$', views.NotaDetail.as_view(), name='nota_detail'),
                       url(r'^userstory/(?P<pk>\d+)/notas/$', views.NotaList.as_view(), name="nota_list"),
                       url(r'^roles/$', views.RolList.as_view(), name='rol_list'),
                       url(r'^roles/(?P<pk>\d+)/$', views.RolDetail.as_view(), name='rol_detail'),
                       url(r'^roles/add/$', views.AddRolView.as_view(), name="rol_add"),
                       url(r'^roles/(?P<pk>\d+)/edit/$', views.UpdateRolView.as_view(), name="rol_update"),
                       url(r'^roles/(?P<pk>\d+)/delete/$', views.DeleteRolView.as_view(), name="rol_delete"),
                       url(r'^attachment/(?P<pk>\d+)/$', views.download_attachment, name='download_attachment'),
                       url(r'^projects/(?P<project_pk>\d+)/sprint/add/$', views.AddSprintView.as_view(), name="sprint_add"),
                       url(r'^sprint/(?P<pk>\d+)/$', views.SprintDetail.as_view(), name='sprint_detail'),
                       url(r'^projects/(?P<project_pk>\d+)/sprint/$', views.SprintList.as_view(),name="sprint_list"),
                       url(r'^sprint/(?P<pk>\d+)/edit/$', views.UpdateSprintView.as_view(), name="sprint_update"),

                       url(r'^plantilla/$',views.PlantillaList.as_view(),name='plantilla_list'),
                       url(r'^plantilla/(?P<pk>\d+)/$', views.PlantillaDetail.as_view(), name='plantilla_detail'),
                       url(r'^plantilla/add/$', views.AddPlantilla.as_view(), name="plantilla_add"),
                       url(r'^plantilla/(?P<pk>\d+)/delete/$', views.DeletePlantilla.as_view(), name="plantilla_delete"),
                       url(r'^plantilla/(?P<pk>\d+)/edit/$', views.UpdatePlantilla.as_view(), name="plantilla_update"),

                       url(r'sprint/(?P<pk>\d+)/burndown/$', views.SprintBurndown.as_view(), name='sprint_burndown'),
                       url(r'^sprint/(\d+)/reporte/backlog/$',views.reporte_backlog_sprint, name='reporte_backlog_sprint'),
                       url(r'morris/(?P<sprint_pk>\d+)/generate/$', views.generarNotas, name='generate'),
                       )

