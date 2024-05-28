import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import { notificationActions } from 'features/Notification';
import { TonIcon, TonIconSize, TonIconType } from 'shared/assets/icons';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { Alert } from 'shared/ui/Alert';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { ClampedAddress } from 'shared/ui/ClampedAddress';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';

import classes from './DepositPage.module.scss';

const address = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

interface DepositPageProps {
    className?: string;
}

const DepositPage: FC<DepositPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [balanceHidden, setBalanceHidden] = useState(false);

    const onEyeClick = () => {
        setBalanceHidden((prev) => !prev);
    };

    const onAddressCopy = () => {
        navigator.clipboard.writeText(address);
        dispatch(notificationActions.success('Copied'));
    };

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            className={classNames(classes.DepositPage, {}, [className])}
        >
            <Flex
                flexDirection="column"
                alignItems="center"
                gap={20}
                className={classes.balance}
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.balanceHeader}
                >
                    <div style={{ opacity: '0' }}>
                        <Icon type={SvgIconType.eye} />
                    </div>
                    <Text variant="secondary">{t('BALANCE')}</Text>
                    <div onClick={onEyeClick}>
                        <Icon
                            type={
                                balanceHidden
                                    ? SvgIconType.closedEye
                                    : SvgIconType.eye
                            }
                        />
                    </div>
                </Flex>
                <TonIcon size={TonIconSize.L} variant={TonIconType.WHITE} />
                <Text fontSize={40}>{balanceHidden ? '*****' : 10.2}</Text>
                <Flex
                    justifyContent="space-between"
                    className={classes.buttons}
                >
                    <Flex flexDirection="column" alignItems="center" gap={12}>
                        <Button onClick={onAddressCopy} variant="square">
                            <Icon type={SvgIconType.plus} />
                        </Button>
                        <Text fontWeight={300} size="s" variant="secondary">
                            {t('BUY TON')}
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="center" gap={12}>
                        <AppLink to={RoutePath.withdrawal}>
                            <Button variant="square">
                                <Icon type={SvgIconType.withdrawal} />
                            </Button>
                        </AppLink>
                        <Text fontWeight={300} size="s" variant="secondary">
                            {t('WITHDRAW')}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Alert
                className={classes.depositBlock}
                title={t('Deposit address')}
                dividerIndent={20}
                text={
                    <Button
                        variant="clear"
                        onClick={onAddressCopy}
                        className={classes.address}
                    >
                        <Flex justifyContent="space-between">
                            <ClampedAddress
                                className={classes.clampedAddress}
                                text={address}
                            />
                            <Icon type={SvgIconType.copy} />
                        </Flex>
                    </Button>
                }
            />
        </Flex>
    );
};

export default DepositPage;
