/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { DriverStandings } from "../../../@types";

interface Props {
  headers: string[];
  data: DriverStandings[];
  handleClick: () => void;
}

const Table = (props: Props) => {
  return (
    <ul className="responsive-table">
      <li className="table-header">
        {props.headers.map((header, index) => (
          <div key={index} className={`col col-${index + 1}`}>
            {header}
          </div>
        ))}
      </li>
      {props.data.map((item, index) => {
        return (
          <li
            key={index}
            className="table-row"
            onClick={props.handleClick}
            onKeyDown={props.handleClick}
          >
            <div className="col col-1" data-label="Season">
              {item.season}
            </div>
            <div className="col col-2" data-label="Winner">
              {`${item.Driver.familyName} ${item.Driver.givenName}`}
            </div>
            <div className="col col-3" data-label="Nationality">
              {item.Driver.nationality}
            </div>
            <div className="col col-4" data-label="Vehicle">
              {item.Constructors.name}
            </div>
            <div className="col col-5" data-label="Wins">
              {item.wins}
            </div>
            <div className="col col-6" data-label="Points">
              {item.points}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Table;
