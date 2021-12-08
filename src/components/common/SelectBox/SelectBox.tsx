import React from "react";

interface Option {
  option: string;
  value: string;
}
interface Props {
  onChange: any;
  options: Option[];
  selectLabel: string;
}

const SelectBox = (props: Props) => {
  const { onChange, options, selectLabel } = props;
  return (
    <div className="standard-select-container">
      <label
        htmlFor="standard-select"
        data-testId={`select-label-${selectLabel}`}
      >
        {selectLabel}
      </label>
      <div className="select">
        <select
          id="standard-select"
          data-testId="select-box"
          onChange={onChange}
        >
          {options.map((item, index) => {
            return (
              <option
                key={index}
                data-testId={`option-${item.option}`}
                value={item.value}
              >
                {item.option}
              </option>
            );
          })}
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default SelectBox;
