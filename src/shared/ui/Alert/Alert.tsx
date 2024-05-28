import { FC, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Divider } from 'shared/ui/Divider';
import { Text } from 'shared/ui/Text';

import classes from './Alert.module.scss';

interface AlertProps {
    className?: string;
    title?: string | ReactNode;
    text?: string | ReactNode;
    dividerIndent?: number;
}

export const Alert: FC<AlertProps> = ({
    className,
    title,
    text,
    dividerIndent = 20,
}) => {
    return (
        <div className={classNames(classes.Alert, {}, [className])}>
            {title && (
                <>
                    <Text heading>{title}</Text>
                    <Divider indent={dividerIndent} />
                </>
            )}
            <Text>{text}</Text>
        </div>
    );
};
