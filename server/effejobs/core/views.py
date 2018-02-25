import json
from django.shortcuts import render


def home(request):

	user_data = {}
	if not request.user.is_anonymous:
		user_data = {
			'name': request.user.username
		}

	return render(request, 'index.html', {'user_data':json.dumps(user_data)})
