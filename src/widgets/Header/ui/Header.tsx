import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import {
    ChevronIcon,
    TonIcon,
    TonIconSize,
    TonIconType,
} from 'shared/assets/icons';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';

import classes from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

const balance = 10.3;

export const Header: FC<HeaderProps> = ({ className }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [exchangeRateActive, setExchangeRateActive] = useState(false);

    const showExchangeRate =
        location.pathname.includes(RoutePath.deposit) ||
        location.pathname.includes(RoutePath.withdrawal);

    useEffect(() => {
        if (exchangeRateActive) {
            setTimeout(() => {
                window.addEventListener(
                    'click',
                    () => {
                        setExchangeRateActive(false);
                    },
                    { once: true },
                );
            });
        }
    }, [exchangeRateActive]);

    const onExchangeRateOpen = () => {
        setExchangeRateActive(true);
    };

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            className={classNames(classes.Header, {}, [className])}
        >
            <div className={classes.notifications}>
                <Icon type={SvgIconType.notification} />
                <div className={classes.newNotification} />
            </div>
            <div
                className={classes.exchangeRateWrapper}
                onClick={onExchangeRateOpen}
            >
                {showExchangeRate && (
                    <div>
                        <Flex
                            alignItems="center"
                            gap={8}
                            className={classes.exchangeRate}
                        >
                            <Icon type={SvgIconType.info} />
                            <Text size="s">{t('Exchange rate')}</Text>
                            <ChevronIcon
                                className={classes.chevron}
                                direction={exchangeRateActive ? 'up' : 'down'}
                            />
                        </Flex>
                        {exchangeRateActive && (
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                gap={8}
                                className={classes.expanded}
                            >
                                <Flex
                                    gap={4}
                                    alignItems="center"
                                    className={classes.chips}
                                >
                                    <div />
                                    <span>1000</span>
                                </Flex>
                                <ChevronIcon className={classes.chevron} />
                                <Flex
                                    alignItems="center"
                                    gap={4}
                                    className={classes.ton}
                                >
                                    <TonIcon size={TonIconSize.S} />
                                    <span>1</span>
                                </Flex>
                            </Flex>
                        )}
                    </div>
                )}
            </div>
            <AppLink to={RoutePath.deposit}>
                <Flex alignItems="center" gap={10}>
                    <TonIcon variant={TonIconType.WHITE} size={TonIconSize.M} />
                    <Text>{balance}</Text>
                </Flex>
            </AppLink>
        </Flex>
    );
};
