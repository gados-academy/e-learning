import { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./FilterButton";

const meta: Meta<typeof FilterButton> = {
  title: "Components/FilterButton",
  component: FilterButton,
  args: {
    activeFilters: 3,
    text: "Filter",
  },
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {};
