import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Divider.module.scss';

export type DividerDirection = 'horizontal' | 'vertical';

interface DividerProps {
    className?: string;
    direction?: DividerDirection;
    indent?: number | string;
}

export const Divider: FC<DividerProps> = ({
    className,
    direction = 'horizontal',
    indent = 20,
}) => {
    const indentNumber =
        typeof indent === 'number'
            ? indent
            : Number(indent.replace(/[^0-9]/g, ''));

    return (
        <div
            style={{
                margin:
                    direction === 'horizontal'
                        ? `${indentNumber}px 0`
                        : `0 ${indentNumber}px`,
            }}
            className={classNames(
                classes.Divider,
                {
                    [classes[direction]]: true,
                },
                [className],
            )}
        />
    );
};
