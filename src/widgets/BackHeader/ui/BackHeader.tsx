import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './BackHeader.module.scss';

interface BackHeaderProps {
    className?: string;
    title?: string;
}

export const BackHeader: FC<BackHeaderProps> = ({ className, title }) => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(-1);
    };
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            className={classNames(classes.BackHeader, {}, [className])}
        >
            <Button
                className={classes.backButton}
                variant="clear"
                onClick={onClickBack}
            >
                <ChevronIcon direction="left" />
            </Button>
            <Text heading fontWeight={500} className={classes.title}>
                {title}
            </Text>
        </Flex>
    );
};
