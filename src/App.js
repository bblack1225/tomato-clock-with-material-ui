import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgressWithLabel from "./progress/CircularProgressWithLabel";
import BorderLinearProgress from "./progress/BorderLinearProgress";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import TimeTypography from "./commonComponents/TimeTypography";
import Clock from "./components/Clock";

export default function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}
