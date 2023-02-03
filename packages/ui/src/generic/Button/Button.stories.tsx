import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@chakra-ui/react";

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
  <HStack>
    <Button variant="primary">Primary</Button>
    <Button variant="accent">Accent</Button>
  </HStack>
);

export const Sizes = () => (
  <HStack spacing="8px">
    <Button size="lg">Button</Button>
    <Button size="md">Button</Button>
    <Button size="sm">Button</Button>
  </HStack>
);

export const Disabled = () => (
  <HStack spacing="8px">
    <Button isDisabled variant="primary">
      Primary
    </Button>
    <Button isDisabled variant="accent">
      Accent
    </Button>
  </HStack>
);
