import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentLanguage = (state: StateSchema) =>
    state.language.language;
