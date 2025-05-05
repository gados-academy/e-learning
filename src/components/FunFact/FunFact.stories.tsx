import { Meta, StoryObj } from "@storybook/react";
import { FunFact } from "@/components/FunFact/FunFact";
import { IconPhosphor } from "@/components/Icon/Icon";

const meta: Meta<typeof FunFact> = {
  title: "Components/FunFact",
  component: FunFact,
  argTypes: {
    color: {
      control: "select",
      options: ["red", "indigo", "green", "orange", "gray"],
    },
  },
  args: {
    icon: <IconPhosphor name="PlayCircle" size={32} />,
    value: 957,
    label: "Enrolled Courses",
    color: "red",
  },
};

export default meta;
type Story = StoryObj<typeof FunFact>;

export const Default: Story = {};