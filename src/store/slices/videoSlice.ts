import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IVideo } from "../../Types";
import { getHomePageVideos } from './../actions/homepageVideosAction';
import { getVideosDetailAction } from './../actions/getVideosDetailAction';
import { CurrentPlaying, RecommendedVideos, Item } from './../../Types';
// import { getRecommendedVideos } from './../actions/getRecommendedVideos';
import { getSearchAction } from './../actions/getSearchAction';

interface ItemVideosStates {
  video: IVideo[],
  item: Item[],
  searhVideo: string,
  currentPlaying: CurrentPlaying | null;
  recommendedVideos: RecommendedVideos[];
  nextPageToken: string | null;
  // error: string,
}
const initialState: ItemVideosStates = {
  video: [],
  item: [],
  searhVideo: '',
  currentPlaying: null,
  recommendedVideos: [],
  nextPageToken: null
  // error: ''
};

export const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.video = [];
      state.nextPageToken = null;
    },
    changeSearchVideo: (state, action: PayloadAction<string>) => {
      state.searhVideo = action.payload;
    },
    clearSearchVideo: (state) => {
      state.searhVideo = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    builder.addCase(getVideosDetailAction.fulfilled, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(getSearchAction.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    // builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
    //   state.recommendedVideos = action.payload;
    // });

  }
});


export const { clearVideos, changeSearchVideo, clearSearchVideo } = youtubeSlice.actions;

export default youtubeSlice.reducer;



