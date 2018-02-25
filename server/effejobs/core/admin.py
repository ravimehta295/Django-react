from django.contrib import admin
from . import models


# Register your models here.

class OrganisationAdmin(admin.ModelAdmin):
	pass


admin.site.register(models.Organisation, OrganisationAdmin)
