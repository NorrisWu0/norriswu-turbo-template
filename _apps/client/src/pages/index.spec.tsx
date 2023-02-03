import { render } from "@testing-library/react";
import Client from "@src/pages";

describe("Client page", () => {
  it("should match snapshot", () => {
    const { container } = render(<Client />);

    expect(container).toMatchSnapshot();
  });
});
