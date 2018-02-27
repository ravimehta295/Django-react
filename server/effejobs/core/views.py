import json
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from .models import JobPosting
from effejobs.core.forms import SignUpForm


def home(request):
    user_data = {}
    if not request.user.is_anonymous:
        user_data = {
             'name': request.user.username
        }
    return render(request, 'index.html', {'user_data': json.dumps(user_data)})


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  # load the profile instance created by the signal
            user.profile.birth_date = form.cleaned_data.get('birth_date')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})


def searching(request, name,location):
    jobs = JobPosting.objects.all()
    print(jobs)
