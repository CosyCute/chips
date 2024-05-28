import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import { BackHeader } from 'widgets/BackHeader';
import { notificationActions } from 'features/Notification';
import {
    ChevronIcon,
    TonIcon,
    TonIconSize,
    TonIconType,
} from 'shared/assets/icons';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { Alert } from 'shared/ui/Alert';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { ClampedAddress } from 'shared/ui/ClampedAddress';
import { Crumbs, CrumbsItem } from 'shared/ui/Crumbs';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';

import classes from './WithdrawalPage.module.scss';

interface WithdrawalPageProps {
    className?: string;
}

const crumbs: CrumbsItem<number>[] = [
    {
        id: 0,
        value: 2000,
        displayedValue: 'min',
    },
    {
        id: 1,
        value: 5000,
        displayedValue: '50%',
    },
    {
        id: 2,
        value: 10000,
        displayedValue: 'max',
    },
];

const address = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

const WithdrawalPage: FC<WithdrawalPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState<number>();

    const onCrumbSelect = (_value: CrumbsItem<number>) => {
        setAmount(_value.value);
    };

    const onWithdraw = () => {
        dispatch(notificationActions.success());
    };

    return (
        <Flex
            flexDirection="column"
            className={classNames(classes.WithdrawalPage, {}, [className])}
        >
            <BackHeader title={t('Withdrawal')} />
            <Input<number>
                icon={
                    <TonIcon variant={TonIconType.WHITE} size={TonIconSize.M} />
                }
                className={classes.withdrawalAmount}
                width="100%"
                variant="underline"
                value={amount}
                onChange={setAmount}
                type="number"
                placeholder={t('Enter amount')}
            />
            <Crumbs<number>
                crumbs={crumbs}
                onChange={onCrumbSelect}
                className={classes.crumbs}
            />
            <Flex alignItems="center" gap={8} className={classes.info}>
                <Icon secondary type={SvgIconType.info} />
                <Text variant="secondary">
                    {t('Minimum withdrawal amount: 2 TON')}
                </Text>
            </Flex>
            <Alert
                className={classes.withdrawalAddress}
                title={t('Withdrawal wallet')}
                text={
                    <AppLink to={RoutePath.settings_withdrawal_address}>
                        <Flex justifyContent="space-between">
                            <ClampedAddress
                                variant="secondary"
                                text={address}
                            />
                            <ChevronIcon isAccent={false} direction="right" />
                        </Flex>
                    </AppLink>
                }
            />
            <Button className={classes.withdrawButton} onClick={onWithdraw}>
                {t('WITHDRAW')}
            </Button>
        </Flex>
    );
};

export default WithdrawalPage;
