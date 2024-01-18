# hexaBlog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostList.as_view()),
    path('<int:post_id>/', views.PostDetails.as_view(), name='PostDetails'),
    path('create_post/', views.CreatePost.as_view(), name='create_post'), 
]
