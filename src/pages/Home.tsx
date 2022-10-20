import React, { useEffect } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Sidebar from "./../components/Sidebar";

import { useAppDispatch, useAppSelector } from "./../store/slices/hooks";
import { getHomePageVideos } from "./../store/actions/homepageVideosAction";
import Spinner from "./../components/Spiner";
import InfiniteScroll from "react-infinite-scroll-component";
import { IVideo } from "../Types";
import Card from "./../components/Card";

function Home() {
  const dispatch = useAppDispatch();



  const { video } = useAppSelector((state) => state.youtubeApp);
  console.log(video);

  useEffect(() => {
    dispatch(getHomePageVideos());
  }, [dispatch]);

  return (
    <div className="max-h-screen">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex bg-[#fff] dark:bg-black" >
        <Sidebar />
        {video.length ? (
          <InfiniteScroll
            dataLength={video.length}
            next={() => dispatch(getHomePageVideos())}
            hasMore={video.length < 500}
            loader={<Spinner />}
            // height={750}
          >
            <div className="flex  bg-[#fff] dark:bg-black flex-wrap gap-y-14 gap-x-8  p-8 ">
              {video &&
                video.map((v) => <Card v={v} key={v.snippet.channelId} />)}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Home;
