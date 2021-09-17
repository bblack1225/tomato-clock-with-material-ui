import { Typography } from "@mui/material";

const TimeTypography = ({ value }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      color="secondary"
      style={{ fontWeight: 700 }}
    >
      {value}
    </Typography>
  );
};

export default TimeTypography;
