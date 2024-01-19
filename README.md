# angular_notifications_page

![notification_page](https://github.com/DrainGK/angular_notifications_page/assets/25454614/d651bf04-4836-46a1-88d9-059c285fffc8)


# The purpose

The challenge is to build out a notification page and being close as possible to the original design.
I need to distinguish between “read” and “unread” notifications. When clicking on the card or “Mark all as read” 
button the design should change, and the notification counter should decrease regarding to the number of unread notifications. 

# How to do

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

After that I added inside the shared service a reactive subject from rxjs and observable. That way I can handle asynchronous flows of data. 
In that case, a counter for the notification. I used it for only one purpose, the check the unread notification and if it’s not equal to zero, 
change color of the icon.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/e162abe0-c201-4efc-8a1b-0ede99437aa8)

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/2cba81eb-36e1-40c2-935f-2fac8f85eb9e)

Only one failure, I wanted to implement a functionality, getting a notification menu like we can have on every apps and I could do it. 
But the responsive design was broken, which I could fixed it.

# What I’ve studied and learned:

In this challenge I was less focused on the structures than before, because I am getting used of Angular.
I knew that I had multiply comment, and a service to shared data through different component be cause I’ve done in the previous challenge.
The new thing was the “model” for the notification card, which I am already aware about it because I’ve done it inside some project ago. 
I am not yet confident about that.
But I am always starting with components then the service.
Which inside I only need to create functions to get the notifications and then update the isRead Boolean.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/c04a0884-a661-488a-9bd0-d8129cf3e86f)

@Input means that the value of this property can be passed from a parent component.
(by the way, the condition need to be “this.notification && !this.notification.isRead” which means if we can get the notification and if the property isRead = false, not only the property equal to false otherwise will get and error)

@Output is emitting the “read” event that will use in the parent component

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/924490d0-fee4-4bac-8579-a57b656836e5)

Here we can see the props “notification” that we were using in the condition. We can read and pass the id to identify which notifications was read and being able to filter it with “(read)=’onRead($event)’ ”.

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/b7c0c3b7-f374-4a49-8eb8-bdfe6a1c40be)
Then the Boolean became true. Because we’re calling the service and patching the object inside our backend. 
The data we’re getting also change, we can reach the condition “if(isRead = true)” and changing the style with [(ngStyle)] or with !isRead undisplay the red dot. 

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/4e9a7c51-4968-4ab3-9f00-ad43f6dcab95)  ![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/dd5263c3-19d3-4c95-b943-9f57e55cfbdf)

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/573cd13f-1439-43d1-816b-728cf9b44d96)

for the button “markAllAsRead” it is the same things, we’re just applying to each object from the notifications Array. Finding from ids is not necessary in that case.

The hard part was the make a connection for every elements, especially with a new technologies, it can slightly become overwhelming.
I struggled with rxjs, how to use pipe() and map().

![image](https://github.com/DrainGK/angular_notifications_page/assets/25454614/159d4204-7bb8-49a4-9c52-0352d4109fc1)

With rxjs, we’re setting up the “unreadCount”, being observed and emit to the observer. 
BehaviorSubject initialized the value to zero, which will evolve with time.

unreadCount$ make it the initial variable as an observable which represents values over any amount of time (which make it reactive). 
Then will use pipe for asynchronous operation and map to filter the notifications array to count those that are not equal to isRead = true.








