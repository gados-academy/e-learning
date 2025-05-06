import { Meta, StoryObj } from "@storybook/react";
import { CategoryTag } from "./CategoryTag";

const meta: Meta<typeof CategoryTag> = {
  title: "Components/CategoryTag",
  component: CategoryTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryTag>;

export const Default: Story = {
  args: {
    children: "DEVELOPMENTS",
  },
};
