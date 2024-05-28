import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { Icon } from 'shared/ui/Icon';
import { Portal } from 'shared/ui/Portal';
import { Text } from 'shared/ui/Text';

import { getNotificationState } from '../model/selectors/selectNotificationState/getNotificationState';
import { notificationActions } from '../model/slice/notificationSlice';

import classes from './Notification.module.scss';

interface NotificationProps {
    className?: string;
}

export const Notification: FC<NotificationProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { opened, status, text } = useSelector(getNotificationState);
    const [active, setActive] = useState(false);
    const timerRef = useRef(null);

    const mods: Record<string, boolean> = {
        [classes.active]: active,
        [classes.opened]: opened,
        [classes[status]]: true,
    };

    useEffect(() => {
        if (opened) {
            setActive(true);
            timerRef.current = setTimeout(() => {
                setActive(false);
                setTimeout(() => dispatch(notificationActions.discard()), 500);
            }, 3000);
        } else if (status !== 'none') {
            clearTimeout(timerRef.current);
            dispatch(notificationActions.discard());
        }
    }, [dispatch, opened, status]);

    return (
        <Portal element={document.body}>
            <div
                className={classNames(classes.Notification, mods, [className])}
            >
                {status === 'success' && <Icon type={SvgIconType.success} />}
                <Text>{text || `${status}!`}</Text>
            </div>
        </Portal>
    );
};
