from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class Organisation(models.Model):
    name = models.CharField(max_length=127)
    desc = models.CharField(max_length=127)
    LOCATION_CHOICE=(('Banglalore','Bangalore'),('Pune','Pune'),('Noida','Noida'),('Hydrabad','Hydrabad'))
    location = models.CharField(max_length=127,choices=LOCATION_CHOICE)


class JobPosting(models.Model):
    name = models.CharField(max_length=100)
    place = models.OneToOneField(
        Organisation,
        on_delete=models.CASCADE
    )
    salary_range = models.CharField(max_length=100, null=True, blank=True)
    time_in_month = models.IntegerField(null=True, blank=True)
    prerequisites_skills = models.CharField(max_length=1000, null=True, blank=True)
    details = models.CharField(max_length=1000, null=True, blank=True)
    experience_min = models.IntegerField(null=True, blank=True)
    experience_max = models.IntegerField(null=True, blank=True)
    education = models.CharField(max_length=100, null=True, blank=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)


@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()