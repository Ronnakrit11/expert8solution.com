import React from "react";

const VideoBanner = () => {
  return (
    <div className="w-[80%] md:w-[55%] mx-auto">
      <div className="relative w-full" style={{ paddingBottom: "57.325%" }}>
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
