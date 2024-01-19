import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../model/notification.model';
import { NotificationsComponent } from '../notifications/notifications.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [CommonModule,NotificationsComponent, MatButtonModule],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss'
})
export class NotificationListComponent implements OnInit {

  notifications: Notification[] = [];
  unreadNotificationsCount: number = 0;

  constructor(private notificationService: NotificationService){}
  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (data: Notification[]) => {
        this.notifications = data;
        this.updateUnreadNotificationsCount();
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    )
  }

  onRead(notificationId: number){
    this.notificationService.markAsRead(notificationId).subscribe(
      ()=> {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification){
          notification.isRead = true;
          this.updateUnreadNotificationsCount();
        }
      },
      (error) => {
        console.error('Error marking notification as read', error);
      }
    );
  }

  updateUnreadNotificationsCount(): void {
    // Filter notifications where isRead is false and get the length of the resulting array
    this.unreadNotificationsCount = this.notifications.filter(notification => !notification.isRead).length;
  }

  markAllAsRead(){
    this.notifications.forEach(notification => {
      this.notificationService.markAsRead(notification.id).subscribe(
        response => {
          // Handle the successful response here
          // For example, you might want to log a success message or perform some UI update
          notification.isRead = true;
          console.log(`Notification ${notification.id} marked as read successfully`);
          this.updateUnreadNotificationsCount();
        },
        error => {
          // Handle errors here
          // For example, you might want to log the error or display a message to the user
          console.error(`Failed to mark notification ${notification.id} as read`, error);
        }
      );
    });
  }
}
