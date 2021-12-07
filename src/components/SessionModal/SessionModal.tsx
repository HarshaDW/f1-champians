import { ApiInstance } from "../../api/ApiInstance";
import { useEffect, useState } from "react";
import winnerIcon from "../../assets/images/winner.png";
interface Props {
  handleClick: () => void;
  seasonAndWinner: {
    season: string;
    winnerId: string;
  };
}
const SessionModal = (props: Props) => {
  const { seasonAndWinner, handleClick } = props;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const api = new ApiInstance();
    api.getSeason(seasonAndWinner.season).then((data) => {
      setLoading(false);
      setDetails(data.data.MRData.RaceTable.Races);
    });
  }, [seasonAndWinner.season]);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={handleClick}>
          <svg viewBox="0 0 20 20">
            <path
              fill="#000000"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
            ></path>
          </svg>
        </button>
        {loading ? (
          <div className="loader" />
        ) : (
          <div className="modal-content">
            <h3>{seasonAndWinner.season}</h3>
            <div className="grid-container">
              {details.map((item, index) => {
                return (
                  <div key={index} className="grid-item">
                    <h4>{item.raceName}</h4>
                    <p>
                      Winner:
                      {` ${item.Results[0].Driver.givenName} ${item.Results[0].Driver.familyName}`}
                    </p>
                    <p>Vehicle: {item.Results[0].Constructor.name}</p>
                    {seasonAndWinner.winnerId ===
                      item.Results[0].Driver.driverId && (
                      <h5>
                        World Champion <img src={winnerIcon} alt="winner" />
                      </h5>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionModal;
