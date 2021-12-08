import axios, { AxiosResponse } from "axios";
import { Race } from "../@types";
import DriverStandings from "../@types/DriverStandings";

export interface DriverStandingAPIResponse {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: [DriverStandings: DriverStandings];
    };
  };
}

export interface SeasonResultsAPIResponse {
  MRData: {
    RaceTable: {
      season: string;
      Races: Race[];
    };
  };
}

export class ApiInstance {
  private instance = axios.create({
    method: "GET",
    baseURL: "http://ergast.com/api/f1/",
  });

  getDriverStandingByYear(
    year: string
  ): Promise<AxiosResponse<DriverStandingAPIResponse>> {
    return this.instance.get<DriverStandingAPIResponse>(
      `${year}/driverStandings/1.json`
    );
  }

  getSeason(year: string): Promise<AxiosResponse<SeasonResultsAPIResponse>> {
    return this.instance.get<SeasonResultsAPIResponse>(
      `${year}/results/1.json`
    );
  }
}
