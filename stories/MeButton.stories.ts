import MeButton from '../src/components/MeButton/Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof MeButton> = {
  title: '组件库/按钮 MeButton',
  component: MeButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '一个基础的按钮组件，用于触发操作。',
      },
    },
  },
  argTypes: {
    type: {
      // name: '按钮类型',
      description: '设置按钮的样式类型',
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      // name: '按钮尺寸',
      description: '设置按钮的大小',
      control: 'select',
      options: ['large', 'default', 'small'],
    },
    disabled: {
      // name: '禁用状态',
      description: '设置按钮是否为不可点击状态',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = {
  args: {
    type: 'primary',
    size: 'default',
    disabled: false,
  },
};
