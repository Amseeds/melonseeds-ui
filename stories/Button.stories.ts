import MeButton from "../src/components/Button/Button.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { Edit, Delete, Plus } from "@element-plus/icons-vue";

const meta: Meta<typeof MeButton> = {
  title: "组件库/按钮 MeButton",
  component: MeButton,
  tags: ["autodocs"],
  parameters: {
    // layout 控制故事展示页面布局方式
    // 'padded'	默认布局，组件四周有内边距
    // 'centered'	组件居中显示（用于小组件展示）
    // 'fullscreen'	组件填满整个画布（适合展示完整页面或布局型组件）
    layout: "padded",
    docs: {
      description: {
        component: "一个基础的按钮组件，用于触发操作。",
      },
    },
  },

  argTypes: {
    size: {
      // name: '按钮尺寸',
      description: "设置按钮的大小",
      control: "select",
      options: ["large", "default", "small"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    type: {
      // name: '按钮类型',
      description: "设置按钮的样式类型",
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    plain: {
      // name: '是否朴素按钮',
      description: "设置按钮是否为朴素按钮",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    round: {
      // name: '是否圆角按钮',
      description: "设置按钮是否为圆角按钮",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    circle: {
      // name: '是否圆形按钮',
      description: "设置按钮是否为圆形按钮",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      // name: '是否加载状态',
      description: "设置按钮是否为加载状态",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      // name: '禁用状态',
      description: "设置按钮是否为不可点击状态",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    icon: {
      // name: '图标类名',
      description: "图标类名",
      control: "select",
      options: ["Edit", "Delete", "Plus"],
      mapping: {
        Edit,
        Delete,
        Plus,
      },
    },
    autofocus: {
      // name: '是否默认聚焦',
      description: "是否默认聚焦",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    nativeType: {
      // name: '禁用状态',
      description: "原生type属性",
      control: "select",
      options: ["button", "submit", "reset"],
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 基础用法: Story = {
  render: (args) => ({
    components: { MeButton },
    setup() {
      return { args };
    },
    template: `<MeButton v-bind="args">我是 Storybook 里的按钮</MeButton>`, // ✅ 插槽内容
  }),
  args: {
    type: "primary",
    size: "default",
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    icon: "",
    autofocus: false,
    nativeType: "button",
  }
};
export const 多种类型: Story = {
  render: () => ({
    components: { MeButton },
    template: `
      <div style="display: flex; gap: 12px;">
        <me-button type="primary">主要按钮</me-button>
        <me-button type="success">成功按钮</me-button>
        <me-button type="warning">警告按钮</me-button>
        <me-button type="danger">危险按钮</me-button>
        <me-button type="info">信息按钮</me-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<me-button type="primary">主要按钮</me-button>
<me-button type="success">成功按钮</me-button>
<me-button type="warning">警告按钮</me-button>
<me-button type="danger">危险按钮</me-button>
<me-button type="info">信息按钮</me-button>
        `.trim(),
        language: "html",
      },
    },
  },
};
