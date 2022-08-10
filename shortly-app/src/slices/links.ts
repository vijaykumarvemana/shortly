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
  shortlinks: {
  code: "YHsR9m",
full_share_link: "https://shrtco.de/share/YHsR9m",
full_short_link: "https://shrtco.de/YHsR9m",
full_short_link2: "https://9qr.de/YHsR9m",
full_short_link3: "https://shiny.link/YHsR9m",
original_link: "https://codesandbox.io/s/react-toolkit-typescript-ctnox?file=/src/slices/profile.ts:213-238",
share_link: "shrtco.de/share/YHsR9m",
short_link: "shrtco.de/YHsR9m",
short_link2: "9qr.de/YHsR9m",
short_link3: "shiny.link/YHsR9m",
  },
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
