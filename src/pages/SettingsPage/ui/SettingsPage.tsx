import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutePath } from 'app/providers/router/config/routerConfig';
import { ChevronIcon } from 'shared/assets/icons';
import ProfileIcon from 'shared/assets/icons/profle-icon-example.png';
import { getLongLanguageNameByShort } from 'shared/constants';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { ClampedAddress } from 'shared/ui/ClampedAddress';
import { Divider } from 'shared/ui/Divider';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './SettingsPage.module.scss';

interface SettingsPageProps {
    className?: string;
}

const address = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

const SettingsPage: FC<SettingsPageProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    return (
        <Flex
            flexDirection="column"
            className={classNames(classes.SettingsPage, {}, [className])}
        >
            <Text heading>{t('Settings')}</Text>
            <Flex alignItems="center" gap={30} className={classes.profile}>
                <img src={ProfileIcon} alt="icon" />
                <div className={classes.profileRightSide}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Text fontWeight={500}>Lorem Ipsum</Text>
                    <Divider indent={15} />
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Text variant="secondary">@loremipsum</Text>
                </div>
            </Flex>
            <Text variant="secondary" className={classes.infoText}>
                {t('Enter your name and add an optional profile photo')}
            </Text>
            <Flex flexDirection="column" gap={30} className={classes.settings}>
                <AppLink to={RoutePath.settings_withdrawal_address}>
                    <Flex
                        justifyContent="space-between"
                        className={classes.settingsItem}
                    >
                        <Text>{t('Withdrawal address')}</Text>
                        <Flex gap={10} className={classes.settingsItemValue}>
                            <ClampedAddress
                                showedChars={5}
                                variant="secondary"
                                text={address}
                            />
                            <ChevronIcon isAccent={false} />
                        </Flex>
                    </Flex>
                </AppLink>
                <AppLink to={RoutePath.settings_Language}>
                    <Flex
                        justifyContent="space-between"
                        className={classes.settingsItem}
                    >
                        <Text>{t('Language')}</Text>
                        <Flex gap={10} className={classes.settingsItemValue}>
                            <Text variant="secondary">
                                {getLongLanguageNameByShort(i18n.language)}
                            </Text>
                            <ChevronIcon isAccent={false} />
                        </Flex>
                    </Flex>
                </AppLink>
            </Flex>
        </Flex>
    );
};

export default SettingsPage;
