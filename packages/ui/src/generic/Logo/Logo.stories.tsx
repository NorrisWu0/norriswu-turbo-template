import { ComponentMeta } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  title: "Generic / Logo",
  component: Logo,
  args: {},
} as ComponentMeta<typeof Logo>;

export const Default = () => <Logo />;
