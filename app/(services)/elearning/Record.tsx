import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

const Record = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="py-10">
        <h1 className="text-[30px] md:text-[65px] text-center">
          So much more than a screen recorder
        </h1>
      </div>

      <div className=" rounded-3xl py-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-[60%] mx-auto space-y-6 flex flex-col justify-center">
              {/* <div className="bg-[#EFF0FF]">
                <FaEraser />
              </div> */}
              <h2 className="text-[33px] text-[#2B1C50]">
                Record once, edit effortlessly
              </h2>
              <p className="text-[19px] text-[#3D2E7C]">
                Outsmart the undo button. Instead of restarting, rewind while
                you’re still recording to get the perfect take. After recording,
                dial in your video by trimming words from its transcript. With
                Loom, editing video is as easy as editing a text.
              </p>
              <button className="flex items-center gap-2 text-[18px]">
                Record now
                <FaLongArrowAltRight />
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
                  src="https://streamable.com/e/o09xgn?autoplay=1&muted=1"
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

export default Record;
