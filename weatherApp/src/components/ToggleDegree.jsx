import { useDegree } from "../context/DegreeContext";
//import { Switch } from '@mui/material';

const ToggleDegree = () => {
  const { degree, toggleDegree } = useDegree();

  return (

     //<><Switch checked={degree === 'C'} onChange={toggleDegree} slotProps={{ input: { 'aria-label': 'controlled' } }} /><span>Switch to {theme === 'C' ? 'F' : 'C'} C/F</span></>
    <label>
      <input
        type="checkbox"
        checked={degree === "C"}
        onChange={toggleDegree}
        aria-label="Toggle temperature scale"
      />
      <span>Switch to {degree === "C" ? "°F" : "°C"}</span>
    </label>
  );
};

export default ToggleDegree;