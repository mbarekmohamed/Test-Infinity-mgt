from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from .models import condidats

# Serializers define the API representation.
class CandidatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = condidats
        fields = '__all__'

class SaveCandidatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = condidats
        fields = '__all__'