import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../components/Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "reset" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};

export const Mobile2: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile2" },
  },
  args: { ...Mobile.args },
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  args: { ...Mobile.args },
};

export const Desktop: Story = {
  args: { ...Mobile.args },
};
