from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from shop.models import Product
from shop.serializers import ProductSerializer



@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data, status = status.HTTP_200_OK)
