import type { FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';
import { Loader } from 'shared/ui/Loader';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        className={classNames(classes.PageLoader, {}, [className])}
    >
        <Loader />
    </Flex>
);
