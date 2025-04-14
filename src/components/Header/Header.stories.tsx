import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
