import React from "react";
import Link from "next/link";

const VideoBanner = () => {
  return (
    <div className="w-[80%] md:w-[55%] mx-auto py-10">
      <div className="relative w-full" style={{ paddingBottom: "57.325%" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 top-10 md:top-40 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30"
        >
          <div className="h-10 md:h-60 bg-gradient-to-br from-purple-600 to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-7 md:h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src="https://streamable.com/e/gnmnn9?autoplay=1&muted=1&controls=0"
          allow="fullscreen; autoplay"
          allowFullScreen
          style={{ border: "none" }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'transparent', pointerEvents: 'none' }}
        ></div>

        <div>

        </div>
      </div>
      <div>
        <br />
        <Link href="https://www.demoexpert8-solution.com"
        target="_blank">
          <button className='bg-[#1565c0] py-4 w-[170px] px-4 text-white rounded-full text-[17px] my-5'>Booking demo</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoBanner;
