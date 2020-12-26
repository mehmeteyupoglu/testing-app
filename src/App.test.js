import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});
