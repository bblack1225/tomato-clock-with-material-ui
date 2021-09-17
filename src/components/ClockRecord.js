import { useSelector } from "react-redux";

const ClockRecord = () => {
  const state = useSelector((state) => state.records);
  console.log("state!!!", state);
  return <div>records</div>;
};

export default ClockRecord;
