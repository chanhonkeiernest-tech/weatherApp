import { useTheme } from '../context/DegreeContext';

const toggleDegree = () => {
  const { degree, toggleDegree } = useTheme();

  return (
     <><Switch checked={degree === 'C'} onChange={toggleDegree} slotProps={{ input: { 'aria-label': 'controlled' } }} /><span>Switch to {theme === 'C' ? 'F' : 'C'} C/F</span></>
  );
};

export default ToggleTheme;