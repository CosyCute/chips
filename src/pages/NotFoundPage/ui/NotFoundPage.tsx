import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            className={classNames(classes.NotFoundPage, {}, [className])}
        >
            <Text> {t('Page not found')}</Text>
        </Flex>
    );
};

export default NotFoundPage;
