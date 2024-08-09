// App.js
import React, { useContext } from 'react';
import './App.css';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import Card from './components/Card';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme =()=>{
    setTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>{theme}</button>
      </header> <br />
      <Card/>
    </div>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
    
  </ThemeProvider>
);

export default Root;
