export interface Notification{
    id: number;
    user:{
        name: string;
        avatar: string;
    };
    action: string; //'joined', 'sent', 'commented', etc.
    target?: string; //'group', 'picture', etc.
    groupName?: string; // Optional, only for 'joined' action
    message?: string; // Optional, only for 'sent' action
    timestamp: Date;
    isRead: boolean;
}