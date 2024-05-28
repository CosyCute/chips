import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationSchema } from '../types/notificationSchema';

const initialState: NotificationSchema = {
    status: 'none',
    opened: false,
    text: '',
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        success: (state, action: PayloadAction<string>) => {
            state.status = 'success';
            state.opened = true;
            state.text = action.payload;
        },
        error: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.opened = true;
            state.text = action.payload;
        },
        info: (state, action: PayloadAction<string>) => {
            state.status = 'info';
            state.opened = true;
            state.text = action.payload;
        },
        warning: (state, action: PayloadAction<string>) => {
            state.status = 'warning';
            state.opened = true;
            state.text = action.payload;
        },
        discard: (state) => {
            state.status = 'none';
            state.opened = false;
            state.text = '';
        },
    },
});

export const { actions: notificationActions, reducer: notificationReducer } =
    notificationSlice;
