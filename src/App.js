import React from 'react'
import './App.css';
import Every from './Every/Every';
import Filter from './Filter/Filter';
import FindIndex from './FindIndex/FindIndex';
import Includes from './Includes/Includes';
import Pop from './Pop/Pop';
import Push from './Push/Push';
import Reduce from './Reduce/Reduce';
import Shift from './Shift/Shift';
import Slice from './Slice/Slice';
import Some from './Some/Some';
import Sort from './Sort/Sort';
import Splice from './Splice/Splice';
import Unshift from './Unshift/Unshift';

function App() {
  return (
    <div className="App">
      <h1>Tests perso</h1>
        <Sort/>
        <FindIndex/>
        <Filter/>
        <Slice/>
        <Splice/>
        <Push/>
        <Pop/>
        <Shift/>
        <Unshift/>
        <Includes/>
        <Reduce/>
        <Some/>
        <Every/>

    </div>
  );
}

export default App;
