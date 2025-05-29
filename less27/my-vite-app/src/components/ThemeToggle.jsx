import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginTop: '1.5rem' }}>
      {darkMode ? 'Перемкнути на світлу тему' : 'Перемкнути на темну тему'}
    </button>
  );
};

export default ThemeToggle;
