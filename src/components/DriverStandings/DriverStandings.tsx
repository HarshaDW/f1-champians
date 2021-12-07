import { useState } from "react";
import { Table, SelectBox } from "../common/";
import SessionModal from "../SessionModal";
import { selectResults, resultsByYear } from "../../redux/results/resultSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const DriverStandings = () => {
  const [open, setOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState({
    season: '',
    winnerId: ''
  });
  const standings = useAppSelector(selectResults);
  const dispatch = useAppDispatch();

  const headers = [
    "Season",
    "Winner",
    "Nationality",
    "Vehicle",
    "Wins",
    "Points",
  ];

  const handleOpenModal = (season, winnerId) => {
    setSelectedSeason({
      ...selectedSeason,
      season: season,
      winnerId: winnerId,
    });
    setOpen(!open);
  };

  const handleDateRangeChange = e => {
    dispatch(resultsByYear(JSON.parse(e.target.value)));
  };
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

  return (
    <div className="t-container">
      <h2>Driver Standings</h2>
      <SelectBox
        onChange={handleDateRangeChange}
        options={options}
        selectLabel={"Select Years"}
      />
      <Table
        headers={headers}
        standings={standings}
        handleClick={handleOpenModal}
      />
      {open && (
        <SessionModal seasonAndWinner={selectedSeason} handleClick={handleOpenModal} />
      )}
    </div>
  );
};

export default DriverStandings;
