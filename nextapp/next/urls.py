from django.urls import path
from .views import ExampleView,SubmitView

urlpatterns = [
    path('example/', ExampleView.as_view(), name='example'),
        path('submit/', SubmitView.as_view(), name='submit'),

]
