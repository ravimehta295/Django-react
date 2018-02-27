from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    email = forms.CharField(max_length=100)
    telephone = forms.IntegerField()
    LOCATION_CHOICE = (('Banglalore', 'Bangalore'),
                       ('Pune', 'Pune'), ('Noida', 'Noida'), ('Hydrabad', 'Hydrabad'))
    location = forms.ChoiceField(choices=LOCATION_CHOICE)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2', 'telephone', 'location',)
