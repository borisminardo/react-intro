import { screen, render } from "@testing-library/react";
import OnlyNumberInput from "../OnlyNumberInput";

describe("rendering only number input", () => {
  test("check number", () => {
    expect(OnlyNumberInput("5")).toBeTruthy();
  });
});
