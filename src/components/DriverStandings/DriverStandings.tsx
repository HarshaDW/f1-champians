import { useState } from "react";
import { Table } from "../common/";
import SessionModal from "../SessionModal";

const DataSet = [
  {
    season: "2020",
    wins: "19",
    points: "347",
    Driver: {
      driverId: "hamilton",
      permanentNumber: "44",
      code: "HAM",
      url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
      givenName: "Lewis",
      familyName: "Hamilton",
      dateOfBirth: "1985-01-07",
      nationality: "British",
    },
    Constructors: {
      constructorId: "mercedes",
      url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
      name: "Mercedes",
      nationality: "German",
    },
  },
  {
    season: "2019",
    wins: "11",
    points: "413",
    Driver: {
      driverId: "hamilton",
      permanentNumber: "44",
      code: "HAM",
      url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
      givenName: "Lewis",
      familyName: "Hamilton",
      dateOfBirth: "1985-01-07",
      nationality: "British",
    },
    Constructors: {
      constructorId: "mercedes",
      url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
      name: "Mercedes",
      nationality: "German",
    },
  },
  {
    season: "2018",
    wins: "11",
    points: "413",
    Driver: {
      driverId: "vettel",
      permanentNumber: "5",
      code: "VET",
      url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
      givenName: "Sebastian",
      familyName: "Vettel",
      dateOfBirth: "1987-07-03",
      nationality: "German",
    },
    Constructors: {
      constructorId: "red_bull",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
      name: "Red Bull",
      nationality: "Austrian",
    },
  },
  {
    season: "2018",
    wins: "11",
    points: "413",
    Driver: {
      driverId: "vettel",
      permanentNumber: "5",
      code: "VET",
      url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
      givenName: "Sebastian",
      familyName: "Vettel",
      dateOfBirth: "1987-07-03",
      nationality: "German",
    },
    Constructors: {
      constructorId: "red_bull",
      url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
      name: "Red Bull",
      nationality: "Austrian",
    },
  },
];

const Results = {
  season: "2013",
  raceName: "Australian Grand Prix",
  date: "2013-03-17",
  Results: [
    {
      number: "7",
      position: "1",
      positionText: "1",
      points: "25",
      Driver: {
        driverId: "raikkonen",
        permanentNumber: "7",
        code: "RAI",
        url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
        givenName: "Kimi",
        familyName: "Räikkönen",
        dateOfBirth: "1979-10-17",
        nationality: "Finnish",
      },
      Constructor: {
        constructorId: "lotus_f1",
        url: "http://en.wikipedia.org/wiki/Lotus_F1",
        name: "Lotus F1",
        nationality: "British",
      },
      laps: "58",
      status: "Finished",
      Time: {
        millis: "5403225",
        time: "1:30:03.225",
      },
      FastestLap: {
        rank: "1",
        lap: "56",
        Time: {
          time: "1:29.274",
        },
        AverageSpeed: {
          units: "kph",
          speed: "213.845",
        },
      },
    },
  ],
};

const DriverStandings = () => {
  const [open, setOpen] = useState(false);
  const headers = [
    "Season",
    "Winner",
    "Nationality",
    "Vehicle",
    "Wins",
    "Points",
  ];

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <div className="t-container">
      <h2>Driver Standings</h2>
      <Table headers={headers} data={DataSet} handleClick={handleOpenModal} />
      {open && (
        <SessionModal seasonResult={Results} handleClick={handleOpenModal} />
      )}
    </div>
  );
};

export default DriverStandings;
