import { ReactNode, useState } from 'react';

import { SvgIconType } from 'shared/assets/icons/SvgIconType';
import { classNames } from 'shared/lib/classNames';
import { Flex } from 'shared/ui/Flex';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';

import classes from './Select.module.scss';

interface SelectItem<T> {
    id: number | string;
    value: T;
    displayedValue: string | number;
}

interface SelectProps<T extends ReactNode> {
    className?: string;
    items: SelectItem<T>[];
    onChange?: (value: T) => void;
    value?: T;
}

export const Select = <T extends ReactNode>({
    className,
    items,
    onChange,
    value,
}: SelectProps<T>) => {
    const [selected, setSelected] = useState<T>(value);

    return (
        <div className={classNames(classes.Select, {}, [className])}>
            {items.map((item) => {
                const handleSelect = () => {
                    setSelected(item.value);
                    onChange(item.value);
                };

                return (
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        key={item.id}
                        onClick={handleSelect}
                        className={classNames(classes.selectItem, {}, [])}
                    >
                        <Text>{item.displayedValue}</Text>
                        {selected === item.value && (
                            <Icon type={SvgIconType.success} />
                        )}
                    </Flex>
                );
            })}
        </div>
    );
};
