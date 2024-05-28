import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import { notificationActions } from 'features/Notification';
import { ChevronIcon } from 'shared/assets/icons';
import ProfileIcon from 'shared/assets/icons/profle-icon-example.png';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { ClampedAddress } from 'shared/ui/ClampedAddress';
import { Divider } from 'shared/ui/Divider';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';

import classes from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const address = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

const HomePage: FC<HomePageProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onCopyDepositAddress = () => {
        navigator.clipboard.writeText(address);
        dispatch(notificationActions.success(t('Copied')));
    };

    return (
        <div className={classNames(classes.HomePage, {}, [className])}>
            <Text heading>{t('My profile')}</Text>
            <Flex flexDirection="column" className={classes.profile}>
                <Flex alignItems="center" gap={10}>
                    <img src={ProfileIcon} alt="icon" />
                    <Flex flexDirection="column">
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <Text>Lorem Ipsum</Text>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <Text variant="secondary">@loremipsum</Text>
                    </Flex>
                </Flex>
                <Divider indent={20} />
                <Flex
                    gap={12}
                    alignItems="center"
                    className={classes.referrals}
                >
                    <Flex alignItems="center" gap={6} className={classes.flex1}>
                        <Icon type={SvgIconType.addFriend} />
                        <Text size="s">{t('Player invited')}:</Text>
                        <Text size="s" accent>
                            3
                        </Text>
                    </Flex>
                    <Flex alignItems="center" gap={6} className={classes.flex1}>
                        <Icon type={SvgIconType.diamond} />
                        <Text size="s">{t('Income')}:</Text>
                        <Text size="s" accent>
                            3
                        </Text>
                    </Flex>
                </Flex>
                <Divider indent={20} />
                <Button variant="clear" onClick={onCopyDepositAddress}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Flex
                            alignItems="center"
                            gap={6}
                            className={classes.deposit}
                        >
                            <Icon type={SvgIconType.deposit} />
                            <Text size="s">{t('Deposit')}:</Text>
                            <ClampedAddress size="s" text={address} />
                        </Flex>
                        <Icon type={SvgIconType.copy} />
                    </Flex>
                </Button>
            </Flex>
            <Flex flexDirection="column" gap={20} className={classes.buttons}>
                <Flex
                    gap={20}
                    alignItems="center"
                    className={classes.buttonOutlined}
                >
                    <Flex>
                        <Icon type={SvgIconType.miniPlayIcon} />
                    </Flex>
                    <AppLink to={RoutePath.choose_bet}>
                        <Flex
                            flexDirection="column"
                            className={classes.buttonText}
                        >
                            <Text size="s" heading>
                                {t('Play now')}
                            </Text>
                            <Text size="s">
                                {t('Join any active game and enjoy')}
                            </Text>
                        </Flex>
                    </AppLink>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </Flex>
                <Flex
                    gap={20}
                    alignItems="center"
                    className={classes.buttonOutlined}
                >
                    <div className={classes.icon}>
                        <Icon type={SvgIconType.createRoom} />
                    </div>
                    <div className={classes.buttonText}>
                        <Text size="s" heading>
                            {t('Create the room')}
                        </Text>
                        <Text size="s">{t('Create your own room')}</Text>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </Flex>
                <Flex
                    gap={20}
                    alignItems="center"
                    className={classes.buttonOutlined}
                >
                    <div className={classes.icon}>
                        <Icon type={SvgIconType.findRooms} />
                    </div>
                    <div className={classes.buttonText}>
                        <Text size="s" heading>
                            {t('Find rooms')}
                        </Text>
                        <Text size="s">{t('Find any lobby nearby')}</Text>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </Flex>
            </Flex>
        </div>
    );
};

export default HomePage;
