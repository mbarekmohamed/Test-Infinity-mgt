from django.db import models

# Create your models here.

class condidats(models.Model):
    nom = models.CharField(max_length=30)
    prenom = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    date_naiss=models.DateField(blank=True, null=True)
    tel = models.IntegerField(default=0)
    disponibilite=models.IntegerField(default=0)
    nbr_ann_exp=models.IntegerField(default=0)
    cv=models.FileField(default='')
    message=models.TextField(default='')
    statut_mail=models.CharField(max_length=30,default='valide')
    etat=models.CharField(max_length=30,default='nouvelle')