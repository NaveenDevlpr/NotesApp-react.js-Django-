from django.urls import path
from .import views

urlpatterns = [
    
    path('notes/', views.getNotes,name='notes'),
    path('notes/create/', views.createNote,name='createnote'),
    path('notes/<str:pk>/', views.getNote,name='note'),
    path('notes/<str:pk>/update/', views.getUpdate,name='updatenote'),
    path('notes/<str:pk>/delete/', views.deleteNote,name='deletenote'),
   
]
