import type { Meta, StoryObj } from '@storybook/react';

import { ChevronIcon } from './ChevronIcon';

const meta: Meta<typeof ChevronIcon> = {
    component: ChevronIcon,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ChevronIcon>;

export const Left: Story = {
    render: () => <ChevronIcon direction="left" />,
};

export const Right: Story = {
    render: () => <ChevronIcon direction="right" />,
};

export const Up: Story = {
    render: () => <ChevronIcon direction="up" />,
};

export const Down: Story = {
    render: () => <ChevronIcon direction="down" />,
};
