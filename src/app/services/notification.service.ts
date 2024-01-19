import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../model/notification.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationsUrl = 'http://localhost:3000/notifications'; // URL to web API
  private unreadCount = new BehaviorSubject<number>(0);

  unreadCount$ = this.unreadCount.asObservable();

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.notificationsUrl).pipe(
      map((notifications: Notification[]) => {
        const unreadNotifications = notifications.filter(notification => !notification.isRead).length;
        this.unreadCount.next(unreadNotifications);
        return notifications;
      })
    );
  }

  markAsRead(notificationId: number): Observable<any>{
    const apiUrl = `http://localhost:3000/notifications/${notificationId}`;
    return this.http.patch(apiUrl, { isRead: true }).pipe(
      map((result) => {
        // After marking as read, decrement the unread count
        this.unreadCount.next(this.unreadCount.value - 1);
        return result;
      })
    );
    
  }
}

