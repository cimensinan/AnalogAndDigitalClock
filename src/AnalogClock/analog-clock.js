import React, { useEffect, useState } from "react";
import "./analog-clock.scss";

const AnalogClock = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [hourRotation, setHourRotation] = useState(0)
  const [minuteRotation, setMinuteRotation] = useState(0)
  const [secondRotation, setSecondRotation] = useState(0)

  useEffect(() => {
    setInterval(() => {
        const currentDate = new Date();
        const secondRatio = currentDate.getSeconds() / 60;
        const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        setHourRotation(hourRatio * 360);
        setMinuteRotation(minuteRatio * 360);
        setSecondRotation(secondRatio * 360);
    }, 1000)
    return () => {
      clearInterval()
    }
  }, [])
  
  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={{transform: `rotate(${hourRotation}deg)`}}></div>
      <div className="hand minute-hand" style={{transform: `rotate(${minuteRotation}deg)`}}></div>
      <div className="hand second-hand" style={{transform: `rotate(${secondRotation}deg)`}}></div>
      {numbers.map((number, i) => {
        return (
          <div key={i} className="number" style={{transform:`rotate(${number*30}deg)`}}>
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default AnalogClock;
