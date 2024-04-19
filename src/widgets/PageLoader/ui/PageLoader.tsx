import type { FC } from 'react';
import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/classNames';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
