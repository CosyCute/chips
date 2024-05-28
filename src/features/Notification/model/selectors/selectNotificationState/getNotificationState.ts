import { StateSchema } from 'app/providers/StoreProvider';

export const getNotificationState = (state: StateSchema) => state?.notification;
