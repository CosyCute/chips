import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <Flex
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            className={classNames(classes.PageError, {}, [className])}
        >
            <Text heading>{t('Something went wrong')}</Text>
        </Flex>
    );
};
