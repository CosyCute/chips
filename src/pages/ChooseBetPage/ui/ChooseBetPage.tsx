import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import { BackHeader } from 'widgets/BackHeader';
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
import { Crumbs, CrumbsItem } from 'shared/ui/Crumbs';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';

import classes from './ChooseBetPage.module.scss';

const crumbs: CrumbsItem<number>[] = [
    {
        id: 0,
        value: 1000,
        displayedValue: 'min',
    },
    {
        id: 1,
        value: 5010,
        displayedValue: '50%',
    },
    {
        id: 2,
        value: 10200,
        displayedValue: 'max',
    },
];

interface SettingsItemPageProps {
    className?: string;
}

const balance = 10200;

const ChooseBetPage: FC<SettingsItemPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const [bet, setBet] = useState<number>();
    const [buyIn, setButIn] = useState<number>();
    const [betRange, setBetRange] = useState<number>(balance / 2);

    const onRangeChange = (_value: number) => {
        setBetRange(_value);
        setButIn(Math.floor(_value / 10));
        setBet(_value);
    };

    const onBetChange = (_value: number) => {
        if (betRange >= _value) {
            setBet(_value);
        }
    };

    const onBuyInChange = (_value: number) => {
        if (balance >= _value) {
            setButIn(_value);
        }
    };

    const onCrumbSelect = (_value: CrumbsItem<number>) => {
        onRangeChange(_value.value);
    };

    return (
        <Flex
            flexDirection="column"
            className={classNames(classes.ChooseBetPage, {}, [className])}
        >
            <BackHeader title={t('Choose your table')} />
            <Alert
                className={classes.mt20}
                title={
                    <Flex
                        justifyContent="space-between"
                        className={classes.exchangeRateHeading}
                    >
                        <Flex gap={10} alignItems="center">
                            <Icon type={SvgIconType.info} />
                            <Text>{t('Exchange rate')}</Text>
                        </Flex>
                        <Text variant="secondary">{t('CHIPS/TON')}</Text>
                    </Flex>
                }
                text={
                    <Flex justifyContent="center" alignItems="center" gap={20}>
                        <Flex gap={4} alignItems="center">
                            <div />
                            <span>1000</span>
                        </Flex>
                        <ChevronIcon />
                        <Flex alignItems="center" gap={4}>
                            <TonIcon size={TonIconSize.S} />
                            <span>1</span>
                        </Flex>
                    </Flex>
                }
            />
            <div className={classes.mt40}>
                <Text size="s" heading>
                    {t('Bet // Buy in')}
                </Text>
                <div className={classes.mt40}>
                    <Input<number>
                        icon={
                            <TonIcon
                                size={TonIconSize.M}
                                variant={TonIconType.WHITE}
                            />
                        }
                        type="number"
                        value={bet}
                        onChange={onBetChange}
                        placeholder={t('Bet')}
                        variant="underline"
                    />
                    <Input<number>
                        icon={
                            <TonIcon
                                size={TonIconSize.M}
                                variant={TonIconType.WHITE}
                            />
                        }
                        className={classes.mt20}
                        type="number"
                        value={buyIn}
                        onChange={onBuyInChange}
                        placeholder={t('Buy in')}
                        variant="underline"
                    />
                    <Input<number>
                        className={classes.mt40}
                        min={1000}
                        max={balance}
                        value={betRange}
                        onChange={onRangeChange}
                        type="range"
                        variant="underline"
                    />
                    <Crumbs<number>
                        crumbs={crumbs}
                        onChange={onCrumbSelect}
                        className={classes.mt40}
                    />
                </div>
            </div>
            <AppLink to={RoutePath.game}>
                <Button className={classes.submitButton}>
                    {t('FIND ROOM')}
                </Button>
            </AppLink>
        </Flex>
    );
};

export default ChooseBetPage;
