import ReactDOM from "react-dom";
import App from "./App";

test("renders learn the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("h1").textContent).toBe("TODOS");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1");
});
