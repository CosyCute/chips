import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LanguageVariant } from 'shared/constants';

import { LanguageSchema } from '../types/language';

const initialState: LanguageSchema = {};

export const languageSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<LanguageVariant>) => {
            state.language = action.payload;
        },
    },
});

export const { actions: languageActions } = languageSlice;
export const { reducer: languageReducer } = languageSlice;
