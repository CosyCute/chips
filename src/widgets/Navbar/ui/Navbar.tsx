import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {
    AppRoutes,
    NavbarRoutesConfig,
} from 'app/providers/router/config/routerConfig';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            className={classNames(classes.Navbar, {}, [className])}
        >
            {Object.entries(NavbarRoutesConfig).map(([key, item]) => {
                if (key === AppRoutes.GAME) {
                    return (
                        <AppLink key={key} to={item.path}>
                            <Icon type={SvgIconType.playIcon} />
                        </AppLink>
                    );
                }
                let isActive = false;

                if (location.pathname.includes(item.path)) {
                    isActive = true;
                }

                return (
                    <AppLink to={item.path} key={key}>
                        <Flex
                            flexDirection="column"
                            alignItems="center"
                            gap={6}
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                className={classes.icon}
                            >
                                {item.icon(!isActive)}
                            </Flex>
                            <Text
                                variant={isActive ? 'primary' : 'secondary'}
                                size="xs"
                                className={classes.key}
                            >
                                {t([key])}
                            </Text>
                        </Flex>
                    </AppLink>
                );
            })}
        </Flex>
    );
};
