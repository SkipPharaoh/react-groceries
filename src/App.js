import './App.css';
import React, {useState} from 'react'
import GroceriesList from './components/Groceries';



function App() {
  return (
    <div className="App">
      <h1>Groceries List</h1>
      <GroceriesList />
    </div>
  );
}

export default App;
