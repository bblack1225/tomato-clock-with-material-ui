import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgressWithLabel from "./progress/CircularProgressWithLabel";
import BorderLinearProgress from "./progress/BorderLinearProgress";
import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import TimeTypography from "./components/TimeTypography";

const progressTypeConstant = {
  linear: 0,
  circle: 1,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
    },
  },
  buttonGroup: {
    "& > button": {
      margin: 5,
    },
  },
  progressBar: {
    "&": {
      marginTop: 5,
      height: 100,
    },
  },
  circle: {
    strokeLinecap: "round",
  },
  linearProgress: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: 25,
  },
}));
const totalSeconds = 25 * 60;
export default function App() {
  const nodeRef = useRef(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [toggleGroup, setToggleGroup] = useState({
    isStart: false,
    text: "Start",
  });
  const [progress, setProgress] = useState(0);
  const [progressType, setProgressType] = useState(
    progressTypeConstant["circle"]
  );
  const classes = useStyles();

  let minuteFormat = minutes < 10 ? "0" + minutes : minutes;
  let secondsFormat = seconds < 10 ? "0" + seconds : seconds;
  let timeText = `${minuteFormat} : ${secondsFormat}`;
  useEffect(() => {
    if (toggleGroup.isStart) {
      const timer = setInterval(() => {
        let currentSeconds = minutes * 60 + seconds - 1;
        let secondsToGo = totalSeconds - currentSeconds;
        let percentage = (secondsToGo / totalSeconds) * 100;
        setProgress(percentage);
        if (minutes === 0 && seconds === 0) {
          setToggleGroup((prev) => ({
            ...prev,
            isStart: false,
            text: "Start",
          }));
          setMinutes(25);
          setSeconds(0);
          setProgress(0);
          setAlertOpen(true);
        } else {
          if (seconds === 0) {
            setSeconds(59);
            setMinutes((prev) => prev - 1);
          } else {
            setSeconds((prev) => prev - 1);
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, minutes, toggleGroup.isStart]);

  const handleToggle = () => {
    setToggleGroup((prev) => ({
      ...prev,
      isStart: !prev.isStart,
      text: prev.isStart ? "Start" : "Stop",
    }));
  };
  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setProgress(0);
  };

  const handleProgressType = () => {
    setProgressType((prev) => !prev);
  };
  return (
    <div className={classes.root} ref={nodeRef}>
      <Collapse in={alertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
      <div className={classes.progressBar}>
        {progressType ? (
          <div className={classes.linearProgress}>
            <TimeTypography value={timeText} />
            <BorderLinearProgress variant="determinate" value={progress} />
          </div>
        ) : (
          <CircularProgressWithLabel
            size={100}
            value={progress}
            timetext={timeText}
            classes={{
              circle: classes.circle,
            }}
          />
        )}
      </div>
      <div className={classes.buttonGroup}>
        <Button variant="contained" color="primary" onClick={handleToggle}>
          {toggleGroup.text}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleReset}
          disabled={toggleGroup.isStart}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProgressType}
        >
          Progress
        </Button>
      </div>
    </div>
  );
}
