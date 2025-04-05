import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowLeft } from "@phosphor-icons/react";

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
  },
  args: {
    variant: "solid",
    color: "primary",
    size: "m",
    text: "Button",
    onlyIcon: false,
    icon: <ArrowLeft />,
    iconPosition: "start",
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
