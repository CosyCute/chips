import './styles/index.scss';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Header } from 'widgets/Header/ui/Header';
import { AppRouter } from 'app/providers/router';

import classes from './App.module.scss';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = ({ className }) => {
    return (
        <div className={classNames(classes.App, {}, [className])}>
            <div className={classes.content}>
                <Header />
                <div className={classes.page}>
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};
