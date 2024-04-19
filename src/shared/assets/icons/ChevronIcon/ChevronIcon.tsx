import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './ChevronIcon.module.scss';

export type ChevronIconDirection = 'left' | 'right' | 'up' | 'down';

interface ChevronIconProps {
    className?: string;
    direction?: ChevronIconDirection;
    isAccent?: boolean;
}

export const ChevronIcon: FC<ChevronIconProps> = ({
    className,
    direction = 'left',
    isAccent = true,
}) => {
    return (
        <div
            className={classNames(
                classes.ChevronIcon,
                { [classes[direction]]: true },
                [className],
            )}
        >
            <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.75 12.5L1.25 7L6.75 1.5"
                    stroke={isAccent ? 'white' : '#5B5B5B'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
