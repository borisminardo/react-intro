import React from "react";
import { screen, render } from "@testing-library/react";
import OnlyNumberInput from "../OnlyNumberInput";

describe("rendering only number input", () => {
  test("check number", () => {
    render(<OnlyNumberInput value="test" />);

    expect(screen.getByText("test")).toBeTruthy();
  });
});
