import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    placeholder: {
      type: "string",
    },
  },
  args: {
    placeholder: "Select a element",
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
      { label: "Item 4", value: "4" },
      { label: "Item 5", value: "5" },
      { label: "Item 6", value: "6" },
    ],
    onSelect(value) {
      alert(`you selected: ${value}`);
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
