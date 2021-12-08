import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiInstance } from "../../api/ApiInstance";
import { RootState } from "../store";
import { Result } from "../../@types";

export interface ResultState {
  results: Result[];
  loading: boolean;
}

const initialState: ResultState = {
  results: [],
  loading: false,
};

export const resultsByYear = createAsyncThunk(
  "results/searchByYear",
  async ({ start, end }: { start: number; end: number }) => {
    const api = new ApiInstance();

    const results = [];

    for (let i = start; i <= end; i++) {
      const response = await api.getDriverStandingByYear(i.toString());
      results.push({
        season: response.data.MRData.StandingsTable.season,
        winner:
          response.data.MRData.StandingsTable.StandingsLists[0]
            .DriverStandings[0],
      });
    }

    return results;
  }
);

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(resultsByYear.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      resultsByYear.fulfilled,
      (state, action: PayloadAction<Result[]>) => {
        state.loading = false;
        state.results.splice(0, state.results.length, ...action.payload);
      }
    );
  },
});

export const selectResults = (state: RootState) => state.standings;

export default resultSlice.reducer;
