import { FC, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Text, TextProps } from 'shared/ui/Text';

import classes from './ClampedAddress.module.scss';

interface ClampedAddressProps extends TextProps {
    text: string;
    className?: string;
    showedChars?: number;
    accent?: boolean;
}

export const ClampedAddress: FC<ClampedAddressProps> = ({
    text,
    className,
    showedChars,
    accent,
    ...otherProps
}) => {
    const [lineClampText, setLineClampText] = useState<string>();
    const lineClampRef = useRef<HTMLParagraphElement>(null);
    const [refWidth, setRefWidth] = useState(-1);

    useEffect(() => {
        if (lineClampRef.current && refWidth <= 0) {
            const charsLength =
                showedChars || lineClampRef.current.clientWidth / 26;
            setRefWidth(lineClampRef.current.clientWidth);
            setLineClampText(
                `${text.slice(0, charsLength)}...${text.slice(
                    -1 * charsLength,
                )}`,
            );
        }
    }, [lineClampRef, text, refWidth, showedChars]);

    return (
        <div className={classNames(classes.ClampedAddress, {}, [className])}>
            <Text
                className={classes.text}
                accent={accent}
                ref={lineClampRef}
                {...otherProps}
            >
                {lineClampText}
            </Text>
        </div>
    );
};
