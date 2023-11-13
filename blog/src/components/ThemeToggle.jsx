import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ onThemeChange }) {
  const { theme, toggleTheme } = useTheme();
  const handleThemeToggle = () => {
    toggleTheme();
    onThemeChange(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className={`theme-toggle ${theme}`}>
      <input type="checkbox" onChange={handleThemeToggle} />
      <div className="slider">
        <div className="slider-image light-image"></div>
        <div className="slider-image dark-image"></div>
      </div>
    </label>
  );
}
