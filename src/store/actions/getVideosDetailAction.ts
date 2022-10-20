import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { YOUTUBE_API_URL } from './../../utils/urlApi';


const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;


export const getVideosDetailAction = createAsyncThunk(
    "youtubeApp/getVideosDetailAction", 
    async (id: string) => {
        const {
          data: { items },
        } = await axios.get(
          `${YOUTUBE_API_URL}/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
        );
        console.log(items)

        

        return items;
       
      }
)
