export const getTimeText = ({ minutes, seconds }) => {
  let formatMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
  return `${formatMinutes} : ${formatSeconds}`;
};
