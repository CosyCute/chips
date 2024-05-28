import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from 'widgets/Header/ui/Header';
import { Navbar } from 'widgets/Navbar';
import { Notification } from 'features/Notification';
import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';

import { AppRouter } from './providers/router';

import './styles/index.scss';
import classes from './App.module.scss';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = ({ className }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            className={classNames(classes.App, {}, [className])}
        >
            <div className={classes.content}>
                <Notification />
                <Header />
                <div className={classes.page}>
                    <AppRouter />
                </div>
                <Navbar />
            </div>
        </Flex>
    );
};
