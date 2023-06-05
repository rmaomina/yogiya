"use client";

import { PuffLoader, BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <BeatLoader
        color="#36d7b7"
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Loader;
