
from django.urls import path
from .views import PostList, PostDetail, PostDeleteUpdateView

urlpatterns = [
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/posts/<slug:slug>/', PostDetail.as_view(), name='post-detail'),
    path('api/posts/<slug:slug>/delete-update/', PostDeleteUpdateView.as_view(), name='post-delete-update'),
]
