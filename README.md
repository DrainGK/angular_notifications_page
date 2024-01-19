# angular_notifications_page

#The purpose

The challenge is to build out a notification page and being close as possible to the original design.
I need to distinguish between “read” and “unread” notifications. When clicking on the card or “Mark all as read” button the design should change, and the notification counter should decrease regarding to the number of unread notifications. 

#How to do

First of all I thought about the application structure, which it will help the most before going even further.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/f6b6353f-bfd4-46e2-bb8b-07002176d18f)

This schema helped me to decide about the structure.
Getting two different components:
-Notification (for a single card)
-Notification List (to map the different cards regarding to the backend)
-I added a navigation bar to be closer to a real project.

Then I could think about a shared service to call the back end, get the notification and patch the crud API.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/81426e45-048e-4a7d-b0bb-f90ab253876b)

I added in the model “isRead” Boolean to be initially false. 
When I click on a card or the Mark all as read button, I am calling a function and being able to use the service for patching the API.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/b6bac35b-724e-4d22-81fb-31de404d87de)

I’ve created a JSON file to implement the data, then I use JSON server to simulate a backend localised at localhost:3000

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/4d0cbaf3-be2b-4020-abe5-7789bcdecacc)

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/ea0b6e10-7de9-4133-bb27-df901f9a5674)


