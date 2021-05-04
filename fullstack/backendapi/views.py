from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Produto
from .serializers import ProdutoSerializer, UserSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, mixins, viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication


class ProdutoViewSet (viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated] #autenticação pode ser inserida globalmente em settings
    authentication_classes = (TokenAuthentication,)

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer





'''
class ProdutoL (APIView):
    def get(self, request):
        produtos = Produto.objects.all()
        serializer = ProdutoSerializer(produtos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProdutoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    
class ProdutoD (APIView):

    def get_object (self, id):
        try:
           return Produto.objects.get(id=id)
        except Produto.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def get (self, request, id):
        produto= self.get_object(id=id)
        serializer=ProdutoSerializer(produto)
        return Response(serializer.data)

    def put (self, request, id):
        produto = self.get_object(id)
        serializer = ProdutoSerializer(produto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete (self, request, id):
        produto = self.get_object(id)
        produto.delete()
        return Response (status=status.HTTP_204_NO_CONTENT)
    '''