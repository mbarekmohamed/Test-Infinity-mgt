from django.shortcuts import render

from .models import condidats
from rest_framework import routers, serializers, viewsets
from .serializers import CandidatsSerializer,SaveCandidatsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def CandidatsList(request):
    models=condidats.objects.all()
    serializer=CandidatsSerializer(models,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Save(request):
    nom=request.query_params['nom']
    prenom=request.query_params['prenom']
    email=request.query_params['email']
    date=request.query_params['date']
    tel=request.query_params['tel']
    disp=request.query_params['disp']
    exp = request.query_params['exp']
    cv = request.query_params['cv']
    msg = request.query_params['msg']
    condidats.objects.create(nom=nom,prenom=prenom,email=email,date_naiss=date,tel=tel,nbr_ann_exp=exp,disponibilite=disp,cv=cv,message=msg)
