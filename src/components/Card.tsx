import React from 'react';
import { IVideo } from '../Types'
import { Link } from 'react-router-dom';

interface CardProps {
    v: IVideo 
}

function Card(props: CardProps) {
    return (
        <div className="w-64 h-60 flex gap-3 flex-col">
        <div className="relative">
          <Link to={`/watch/${props.v.id.videoId}`}>
            <img
              src={props.v.snippet.thumbnails.default.url}
              className="h-44 w-72"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="min-w-fit">
            <a href="#">
              <img
                src={props.v.snippet.thumbnails.default.url}
                alt="channel"
                className="h-9 w-9 rounded-full"
              />
            </a>
          </div>
          <div>
            <h3>
              <a href="#" className="line-clamp-2 dark:text-white">
                {props.v.snippet.title}
              </a>
            </h3>
            <div className="text-sm text-gray-400">
              <div>
                <a href="#" className="hover:text-gray-700">
                  {props.v.snippet.channelTitle}
                </a>
              </div>
              <div>
                <span className="after:content-['•'] after:mx-1">
                  {} views
                </span>
                <span>{}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card
