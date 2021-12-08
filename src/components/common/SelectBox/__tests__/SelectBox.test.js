import { screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SelectBox } from "../..";
import { render } from "../../../../../utils/test-utils";

describe("Header component", () => {
  it("Test Header component", async () => {
    const onChange = jest.fn();
    const options = [
      {
        option: "2005-2010",
        value: '{"start":2005, "end":2010}',
      },
      {
        option: "2011-2015",
        value: '{"start":2011, "end":2015}',
      },
      {
        option: "2016-2021",
        value: '{"start":2016, "end":2021}',
      },
    ];
    const selectLabel = "Test Select Years";
    render(
      <SelectBox
        onChange={onChange}
        options={options}
        selectLabel={selectLabel}
      />
    );
    expect(
      screen.getByTestId("select-label-Test Select Years")
    ).toBeInTheDocument();
    expect(screen.getByTestId("option-2005-2010")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("select-box"));
    fireEvent.click(screen.getByTestId("option-2011-2015"));
  });
});
