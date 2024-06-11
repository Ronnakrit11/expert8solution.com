import React from "react";

const TheEasy = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 space-y-2">
        <h1 className="text-[30px] md:text-[65px] text-center">
          The easiest screen recorder you’ll ever use
        </h1>
        <p className="text-[19px] md:text-[27px] text-center text-[#3D2E7C]">
          Record in a few clicks. Share anywhere. Collaborate better.
        </p>
      </div>

      <div className="bg-[#EFF0FF] rounded-3xl py-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-[60%] mx-auto space-y-6 flex flex-col justify-center">
              <h2 className="text-[33px] text-[#2B1C50]">
                Lightning fast screen recording
              </h2>
              <p className="text-[19px] text-[#3D2E7C]">
                Easily record your screen and camera. Record on any device using
                Loom’s Chrome extension, desktop app or mobile app.
              </p>
              <button className="px-4 py-3 ring-4 ring-[#B0B4F2] text-white rounded-full bg-[#565ADD]">
                Dowload Now
              </button>
            </div>
            <div className="p-8">
              <div
                className="relative w-full"
                style={{ paddingBottom: "100%" }}
              >
                <iframe
                  allow="fullscreen; autoplay"
                  allowFullScreen
                  src="https://streamable.com/e/eo788a?autoplay=1&muted=1"
                  className="absolute top-0 left-0 w-full h-full border-none rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEasy;
