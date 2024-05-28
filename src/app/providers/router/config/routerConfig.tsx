import { JSX } from 'react';
import { type RouteProps } from 'react-router-dom';

import { ChooseBetPage } from 'pages/ChooseBetPage';
import { DepositPage } from 'pages/DepositPage';
import { GamePage } from 'pages/GamePage';
import { HomePage } from 'pages/HomePage';
import HomePagee from 'pages/HomePagee/ui/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SettingsLanguagePage } from 'pages/SettingsLanguagePage';
import { SettingsPage } from 'pages/SettingsPage';
import { SettingsWithdrawalAddressPage } from 'pages/SettingsWithdrawalAddressPage';
import { WithdrawalPage } from 'pages/WithdrawalPage';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { Icon } from 'shared/ui/Icon';

export enum AppRoutes {
    HOME = 'home',
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'withdrawal',
    GAME = 'game',
    FRIENDS = 'friends',
    SETTINGS = 'settings',
    SETTINGS_WITHDRAWAL_ADDRESS = 'settings_withdrawal_address',
    SETTINGS_LANGUAGE = 'settings_Language',
    CHOOSE_BET = 'choose_bet',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/home',
    [AppRoutes.DEPOSIT]: '/deposit',
    [AppRoutes.WITHDRAWAL]: '/withdrawal',
    [AppRoutes.GAME]: '/game',
    [AppRoutes.FRIENDS]: '/friends',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.SETTINGS_WITHDRAWAL_ADDRESS]: '/settings/withdrawal-address',
    [AppRoutes.SETTINGS_LANGUAGE]: '/settings/language',
    [AppRoutes.CHOOSE_BET]: '/choose_bet',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePagee />,
    },
    [AppRoutes.DEPOSIT]: {
        path: RoutePath.deposit,
        element: <DepositPage />,
    },
    [AppRoutes.WITHDRAWAL]: {
        path: RoutePath.withdrawal,
        element: <WithdrawalPage />,
    },
    [AppRoutes.GAME]: {
        path: RoutePath.game,
        element: <GamePage />,
    },
    [AppRoutes.FRIENDS]: {
        path: RoutePath.friends,
        element: <HomePage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },

    [AppRoutes.SETTINGS_LANGUAGE]: {
        path: RoutePath.settings_Language,
        element: <SettingsLanguagePage />,
    },
    [AppRoutes.SETTINGS_WITHDRAWAL_ADDRESS]: {
        path: RoutePath.settings_withdrawal_address,
        element: <SettingsWithdrawalAddressPage />,
    },
    [AppRoutes.CHOOSE_BET]: {
        path: RoutePath.choose_bet,
        element: <ChooseBetPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

export type NavbarRouteProps = RouteProps & {
    icon: (accent: boolean) => JSX.Element;
};

// @ts-ignore
export const NavbarRoutesConfig: Record<AppRoutes, NavbarRouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        icon: (secondary) => (
            <Icon type={SvgIconType.home} secondary={secondary} />
        ),
    },
    [AppRoutes.DEPOSIT]: {
        path: RoutePath.deposit,
        icon: (secondary) => (
            <Icon type={SvgIconType.deposit} secondary={secondary} />
        ),
    },
    [AppRoutes.GAME]: {
        path: RoutePath.choose_bet,
        icon: (secondary) => <div />,
    },
    [AppRoutes.FRIENDS]: {
        path: RoutePath.friends,
        icon: (secondary) => (
            <Icon type={SvgIconType.friends} secondary={secondary} />
        ),
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        icon: (secondary) => (
            <Icon type={SvgIconType.settings} secondary={secondary} />
        ),
    },
};
