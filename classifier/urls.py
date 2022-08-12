from unicodedata import name
from django.urls import path, include
from rest_framework import routers
from . import views
from .views import ClassifierViewSet

router = routers.DefaultRouter()
router.register(r'classifier', ClassifierViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]
urlpatterns = [
    path('',views.ClassifierViewSet.as_view({
        'get':'list'}),name='hello_classifier')
]
