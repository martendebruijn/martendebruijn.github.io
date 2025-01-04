import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "../components/Section";
import { SectionItem } from "../components/SectionItem";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "reset" },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  args: {
    title: "Projects",
    children: (
      <>
        <SectionItem
          title="Types"
          description="Personal common used types, type guards and other to quickly jumpstart a new project or experiment"
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
        <SectionItem
          title="TypeScript"
          description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
        <SectionItem
          title="React"
          description="A JavaScript library for building user interfaces."
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
      </>
    ),
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
