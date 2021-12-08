import Result from "./Result";

export default interface Race {
  season: string;
  raceName: string;
  date: string;
  Results: Result[];
}
