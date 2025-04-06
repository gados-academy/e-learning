import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

test("Typography", () => {
  render(
    <Typography tag="h1" variant="text-display-1">
      Home
    </Typography>
  );
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
