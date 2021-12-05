import Constructor from "./Constructor";
import Driver from "./Driver";

export default interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  laps: string;
  status: string;
  Time: {
    millis: string;
    time: string;
  };
  FastestLap: {
    rank: string;
    lap: string;
    Time: {
      time: string;
    };
    AverageSpeed: {
      units: string;
      speed: string;
    };
  };
}
