from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
import hashlib, random

random_string = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz1234567890/$?!', k=4))
str = random_string
hasho = hashlib.sha256()
hasho.update(str.encode('utf8'))
hex = hasho.hexdigest()[:6]

password = hex

class SubmitView(APIView):
    def post(self, request):
        input_value = request.data.get('input_value')
        response_data = {'message': f'Received: {input_value}'}

        subject = 'Оролдлого амжилттай хийгдлээ'
        message = 'таны нууц үг бол ' + hex
        sender_email = 'your-email@gmail.com'
        receiver_email = input_value

        try:
            send_mail(
                subject,
                message,
                sender_email,
                [receiver_email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send email: {e}")
            return Response({'error': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(response_data, status=status.HTTP_200_OK)
    
class ExampleView(APIView):
    def get(self, request):
        data = {
            "message": "Hello World " + password
        }
        return Response(data, status=status.HTTP_200_OK)
