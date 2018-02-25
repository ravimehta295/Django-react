from django.db import models

# Create your models here.
class Organisation(models.Model):
	name = models.CharField(max_length=127)
	desc = models.CharField(max_length=127)
	location = models.CharField(max_length=127)

