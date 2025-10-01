import React from "react";
import OrderNowButton from "./OrderNowButton";

const MainVideoPage = ({ videoSource = "" }) => {
  const isExternalVideo = (url) =>
    url.startsWith("http://") || url.startsWith("https://");

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="lg:w-[80%] w-full rounded-lg overflow-hidden shadow-lg border-amber-50">
        {isExternalVideo(videoSource) ? (
          <iframe
            className="w-full"
            src={videoSource}
            title="External Video"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <video className="w-full object-cover" controls>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="mt-4">
        <OrderNowButton />
      </div>
    </div>
  );
};

export default MainVideoPage;
