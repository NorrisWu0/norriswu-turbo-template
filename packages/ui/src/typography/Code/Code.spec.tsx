import { render } from "@testing-library/react";

import { Code } from "./Code";

describe("Code", () => {
  it("should render", () => {
    const { container } = render(<Code>Code</Code>);
    expect(container).toMatchSnapshot();
  });
});
