import { use } from "react";
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
    <div className="w-full h-full bg-black/80 flex items-center justify-center">
      <div className="w-[20vw] h-[60vh] bg-black/40 rounded-3xl flex items-center justify-center flex-col gap-4">
        <div className={color == "red" ? "rounded-full w-32 h-32 bg-red-500" : "rounded-full w-32 h-32 bg-black/30"}></div>
        <div className={color == "yellow" ? "rounded-full w-32 h-32 bg-yellow-500" : "rounded-full w-32 h-32 bg-black/30"}></div>
        <div className={color == "green" ? "rounded-full w-32 h-32 bg-green-500" : "rounded-full w-32 h-32 bg-black/30"}></div>
      </div>
    </div>
  );
}

export default TrafficLightSim;
