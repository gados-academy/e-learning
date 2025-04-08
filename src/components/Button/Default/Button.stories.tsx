import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IconPhosphor } from "@/components/Icon/Icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "tinted", "ghost", "simple"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "danger", "warning", "success"],
    },
    text: {
      control: "text",
    },
    onlyIcon: {
      control: "boolean",
    },
    iconPosition: {
      control: "select",
      options: ["start", "end"],
    },
    rounded: {
      control: "boolean",
    },
  },
  args: {
    variant: "solid",
    color: "primary",
    size: "m",
    text: "Button",
    onlyIcon: false,
    icon: <IconPhosphor name="ArrowLeft" size={24} color="currentColor" />,
    iconPosition: "start",
    disabled: true,
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
