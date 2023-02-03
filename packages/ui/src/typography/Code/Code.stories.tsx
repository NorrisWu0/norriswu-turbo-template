import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Code } from "./Code";

export default {
  title: "Typography / Code",
  component: Code,
  args: {
    children: `console.log("hello world")`,
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
