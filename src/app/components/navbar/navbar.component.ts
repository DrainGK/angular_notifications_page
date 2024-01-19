import { Component, OnInit  } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationListComponent  } from '../notification-list/notification-list.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NotificationListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  showNotificationMenu = false;
  hasUnreadNotifications?: boolean;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.unreadCount$.subscribe(count => {
      this.hasUnreadNotifications = count > 0;
    });
  }

  toggleNotificationsMenu(){
    this.showNotificationMenu = !this.showNotificationMenu;
  }
}
