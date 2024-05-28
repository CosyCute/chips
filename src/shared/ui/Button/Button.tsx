import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import classes from './Button.module.scss';

export type ButtonVariant = 'contained' | 'outlined' | 'clear' | 'square';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant = 'contained',
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                classes.Button,
                { [classes[variant]]: true },
                [className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
