import React from "react";

const VideoBanner = () => {
  return (
    <div className="w-[80%] md:w-[55%] mx-auto">
      <div className="relative w-full" style={{ paddingBottom: "57.325%" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 top-20 md:top-40 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
        >
          <div className="h-60 bg-gradient-to-br from-purple-600 to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src="https://streamable.com/e/gnmnn9?autoplay=1&muted=1"
          allow="fullscreen; autoplay"
          allowFullScreen
          style={{ border: "none" }}
        />
        <style jsx>{`
          iframe {
            pointer-events: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default VideoBanner;
