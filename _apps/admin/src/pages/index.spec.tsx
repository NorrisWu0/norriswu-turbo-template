import { render } from "@testing-library/react";
import Admin from "@src/pages";

describe("Admin page", () => {
  it("should match snapshot", () => {
    const { container } = render(<Admin />);

    expect(container).toMatchSnapshot();
  });
});
