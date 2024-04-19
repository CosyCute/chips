import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './PlayIcon.module.scss';

export type PlayIconType = 'rectangle' | 'circle';

interface PlayIconProps {
    className?: string;
    variant?: PlayIconType;
}

export const PlayIcon: FC<PlayIconProps> = ({
    className,
    variant = 'rectangle',
}) => {
    return (
        <div
            className={classNames(
                classes.PlayIcon,
                { [classes[variant]]: true },
                [className],
            )}
        >
            <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 3.09001C1 2.13275 1 1.65412 1.19968 1.39028C1.37363 1.16043 1.63951 1.0182 1.92733 1.00102C2.25772 0.981305 2.65613 1.2468 3.45296 1.77779L13.8224 8.68778C14.4809 9.12653 14.8101 9.34591 14.9248 9.62241C15.0251 9.86416 15.0251 10.1358 14.9248 10.3776C14.8101 10.6541 14.4809 10.8735 13.8224 11.3122L3.45296 18.2222C2.65613 18.7532 2.25772 19.0187 1.92733 18.999C1.63951 18.9818 1.37363 18.8396 1.19968 18.6097C1 18.3459 1 17.8672 1 16.91V3.09001Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
