import React from 'react'
import { useAppSelector } from '../store/slices/hooks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './../store/slices/hooks';
import { useEffect } from 'react';
import { clearVideos } from '../store/slices/videoSlice';
import { getSearchAction } from './../store/actions/getSearchAction';
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './../components/Spiner';
import SeachCard from './SeachCard';
import { IVideo } from '../Types';

function Search() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { video } = useAppSelector((state) => state.youtubeApp);
    const searchVideo = useAppSelector((state) => state.youtubeApp.searhVideo);

    console.log(video)


    useEffect(() => {
        dispatch(clearVideos());
        if (searchVideo === "") navigate("/");
        else {
          dispatch(getSearchAction(false));
        }
      }, [dispatch, navigate, searchVideo]);



    return (
        <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <Navbar />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
          <Sidebar />
          {video.length ? (
            <div className="py-8 pl-8 flex flex-col gap-5 w-full">
              <InfiniteScroll
                dataLength={video.length}
                next={() => dispatch(getSearchAction(true))}
                hasMore={video.length < 500}
                loader={<Spinner />}
                height={600}
              >
                {video && video.map((v) => {
                  return (
                    <div className="my-5">
                      <SeachCard v={v} key={v.snippet.channelId} />
                    </div>
                  );
                })}
              </InfiniteScroll>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    )
}

export default Search
