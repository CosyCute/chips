import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    NotificationIcon,
    TonIcon,
    TonIconSize,
    TonIconType,
} from 'shared/assets/icons';
import classes from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    const balance = 10.3;

    return (
        <div className={classNames(classes.Header, {}, [className])}>
            <div className={classes.notifications}>
                <NotificationIcon />
                <div className={classes.newNotification} />
            </div>
            <div className={classes.balance}>
                <TonIcon variant={TonIconType.WHITE} size={TonIconSize.M} />
                <div>{balance}</div>
            </div>
        </div>
    );
};
