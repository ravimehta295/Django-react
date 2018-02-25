from django.http import HttpResponse
import json


def get(request):
	results = {"count":0, "data": []}
	return HttpResponse(json.dumps(results), content_type='application/json')
