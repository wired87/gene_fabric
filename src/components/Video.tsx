"use client";
import { useState } from "react";


interface VideoProps {
  videoId?: string;
  videoUrl?: string;
}

export function Video({ videoId, videoUrl }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-transparent">
          <iframe
            src={ `https://www.youtube-nocookie.com/embed/9b5JzHelH1o?controls=0&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>
      </div>
    </>
  );
}
