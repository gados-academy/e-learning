import { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./FilterButton";
import { IconPhosphor } from "@/components/Icon/Icon";

const meta: Meta<typeof FilterButton> = {
  title: "Components/FilterButton",
  component: FilterButton,
  // argTypes: {
  //   activeFilters: number,
  // },
  args: {
    activeFilters: 3,
  },
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {};
