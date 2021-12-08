import Constructor from "./Constructor";
import Driver from "./Driver";

export default interface ResultStateResult {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructor: Constructor[];
}
