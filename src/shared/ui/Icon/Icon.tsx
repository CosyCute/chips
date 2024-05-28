import React, { forwardRef, HTMLAttributes } from 'react';

import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';

import classes from './Icon.module.scss';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    type: (typeof SvgIconType)[keyof typeof SvgIconType];
    secondary?: boolean;
    width?: string | number;
    height?: string | number;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
    ({ className, type, secondary = false, height, width }, ref) => {
        return (
            <Flex
                ref={ref}
                className={classNames(
                    classes.Icon,
                    { [classes.secondary]: secondary },
                    [className],
                )}
            >
                {React.cloneElement(type, { style: { width, height } })}
            </Flex>
        );
    },
);
