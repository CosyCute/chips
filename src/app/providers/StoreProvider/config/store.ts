import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { notificationReducer } from 'features/Notification';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        notification: notificationReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
}
