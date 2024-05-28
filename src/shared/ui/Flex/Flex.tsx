import { CSSProperties, forwardRef, HTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';

import classes from './Flex.module.scss';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    alignItems?: CSSProperties['alignItems'];
    flexDirection?: CSSProperties['flexDirection'];
    justifyContent?: CSSProperties['justifyContent'];
    flexGrow?: CSSProperties['flexGrow'];
    gap?: string | number;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            className,
            children,
            flexDirection,
            gap,
            justifyContent,
            flexGrow,
            alignItems,
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                className={classNames(classes.Flex, {}, [className])}
                style={{
                    alignItems,
                    flexDirection,
                    justifyContent,
                    flexGrow,
                    gap,
                }}
            >
                {children}
            </div>
        );
    },
);
