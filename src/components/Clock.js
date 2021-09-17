import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgressWithLabel from "../progress/CircularProgressWithLabel";
import BorderLinearProgress from "../progress/BorderLinearProgress";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { progressTypeConstant } from "../constants/progressType";
import TimeTypography from "../commonComponents/TimeTypography";
import { getTimeText } from "../libs/utils";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

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

const initialTimerState = {
  minutes: 25,
  seconds: 0,
  progress: 0,
};
const totalSeconds = 25 * 60;
const Clock = () => {
  const nodeRef = useRef(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 25,
    seconds: 0,
    progress: 0,
  });
  const [toggleGroup, setToggleGroup] = useState({
    isStart: false,
    text: "Start",
  });
  const [progressType, setProgressType] = useState(
    progressTypeConstant["circle"]
  );
  const classes = useStyles();
  const timeText = getTimeText(timeLeft);
  const state = useSelector((state) => state.records);
  const dispatch = useDispatch();
  const { startTime } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (toggleGroup.isStart) {
      const timer = setInterval(() => {
        if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
          setToggleGroup((prev) => ({
            ...prev,
            isStart: false,
            text: "Start",
          }));
          setTimeLeft(initialTimerState);
          setAlertOpen(true);
        } else {
          const currentSeconds = timeLeft.minutes * 60 + timeLeft.seconds;
          const secondsToGo = totalSeconds - currentSeconds - 1;
          const percentage = (secondsToGo / totalSeconds) * 100;
          setTimeLeft((prev) => ({
            seconds: prev.seconds ? prev.seconds - 1 : 59,
            minutes: prev.seconds ? prev.minutes : prev.minutes - 1,
            progress: percentage,
          }));
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, toggleGroup.isStart]);

  const handleToggle = () => {
    setToggleGroup((prev) => ({
      isStart: !prev.isStart,
      text: prev.isStart ? "Start" : "Stop",
    }));
    startTime({ startTime: timeText });
  };
  const handleReset = () => setTimeLeft(initialTimerState);

  const handleProgressType = () => setProgressType((prev) => !prev);
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
            <BorderLinearProgress
              variant="determinate"
              value={timeLeft.progress}
            />
          </div>
        ) : (
          <CircularProgressWithLabel
            size={100}
            value={timeLeft.progress}
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
};

export default Clock;
