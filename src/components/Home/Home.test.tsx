import Home from "./index";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  it("render", () => {
    render(<Home />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
