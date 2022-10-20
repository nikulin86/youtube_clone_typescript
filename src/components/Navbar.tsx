import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell, BsFillLightbulbFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../store/slices/hooks";
import { changeSearchVideo, clearSearchVideo, clearVideos } from "../store/slices/videoSlice";
import { getSearchAction } from './../store/actions/getSearchAction';
import { useTheme } from "../context/themeContext";
import { MdDarkMode } from "react-icons/md";


function Navbar() {

  
  const { theme, setTheme }   = useTheme();


  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();



  const searchVideo = useAppSelector((state) => state.youtubeApp.searhVideo);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchAction(false));
    }
  };

  return (
    <div className="flex justify-between items-center  px-14 h-14 bg-[#fff] dark:bg-black opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu className="dark:text-white"/>
        </div>
        <Link to="/youtube_clone_typescript">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium dark:text-white">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 ">
        <form
          className="border border-gray-300"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-white items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <input
                type="text"
                className="w-96 bg-white focus:outline-none border-none"
                value={searchVideo}
                onChange={(e) => dispatch(changeSearchVideo(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchVideo ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchVideo())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-gray-300">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-gray-300 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">

        {theme === "light" ? (<MdDarkMode className="cursor-pointer" onClick={() => setTheme("dark")}/> ) : (<BsFillLightbulbFill className="cursor-pointer dark:text-white" onClick={() => setTheme("light")}/> )}
        <BsCameraVideo  className="dark:text-white"/>
        <IoAppsSharp className="dark:text-white" />
        <div className="relative">
          <BsBell className="dark:text-white"/>
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 dark:text-white">
            9+
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
