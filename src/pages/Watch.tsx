import React, { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../store/slices/hooks";
import { useNavigate } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Navbar from "./../components/Navbar";
import { getVideosDetailAction } from "./../store/actions/getVideosDetailAction";


function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.item
  );

  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(getVideosDetailAction(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  return (
    <>
       <div className="max-h-screen overflow-hidden">
          <div style={{ height: "7.5vh" }}>
            <Navbar />
          </div>
          <div className="flex bg-[#fff] dark:bg-black  w-full" style={{ height: "92.5vh" }}>
            <div className="flex justify-center  gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto">
              <div className="flex "style={{ maxWidth: "800px" }}>
                <div>
                  <iframe
                    width="800"
                    height="502"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-5">
                    <p className="text-xl dark:text-white">{currentPlaying[0]?.snippet.localized.title}</p>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm text-gray-400 dark:text-white">
                        <span className="after:content-['•'] after:mx-1 dark:text-white">
                          {currentPlaying[0]?.statistics.viewCount} views
                        </span>
               
                      </div>
                      <div className="flex items-center gap-4 uppercase">
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiLike className="text-xl dark:text-white" />
                          <strong className="dark:text-white">{currentPlaying[0]?.statistics.likeCount}</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiDislike className="text-xl dark:text-white" />
                          <strong className="dark:text-white">dislike</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <FaShare className="text-xl dark:text-white" />
                          <strong className="dark:text-white">share</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <HiScissors className="text-xl dark:text-white" />
                          <strong className="dark:text-white">clip</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <MdOutlinePlaylistAdd className="text-xl dark:text-white" />
                          <strong className="dark:text-white">save</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BsThreeDots className="text-xl dark:text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                    <div className="flex items-center gap-5 mr-5 mt-4">
                      <div>
                        <img
                          src={currentPlaying[0]?.snippet.thumbnails.default.url}
                          alt=""
                          className="rounded-full h-12 w-12 "
                        />
                      </div>
                      <div className="w-5/6">
                        <h5 className="text-sm dark:text-white">
                          <strong >{currentPlaying[0]?.snippet.channelTitle}</strong>
                        </h5>
                        <h6 className="text-gray-400 text-xs dark:text-white">
                          {currentPlaying[0]?.statistics.commentCount} subscribers
                        </h6>
                      </div>
                      <div>
                        <button className="uppercase bg-red-600 rounded-sm p-2 text-sm tracking-wider">
                          subscribe
                        </button>
                      </div>
                    </div>
                    <div
                      className={`${
                        !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                      } text-sm w-11/12 dark:text-white`}
                    >
                      <pre
                        style={{
                          fontFamily: `"Roboto", sans-serif`,
                        }}
                        className="whitespace-pre-wrap"
                      >
                        {currentPlaying[0]?.snippet.localized.description}
                      </pre>
                    </div>
                    <div>
                      <button
                        className="uppercase text-sm cursor-pointer dark:text-white"
                        onClick={() => setShowMoreStatus(!showMoreStatus)}
                      >
                        Show {showMoreStatus ? "less" : "more"}
                      </button>
                    </div>
                  </div> 
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  );
}

export default Watch;
