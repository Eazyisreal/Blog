import {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(''); 
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);
  }, []);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); 
      return newTheme;
    });
  };
  

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
    
};


export const useTheme = () =>{
    return useContext(ThemeContext)
};
