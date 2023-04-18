import { screen, render } from "@testing-library/react";
import OnlyNumberInput from "../OnlyNumberInput";
import TextInputAZ from "../TextInputAZ";

describe("rendering only number input", () => {
  test("check number", () => {
    render(<TextInputAZ text="test" />);

    expect(screen.getByText("test")).toBeTruthy();
  });
});