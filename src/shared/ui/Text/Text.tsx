import { forwardRef, HTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';

import classes from './Text.module.scss';

export type TextVariant = 'primary' | 'secondary';
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    variant?: TextVariant;
    size?: TextSize;
    fontSize?: number;
    fontWeight?: number;
    heading?: boolean;
    accent?: boolean;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
    (props: TextProps, ref) => {
        const {
            className,
            children,
            variant,
            size = 'm',
            fontSize,
            fontWeight,
            heading,
            accent,
        } = props;

        const mods = {
            [classes[variant]]: true,
            [classes[size]]: true,
            [classes.heading]: heading,
            [classes.accent]: accent,
        };

        return heading ? (
            <p
                ref={ref}
                style={{ fontSize, fontWeight }}
                className={classNames(classes.Text, mods, [className])}
            >
                {children}
            </p>
        ) : (
            <span
                ref={ref}
                style={{ fontSize, fontWeight }}
                className={classNames(classes.Text, mods, [className])}
            >
                {children}
            </span>
        );
    },
);
