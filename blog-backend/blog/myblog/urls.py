# urls.py
from django.urls import path
from .views import PostList, PostDetail

urlpatterns = [
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/posts/<slug:slug>/', PostDetail.as_view(), name='post-detail'),
]
