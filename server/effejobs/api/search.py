from django.http import HttpResponse
import json


def get(request):
    results = {"count": 5, "data": [{1: 'ABC'}]}
    return HttpResponse(json.dumps(results), content_type='application/json')
