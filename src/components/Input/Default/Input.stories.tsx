import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { IconPhosphor } from "@/components/Icon/Icon";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
    },
    status: {
      control: "select",
      options: ["success", "error", undefined],
    },

    placeholder: {
      control: "text",
    },
  },
  args: {
    type: "text",
    status: undefined,

    icon: <IconPhosphor name="User" weight="fill" />,
    rightComponent: <IconPhosphor name="Acorn" />,

    placeholder: "Placeholder",
  },
};
export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {};
