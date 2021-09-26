import React from 'react'
import './App.css';
import Filter from './Filter/Filter';
import FindIndex from './FindIndex/FindIndex';
import Pop from './Pop/Pop';
import Push from './Push/Push';
import Shift from './Shift/Shift';
import Slice from './Slice/Slice';
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
    </div>
  );
}

export default App;
