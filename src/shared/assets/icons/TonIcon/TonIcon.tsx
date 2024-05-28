import React, { forwardRef, HTMLAttributes, LegacyRef } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';

import classes from './TonIcons.module.scss';

export enum TonIconType {
    WHITE = 'white_type',
    BLUE = 'blue_type',
    BLACK = 'black_type',
}

export enum TonIconSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TonIconProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: TonIconType;
    size?: TonIconSize;
    ref?: LegacyRef<HTMLDivElement>;
}

export const TonIcon = forwardRef<HTMLDivElement, TonIconProps>(
    (props, ref) => {
        const {
            className,
            variant = TonIconType.BLUE,
            size = TonIconSize.L,
            ...otherProps
        } = props;

        const mods: Record<string, boolean> = {
            [classes[variant]]: true,
            [classes[size]]: true,
        };

        return (
            <Flex
                justifyContent="center"
                alignItems="center"
                ref={ref}
                className={classNames(classes.TonIcon, mods, [className])}
                {...otherProps}
            >
                <svg
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.07489 5.25278L0.896613 0.895458H6.1044L3.92573 5.25356V0.900782H3.07489V5.25278ZM4.30146 6.50456C3.97148 7.16463 3.02953 7.16463 2.69956 6.50456L0.0956632 1.29586C-0.201979 0.700476 0.230973 0 0.896613 0H6.1044C6.77004 0 7.20299 0.700476 6.90535 1.29586L4.30146 6.50456Z"
                        fill={variant === TonIconType.WHITE ? 'black' : 'white'}
                    />
                </svg>
            </Flex>
        );
    },
);
