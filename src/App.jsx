// App.jsx
import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Contador from './components/Contador'; 
import Ta5Component from './components/Ta5Component';
import TaskList from './components/ta6-7-8/TaskList';

function App() {
  return (
    <>

      {/* Usamos el componente Contador */}
       <Contador />

   
      {/*
        <h1>Aparecer/Desaparecer Texto</h1>
        <Ta5Component />
      */}

        {/*<TaskList />*/}

    </>


  );
}

export default App;
