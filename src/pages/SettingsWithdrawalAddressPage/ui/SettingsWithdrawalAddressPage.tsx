import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { BackHeader } from 'widgets/BackHeader';
import { notificationActions } from 'features/Notification';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Flex } from 'shared/ui/Flex';
import { Input } from 'shared/ui/Input';

import classes from './SettingsWithdrawalAddressPage.module.scss';

interface SettingsItemPageProps {
    className?: string;
}

const SettingsWithdrawalAddressPage: FC<SettingsItemPageProps> = ({
    className,
}) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [withdrawalAddress, setWithdrawalAddress] = useState<string>('');

    const onSubmit = () => {
        dispatch(notificationActions.success());
    };

    return (
        <Flex
            flexDirection="column"
            className={classNames(classes.SettingsWithdrawalAddressPage, {}, [
                className,
            ])}
        >
            <BackHeader title={t('Change the withdrawal address')} />
            <Input
                placeholder={t('Type your new address')}
                value={withdrawalAddress}
                className={classes.input}
                variant="underline"
                onChange={setWithdrawalAddress}
            />
            <Button onClick={onSubmit} className={classes.submitButton}>
                {t('SAVE')}
            </Button>
        </Flex>
    );
};

export default SettingsWithdrawalAddressPage;
