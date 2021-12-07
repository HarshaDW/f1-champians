interface Option {
  option: string;
  value: string;
}
interface Props {
  onChange?: any;
  options: Option[];
  selectLabel: string;
}

const SelectBox = (props: Props) => {
  const { onChange, options, selectLabel } = props;
  return (
    <div className="standard-select-container">
      <label htmlFor="standard-select">{selectLabel}</label>
      <div className="select">
        <select id="standard-select" onChange={onChange}>
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
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
