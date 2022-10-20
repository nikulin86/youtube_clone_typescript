import React from 'react'
import { Link } from 'react-router-dom';
import { IVideo } from '../Types';

interface SeachCardProps {
    v: IVideo
}


function SeachCard(props: SeachCardProps) {
    return (
        <div className="flex gap-3">
        <div className="relative">
          <Link to={`/watch/${props.v.id.videoId}`}>
            <img
              src={props.v.snippet.thumbnails.default.url}
              className="h-52 w-96"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="flex gap-1 flex-col">
          <h3 className="max-w-2xl">
            <a href="#" className="line-clamp-2 dark:text-white">
              {props.v.snippet.title}
            </a>
          </h3>
          <div className="text-xs text-grap-400">
            <div>
            </div>
          </div>
          <div className="min-w-fit my-2">
            <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
              <img
                src={props.v.snippet.thumbnails.default.url}
                alt="channel"
                className="h-9 w-9 rounded-full"
              />
              <span>{props.v.snippet.channelTitle}</span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default SeachCard
