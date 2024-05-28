import React, {
    ChangeEvent,
    InputHTMLAttributes,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './Input.module.scss';

export type InputVariant = 'outline' | 'clear' | 'underline';

interface InputProps<T>
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'width' | 'min' | 'max'
    > {
    className?: string;
    onChange?: (value: T) => void;
    value?: T;
    variant?: InputVariant;
    width?: string | number;
    icon?: ReactElement;
    min?: number;
    max?: number;
}

type InputPropsGeneric<T> = T extends number ? number : string;

export function Input<T>(props: InputProps<InputPropsGeneric<T>>) {
    const {
        className,
        onChange,
        variant,
        value,
        width,
        icon,
        max,
        min,
        ...otherProps
    } = props;

    const [paddingIconWidth, setPaddingIconWidth] = useState(0);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (iconRef.current) {
            setPaddingIconWidth(iconRef.current.clientWidth + 10);
        }
    }, [iconRef]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const _value =
            typeof value === 'number'
                ? Number(event.target.value)
                : event.target.value;
        onChange(_value as InputPropsGeneric<T>);
    };

    return (
        <Flex
            alignItems="center"
            className={classNames(classes.inputWrapper, {}, [className])}
        >
            <Flex flexDirection="column">
                <input
                    min={min}
                    max={max}
                    className={classNames(
                        classes.Input,
                        { [classes[variant]]: true },
                        [],
                    )}
                    style={{
                        width,
                        paddingLeft: paddingIconWidth,
                    }}
                    value={value || ''}
                    onChange={handleChange}
                    {...otherProps}
                />
                <Flex
                    className={classes.rangeNumbers}
                    justifyContent="space-between"
                >
                    <Text variant="secondary">{min}</Text>
                    <Text variant="secondary">{max}</Text>
                </Flex>
            </Flex>
            {icon &&
                React.cloneElement(icon, {
                    className: classes.icon,
                    ref: iconRef,
                })}
        </Flex>
    );
}
