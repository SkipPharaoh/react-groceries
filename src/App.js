import './App.css';
import React, {useState} from 'react'
import Calculate from './components/Calculate';

const groceries = [
  {
    item: 'Flour',
    brand: 'Golden Start',
    price: 12,
    quantity: '1lb',
    isPurchased: false
  },
  {
    item: 'Butter',
    brand: "Miyoko's Creamery",
    price: 8,
    quantity: '227G',
    isPurchased: false
  },
  {
    item: 'Turbinado Cane Sugar',
    brand: 'Sugar In The Raw',
    price: 7,
    quantity: '6lb',
    isPurchased: false
  },
  {
    item: 'Whole Grains Oatnut Bread',
    brand: 'Arnold',
    price: 4,
    quantity: '16 Slices',
    isPurchased: false
  },
  {
    item: 'Oatmilk',
    brand: 'Oatly',
    price: 5,
    quantity: '1/2 gallon',
    isPurchased: false
  },
  {
    item: 'Black Bean Burger',
    brand: 'Don Lee Farms',
    price: 14,
    quantity: '12',
    isPurchased: false
  },
  {
    item: 'Pinot Noir',
    brand: 'Domaine Serene',
    price: 75,
    quantity: '1 Bottle',
    isPurchased: false
  },
  {
    item: 'Udon Noodles',
    brand: 'Nongshim',
    price: 18,
    quantity: '6 ct',
    isPurchased: false
  },
]

function App() {
  return (
    <div className="App">
      <h1>Groceries List</h1>
    </div>
  );
}

export default App;
