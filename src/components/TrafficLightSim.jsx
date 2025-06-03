import { use } from "react";
import { React, useState, useEffect } from "react";

function TrafficLightSim() {

  return (
    <div className="w-full h-full bg-black/80 flex items-center justify-center">
      <div className="w-[20vw] h-[60vh] bg-black/40 rounded-3xl flex items-center justify-center flex-col gap-4">
        <div className="rounded-full w-32 h-32 bg-black/30"></div>
        <div className="rounded-full w-32 h-32 bg-black/30"></div>
        <div className="rounded-full w-32 h-32 bg-black/30"></div>
      </div>
    </div>
  );
}

export default TrafficLightSim;
