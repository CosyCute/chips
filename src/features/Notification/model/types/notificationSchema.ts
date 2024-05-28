export type NotificationStatus =
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'none';

export interface NotificationSchema {
    status: NotificationStatus;
    text: string;
    opened: boolean;
}
