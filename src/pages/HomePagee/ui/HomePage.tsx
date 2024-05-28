import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { notificationActions } from 'features/Notification';
import { ChevronIcon } from 'shared/assets/icons';
import ProfileIcon from 'shared/assets/icons/profle-icon-example.png';
import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { ClampedAddress } from 'shared/ui/ClampedAddress';
import { Divider } from 'shared/ui/Divider';
import { Icon } from 'shared/ui/Icon';

import classes from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const address = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

const HomePagee: FC<HomePageProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onCopyDepositAddress = () => {
        navigator.clipboard.writeText(address);
        dispatch(notificationActions.success(t('Copied')));
    };

    return (
        <div className={classNames(classes.HomePage, {}, [className])}>
            <div className={classes.textHeading}>{t('My profile')}</div>
            <div className={classes.profile}>
                <div className={classes.profileHeading}>
                    <img src={ProfileIcon} alt="icon" />
                    <div>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <div>Lorem Ipsum</div>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <div className={classes.secondaryText}>@loremipsum</div>
                    </div>
                </div>
                <Divider indent={20} />
                <div className={classes.referrals}>
                    <div className={classes.referralsInvited}>
                        <Icon type={SvgIconType.addFriend} />
                        <span>{t('Player invited')}:</span>
                        <span className={classes.accentText}>3</span>
                    </div>
                    <div className={classes.referralsIncome}>
                        <Icon type={SvgIconType.diamond} />
                        <div>{t('Income')}:</div>
                        <div className={classes.accentText}>3</div>
                    </div>
                </div>
                <Divider indent={20} />
                <div className={classes.depositWrapper}>
                    <div
                        onClick={onCopyDepositAddress}
                        className={classes.deposit}
                    >
                        <Icon type={SvgIconType.deposit} />
                        <div>{t('Deposit')}:</div>
                        <ClampedAddress text={address} />
                    </div>
                    <Icon
                        type={SvgIconType.copy}
                        onClick={onCopyDepositAddress}
                    />
                </div>
            </div>
            <div className={classes.buttons}>
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <Icon type={SvgIconType.miniPlayIcon} width={30} />
                    </div>
                    <div className={classes.buttonText}>
                        <p>{t('Play now')}</p>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </div>
                <Divider indent={0} direction="horizontal" />
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <Icon width={30} type={SvgIconType.createRoom} />
                    </div>
                    <div className={classes.buttonText}>
                        <p>{t('Create the room')}</p>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </div>
                <Divider indent={0} direction="horizontal" />
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <Icon width={30} type={SvgIconType.findRooms} />
                    </div>
                    <div className={classes.buttonText}>
                        <p>{t('Find rooms')}</p>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon isAccent={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePagee;
