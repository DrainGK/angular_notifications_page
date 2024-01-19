import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../model/notification.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatButtonModule ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

  @Input() notification?: Notification;
  @Output() read = new EventEmitter<number>();

  markAsRead(){
    if (this.notification && !this.notification.isRead){
      console.log("Notification clicked:", this.notification.id);
      this.read.emit(this.notification.id);

    }
  }

  isImageSource(target: string): boolean {
    // Example check - modify as necessary for your case
    return target.endsWith('.jpg') || target.endsWith('.png') || target.endsWith('.gif') || target.endsWith('.webp');
}

}
