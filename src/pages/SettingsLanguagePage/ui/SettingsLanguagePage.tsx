import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { BackHeader } from 'widgets/BackHeader';
import { notificationActions } from 'features/Notification';
import { LanguagesArray, LanguageShortVariant } from 'shared/constants';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Flex } from 'shared/ui/Flex';
import { Select } from 'shared/ui/Select';

import classes from './SettingsLanguagePage.module.scss';

interface SettingsItemPageProps {
    className?: string;
}

const SettingsLanguagePage: FC<SettingsItemPageProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] =
        useState<LanguageShortVariant>(i18n.language as LanguageShortVariant);

    const onSubmit = () => {
        dispatch(notificationActions.success());
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <Flex
            flexDirection="column"
            className={classNames(classes.SettingsLanguagePage, {}, [
                className,
            ])}
        >
            <BackHeader title={t('Choose your language')} />
            <Select<LanguageShortVariant>
                items={LanguagesArray}
                value={selectedLanguage}
                onChange={setSelectedLanguage}
            />
            <Button onClick={onSubmit} className={classes.submitButton}>
                {t('SAVE')}
            </Button>
        </Flex>
    );
};

export default SettingsLanguagePage;
