import React from 'react';
import './App.scss';
import Header from './component/Header/Header'
import Calendar from './component/Calendar/Calendar'
import Chart from './component/Chart/Chart'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Calendar></Calendar>
        <Chart></Chart>
      </main>
    </div>
  );
}

export default App;
