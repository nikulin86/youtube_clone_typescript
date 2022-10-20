import axios from "axios";
import { AppDispatch } from "../slices/index";
// import { IBook, Root } from "../../models/models"
// import { booksSearchSlice } from "../slices/bookSearchSlice"
import { IVideo, Root } from "../../Types";
import { youtubeSlice } from "../slices/videoSlice";
import { YOUTUBE_API_URL } from './../../utils/urlApi';
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;


export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/getHomePageVideos",
  async() => {
    const { data } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=60&q="reactjs typescript projects"&key=${API_KEY}&part=snippet&type=video&`
    )
    console.log(data) 
    return data.items;
  }
)





