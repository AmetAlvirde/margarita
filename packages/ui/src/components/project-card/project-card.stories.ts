import type { Meta, StoryObj } from "@storybook/react";

import { ProjectCard } from ".";

const meta = {
  title: "Example/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
    name: "Project 1",
    description: "Project 1 description",
  },
};
