import { FC, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import ProfileIcon from 'shared/assets/icons/profle-icon-example.png';
import { Divider } from 'shared/ui/Divider';
import {
    AddFriendIcon,
    ChevronIcon,
    CopyIcon,
    DepositIcon,
    DiamondIcon,
    PlayIcon,
} from 'shared/assets/icons';
import classes from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = ({ className }) => {
    const { t } = useTranslation();

    const [lineClampText, setLineClampText] = useState<string>();
    const lineClampRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const str = 'UQA2GK4uDQYvupNECBtZZdfnyT1-awAM_CWSEsf_QRDDpqSR';

        if (lineClampRef.current) {
            const charsLength = lineClampRef.current.clientWidth / 24;
            setLineClampText(
                `${str.slice(0, charsLength)}...${str.slice(-1 * charsLength)}`,
            );
        }
    }, [lineClampRef]);

    return (
        <div className={classNames(classes.HomePage, {}, [className])}>
            <div className={classes.heading}>{t('My profile')}</div>
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
                        <AddFriendIcon />
                        <span>{t('Player invited')}:</span>
                        <span className={classes.accentText}>3</span>
                    </div>
                    <div className={classes.referralsIncome}>
                        <DiamondIcon />
                        <div>{t('Income')}:</div>
                        <div className={classes.accentText}>3</div>
                    </div>
                </div>
                <Divider indent={20} />
                <div className={classes.depositWrapper}>
                    <div className={classes.deposit}>
                        <DepositIcon />
                        <div>{t('Deposit')}:</div>
                        <div
                            style={{ flex: 1 }}
                            ref={lineClampRef}
                            className={classes.accentText}
                        >
                            {lineClampText}
                        </div>
                    </div>
                    <CopyIcon />
                </div>
            </div>
            <div className={classes.buttons}>
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <PlayIcon />
                    </div>
                    <div>
                        <p>{t('Play now')}</p>
                        <span>{t('Join any active game and enjoy')}</span>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon direction="right" isAccent={false} />
                    </div>
                </div>
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <PlayIcon />
                    </div>
                    <div>
                        <p>{t('Create the room')}</p>
                        <span>{t('Create your own room')}</span>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon direction="right" isAccent={false} />
                    </div>
                </div>
                <div className={classes.buttonOutlined}>
                    <div className={classes.icon}>
                        <PlayIcon />
                    </div>
                    <div>
                        <p>{t('Find rooms')}</p>
                        <span>{t('Find any lobby nearby')}</span>
                    </div>
                    <div className={classes.chevron}>
                        <ChevronIcon direction="right" isAccent={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
