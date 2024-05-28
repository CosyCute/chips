export enum LanguageVariant {
    ENGLISH = 'English',
    RUSSIAN = 'Русский',
}

export enum LanguageShortVariant {
    ENGLISH = 'en',
    RUSSIAN = 'ru',
}

export const getLongLanguageNameByShort = (short: string) => {
    if (short === LanguageShortVariant.RUSSIAN) return LanguageVariant.RUSSIAN;
    return LanguageVariant.ENGLISH;
};

export const LanguagesArray = [
    {
        id: 0,
        value: LanguageShortVariant.ENGLISH,
        displayedValue: LanguageVariant.ENGLISH,
    },
    {
        id: 1,
        value: LanguageShortVariant.RUSSIAN,
        displayedValue: LanguageVariant.RUSSIAN,
    },
];
