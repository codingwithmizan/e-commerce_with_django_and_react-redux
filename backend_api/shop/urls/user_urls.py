from django.urls import path
from shop.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('profile/update/', views.updateUserProfile, name='update-user-profile'),
    path('', views.getUsers, name='user'),
    path('register/', views.registerUser, name='register'),
   
]