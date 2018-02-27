from django.contrib import admin
from . import models
from django.contrib.admin.sites import AdminSite

# Register your models here.


class OrganisationAdmin(admin.ModelAdmin):
    pass


admin.site.register(models.Organisation, OrganisationAdmin)
admin.site.register(models.JobPosting)