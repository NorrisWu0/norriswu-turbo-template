import { render } from "@testing-library//react";

import { CopyRight } from "./CopyRight";

describe("CopyRight", () => {
  it("should match snapshot", () => {
    const { container } = render(<CopyRight />);
    expect(container).toMatchSnapshot();
  });
});
