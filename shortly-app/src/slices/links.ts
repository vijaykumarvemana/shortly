import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TLink = {
  shortlinks : {
  code: string,
  full_share_link: string,
  full_short_link: string,
  full_short_link2: string,
  full_short_link3: string,
  original_link: string,
  share_link: string,
  short_link: string,
  short_link2: string,
  short_link3: string,
  }
};

const initialState = {
  shortlinks: { },
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setShortlinks: (state, { payload }: PayloadAction<TLink>) => {
      state.shortlinks = payload.shortlinks;  

    },

  },
});


export const linksReducer = linksSlice.reducer;
export const { setShortlinks } = linksSlice.actions;
