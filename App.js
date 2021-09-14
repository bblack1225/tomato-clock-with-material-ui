import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(11);
  const [text, setText] = useState("Start");
  const [toggleGroup, setToggleGroup] = useState({
    isStart: false,
    text: "Start"
  });
  let minuteFormat = minutes < 10 ? "0" + minutes : minutes;
  let secondsFormat = seconds < 10 ? "0" + seconds : seconds;
  useEffect(() => {
    if (toggleGroup.isStart) {
      const timer = setInterval(() => {
        if (seconds === 0) {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, toggleGroup.isStart]);

  const handleToggle = () => {
    setToggleGroup((prev) => ({
      isStart: !prev.isStart,
      text: prev.isStart ? "start" : "Stop"
    }));
  };
  return (
    <div className="App">
      <p>
        {minuteFormat} : {secondsFormat}
      </p>
      <button onClick={handleToggle}>{toggleGroup.text}</button>
    </div>
  );
}
