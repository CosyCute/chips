import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => <Divider indent={20} direction="horizontal" />,
};

export const Vertical: Story = {
    render: () => <Divider indent={20} direction="vertical" />,
    decorators: [
        (Story) => (
            <div style={{ height: '200px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Indent50: Story = {
    render: () => <Divider indent={50} />,
};
