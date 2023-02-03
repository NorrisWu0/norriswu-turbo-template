import { render } from "@testing-library/react";

import { LinkCard } from "./LinkCard";

describe("LinkCard", () => {
  it("should render", () => {
    const { container } = render(
      <LinkCard href="" title="test title" description="test description" />
    );
    expect(container).toMatchSnapshot();
  });
});
