import { useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Flex } from 'shared/ui/Flex';
import { Text } from 'shared/ui/Text';

import classes from './Crumbs.module.scss';

export interface CrumbsItem<T> {
    id: number | string;
    value: T;
    displayedValue: string | number;
}

interface CrumbsProps<T> {
    className?: string;
    crumbs: CrumbsItem<T>[];
    onChange: (value: CrumbsItem<T> | CrumbsItem<T>[]) => void;
    multiple?: boolean;
}

export const Crumbs = <T,>({
    className,
    crumbs,
    multiple,
    onChange,
}: CrumbsProps<T>) => {
    const [selectedCrumbs, setSelectedCrumbs] = useState<CrumbsItem<T>[]>([]);

    useEffect(() => {
        if (multiple) {
            onChange(selectedCrumbs);
        } else if (selectedCrumbs[0]) {
            onChange(selectedCrumbs[0]);
        }
    }, [selectedCrumbs]);

    return (
        <Flex gap={10} className={classNames(classes.Crumbs, {}, [className])}>
            {crumbs.map((crumb) => {
                const onSelectCrumbs = () => {
                    if (multiple) {
                        if (
                            selectedCrumbs.find(
                                (item) => item.value === crumb.value,
                            )
                        ) {
                            setSelectedCrumbs((prev) =>
                                prev.filter(
                                    (item) => item.value !== crumb.value,
                                ),
                            );
                        } else {
                            setSelectedCrumbs((prev) => [...prev, crumb]);
                        }
                    } else if (selectedCrumbs[0]?.value === crumb.value) {
                        setSelectedCrumbs([]);
                    } else {
                        setSelectedCrumbs([crumb]);
                    }
                };

                return (
                    <Button
                        variant="clear"
                        className={classes.crumbsItem}
                        onClick={onSelectCrumbs}
                        key={crumb.id}
                    >
                        <Text variant="secondary">{crumb.displayedValue}</Text>
                    </Button>
                );
            })}
        </Flex>
    );
};
