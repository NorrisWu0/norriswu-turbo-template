import { ComponentMeta } from "@storybook/react";

import { CopyRight } from "./CopyRight";

export default {
  title: "Generic / CopyRight",
  component: CopyRight,
} as ComponentMeta<typeof CopyRight>;

export const Default = () => <CopyRight />;
