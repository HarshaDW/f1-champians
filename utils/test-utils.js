import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

import "@testing-library/jest-dom/extend-expect";

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
