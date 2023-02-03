import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Input / Button",
  component: Button,
  args: {
    children: "Button",
    size: "md",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Variants = () => (
  <div>
    <Button variant="primary">Primary</Button>
    <Button variant="accent">Accent</Button>
  </div>
);

export const Sizes = () => (
  <div>
    <Button size="lg">Button</Button>
    <Button size="md">Button</Button>
    <Button size="sm">Button</Button>
  </div>
);

export const Disabled = () => (
  <div>
    <Button isDisabled variant="primary">
      Primary
    </Button>
    <Button isDisabled variant="accent">
      Accent
    </Button>
  </div>
);
