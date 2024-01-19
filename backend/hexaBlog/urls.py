# hexaBlog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostList.as_view()),
    path('<int:post_id>/', views.PostDetails.as_view(), name='PostDetails'),
    path('create_post/', views.CreatePost.as_view(), name='create_post'), 
    
    path('register/', views.UserRegistration.as_view(), name='user_registration'),
    path('login/', views.UserLogin.as_view(), name='user_login'),
    path('logout/', views.UserLogout.as_view(), name='user_logout'),

]   
