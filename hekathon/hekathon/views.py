from  django.shortcuts import render

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def home(request):
    return render(request, 'home.html')

def blog(request):
    return render(request, 'blog.html')

def products(request):
    return render(request, 'products.html')

def login(request):
    return render(request, 'login.html')

def payment(request):
    return render(request, 'payment.html')

def  profile(request):
    return render(request, 'profile.html')