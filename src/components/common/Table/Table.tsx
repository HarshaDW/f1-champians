/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { DriverStandings } from "../../../@types";

interface Props {
  headers: string[];
  handleClick: any;
  standings: any;
}

const Table = (props: Props) => {
  const { standings } = props;
  const { loading, results } = standings;
 
  return (
    <ul className="responsive-table">
      {loading ? (
        <div className="loader" />
      ) : (
        <>
          <li className="table-header">
            {props.headers.map((header, index) => (
              <div key={index} className={`col col-${index + 1}`}>
                {header}
              </div>
            ))}
          </li>
          {results.map((item: any, index: number) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                key={index}
                className="table-row"
                onClick={e => {
                  e.preventDefault();
                  props.handleClick(item.season, item.winner.Driver.driverId);
                }}
                // onKeyDown={props.handleClick(item.season)}
              >
                <div className="col col-1" data-label="Season">
                  {item.season}
                </div>
                <div className="col col-2" data-label="Winner">
                  {`${item.winner.Driver.familyName} ${item.winner.Driver.givenName}`}
                </div>
                <div className="col col-3" data-label="Nationality">
                  {item.winner.Driver.nationality}
                </div>
                <div className="col col-4" data-label="Vehicle">
                  {item.winner.Constructors[0].name}
                </div>
                <div className="col col-5" data-label="Wins">
                  {item.winner.wins}
                </div>
                <div className="col col-6" data-label="Points">
                  {item.winner.points}
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default Table;
