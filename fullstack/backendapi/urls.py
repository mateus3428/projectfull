from django.urls import path, include
from .views import ProdutoViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
    #ProdutoL, ProdutoD

router = DefaultRouter()
router.register('produtos', ProdutoViewSet, basename='produtos')
router.register('user', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    #path('produto/', ProdutoL.as_view()),
    #path('produto/<int:id>', ProdutoD.as_view())
]