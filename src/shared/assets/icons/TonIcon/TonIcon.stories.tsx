import type { Meta, StoryObj } from '@storybook/react';

import { TonIcon, TonIconType } from './TonIcon';

const meta: Meta<typeof TonIcon> = {
    component: TonIcon,
};

export default meta;
type Story = StoryObj<typeof TonIcon>;

export const White: Story = {
    render: () => <TonIcon variant={TonIconType.WHITE} />,
};

export const Blue: Story = {
    render: () => <TonIcon variant={TonIconType.BLUE} />,
};

export const Black: Story = {
    render: () => <TonIcon variant={TonIconType.BLACK} />,
};
