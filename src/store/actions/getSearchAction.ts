import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { YOUTUBE_API_URL } from '../../utils/urlApi';
import { RootState } from '../slices';
import { IVideo } from '../../Types';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getSearchAction = createAsyncThunk(
    "youtubeApp/getSearchAction",
    async (isNext: boolean, { getState }) => {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, video, searhVideo },
      } = getState() as RootState;
      const {
        data: { items, nextPageToken },
      } = await axios.get(
        `${YOUTUBE_API_URL}/search?maxResults=60&q=${searhVideo}&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : "" 
        }`
      );
        console.log(items)
        // const searchArray: IVideo [] = items

        // console.log(searchArray)
      return items
      // const parsedData: HomePageVideos[] = await parseData(items);
      // return { parsedData: [...videos, ...parsedData], nextPageToken };
    }
  );