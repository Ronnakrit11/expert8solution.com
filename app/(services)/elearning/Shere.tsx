import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";

const Shere = () => {
  return (
    <div className="container mx-auto">
      <div className=" rounded-3xl py-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
            <div className="w-[60%] mx-auto space-y-6 flex flex-col justify-center">
              {/* <div className="bg-[#EFF0FF]">
                <FaEraser />
              </div> */}
              <h2 className="text-[33px] text-[#2B1C50]">
                Share or embed video anywhere you work
              </h2>
              <p className="text-[19px] text-[#3D2E7C]">
                From Google Workspace to Slack, Loom videos seamlessly integrate
                with hundreds of tools you use every day.
              </p>
              <button className="flex items-center gap-2 text-[18px]">
                Start sharing
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shere;
