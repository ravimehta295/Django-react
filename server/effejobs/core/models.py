from django.db import models

# Create your models here.


class Organisation(models.Model):
    name = models.CharField(max_length=127)
    desc = models.CharField(max_length=127)
    location = models.CharField(max_length=127)


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
