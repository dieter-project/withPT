import { GridLoader } from "react-spinners";

function Spinner() {
  return (
    <GridLoader
      color="#f9f4c8"
      loading
      margin={3}
      size={60}
      speedMultiplier={0.5}
    />
  );
}

export default Spinner;
