import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { getDictionary } from "@/i18n/get-dictionary";
import { i18n } from "@/i18n/i18n-config"; // Importa as configurações de idiomas

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    lang: {
      control: "select",
      options: i18n.locales,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    lang: i18n.defaultLocale,
    dictionary: (await getDictionary(i18n.defaultLocale)).header,
  },
};
