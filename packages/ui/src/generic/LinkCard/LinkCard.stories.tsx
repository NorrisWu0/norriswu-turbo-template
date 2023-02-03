import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LinkCard } from "./LinkCard";

export default {
  title: "Generic/LinkCard",
  component: LinkCard,
  args: {
    href: "",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit non quia perferendis quo facilis autem perspiciatis ad in cumque!",
  },
} as ComponentMeta<typeof LinkCard>;

const Template: ComponentStory<typeof LinkCard> = (args) => (
  <LinkCard {...args} />
);

export const Default = Template.bind({});
