import ReactDOM from "react-dom";
import App from "./App";
import { getQueriesForElement } from "@testing-library/dom";

test("renders learn the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  const { getByText, getByLabelText } = getQueriesForElement(root);

  expect(getByText("TODOS")).not.toBeNull();
  expect(getByLabelText("What needs to be done?")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull();
});
