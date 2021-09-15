import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TimeTypography from "../commonComponents/TimeTypography";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));
function CircularProgressWithLabel(props) {
  const classes = useStylesFacebook();
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        color="secondary"
        variant="determinate"
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <TimeTypography value={props.timetext} />
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default CircularProgressWithLabel;
