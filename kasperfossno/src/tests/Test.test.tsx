import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../pages/Home";

test("Nothing", async () => {
  const a = 1;
  render(<Home />);

  expect(screen.getByRole('heading')).toBeInTheDocument();
});
