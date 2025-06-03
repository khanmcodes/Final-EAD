import { React, useState, useEffect } from "react";

function TrafficLightSim() {
  const [color, setColor] = useState("");
  const [light, setLight] = useState(0);
  const [delayTime, setDelayTime] = useState(0);  // to avoid delay at the start

  useEffect(() => {
    setTimeout(() => {
      if (light == 0) {
        setColor("red");
        setDelayTime(3000);
      }
      if (light == 1) {
        setColor("yellow");
        setDelayTime(3000);
      }
      if (light == 2) {
        setColor("green");
        setDelayTime(3000);
      }
      if (light > 2) {
        setLight(0);
      } else {
        setLight(light + 1);
      }
    }, delayTime);
  }, [light]);

  return (
    <div className="w-full h-full bg-black/90 flex items-center justify-center flex-col">
        <h1 className="text-white font-semibold text-3xl mb-16">Traffic Light Simulator</h1>
      <div className="w-[20vw] h-[60vh] bg-[#2d2d2d] rounded-3xl flex items-center justify-center flex-col gap-4 shadow-[0px_0px_20px] z-10 shadow-black">
        <div className={color == "red" ? "rounded-full w-32 h-32 bg-red-500 shadow-[0px_0px_20px] shadow-red-300" : "rounded-full w-32 h-32 bg-black/30"}></div>
        <div className={color == "yellow" ? "rounded-full w-32 h-32 bg-yellow-500 shadow-[0px_0px_20px] shadow-yellow-300" : "rounded-full w-32 h-32 bg-black/30"}></div>
        <div className={color == "green" ? "rounded-full w-32 h-32 bg-green-500 shadow-[0px_0px_20px] shadow-green-300" : "rounded-full w-32 h-32 bg-black/30"}></div>
      </div>
      <div className="w-[5vw] h-32 bg-[#2d2d2d] rounded-b-3xl flex items-center justify-center flex-col gap-4 shadow-[0px_0px_20px] z-0 shadow-black"></div>
    </div>
  );
}

export default TrafficLightSim;
