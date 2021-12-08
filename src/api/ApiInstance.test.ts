import axios, { AxiosResponse } from "axios";
import { ApiInstance, DriverStandingAPIResponse } from "./ApiInstance";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getDriverStandingByYear()", () => {
  test("should return driver standing response", async () => {
    //Our desired output
    const standings: DriverStandingAPIResponse = {
      MRData: {
        StandingsTable: {
          season: "2005",
          StandingsLists: [
            {
              season: "2005",
              DriverStandings: [
                {
                  position: "2015",
                  positionText: "1",
                  points: "212",
                  wins: "1",
                  Driver: {
                    driverId: "alonso",
                    permanentNumber: "14",
                    code: "ALO",
                    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                    givenName: "Fernando",
                    familyName: "Alonso",
                    dateOfBirth: "1981-07-29",
                    nationality: "Spanish",
                  },
                  Constructor: [
                    {
                      constructorId: "renault",
                      url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                      name: "Renault",
                      nationality: "French",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    };

    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: standings,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    // Mock use of instance
    mockedAxios.create = jest.fn(() => mockedAxios);
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    expect(axios.get).not.toHaveBeenCalled();
    const api = new ApiInstance();
    const response = await api.getDriverStandingByYear("2005");
    expect(axios.get).toHaveBeenCalled();
    expect(response.data).toEqual(standings);
  });
});
