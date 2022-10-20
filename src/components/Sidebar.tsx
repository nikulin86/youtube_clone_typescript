import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <MdHomeFilled className="text-xl dark:text-white" />,
      name: "Главная",
    },
    {
      icon: <FaRegCompass className="text-xl dark:text-white" />,
      name: "Навигатор",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl dark:text-white" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-xl dark:text-white" />,
      name: "Подписки",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl dark:text-white" />,
      name: "Библиотека",
    },
    {
      icon: <MdHistory className="text-xl dark:text-white" />,
      name: "История",
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl dark:text-white" />,
      name: "Ваши Видео",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl dark:text-white" />,
      name: "Смотреть позже",
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl dark:text-white" />,
      name: "Понравившиеся",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbMusic className="text-xl dark:text-white" />,
      name: "Музыка",
    },
    {
      icon: <MdOutlineSportsVolleyball className="text-xl dark:text-white" />,
      name: "Спорт",
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl dark:text-white" />,
      name: "Игры",
    },
    {
      icon: <GiFilmStrip className="text-xl dark:text-white" />,
      name: "Фильмы",
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className="text-xl dark:text-white" />,
      name: "Настройки",
    },
    {
      icon: <MdOutlinedFlag className="text-xl dark:text-white" />,
      name: "Жалобы",
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl dark:text-white" />,
      name: "Справка",
    },
    {
      icon: <MdOutlineFeedback className="text-xl dark:text-white" />,
      name: "Отправить отзыв",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className="w-2/12 h-full lg:w-2/6 bg-[#fff] dark:bg-black pr-5 pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-2
              lg:pl-6 py-3 hover:bg-zinc-300 ${
                name === "Home" ? "bg-slate-600" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5 md:gap-1">
                {icon}
                <span className="text-sm tracking-wider dark:text-white">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-2
            lg:pl-6 py-3 hover:bg-zinc-300 `}>
              <a href="#" className="flex items-center gap-5 md:gap-1">
                {icon}
                <span className="text-sm tracking-wider dark:text-white">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-2
            lg:pl-6 py-3 hover:bg-zinc-300 `}>
              <a href="#" className="flex items-center gap-5 md:gap-1">
                {icon}
                <span className="text-sm tracking-wider dark:text-white">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-2
            lg:pl-6 py-3 hover:bg-zinc-300 `}>
              <a href="#" className="flex items-center gap-5 md:gap-1">
                {icon}
                <span className="text-sm tracking-wider dark:text-white">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400 dark:text-white cursor-pointer">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400  cursor-pointer">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  );
}
