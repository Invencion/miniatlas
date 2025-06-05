import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  card: '#f2f2f2',
  border: '#ddd',
  primary: '#6200ee',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  card: '#1e1e1e',
  border: '#333',
  primary: '#bb86fc',
};

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(systemScheme === 'dark' ? darkTheme : lightTheme);
  }, [systemScheme]);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
