import React, {useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import CandyForm from './Components/Candies/CandyForm';
import CandyList from './Components/Candies/CandyList';
function App() {

  const [CandyData, setCandyData] = useState([]);
  const addCandyHandler = (candyName, candyDescription, candyPrice) => {
    setCandyData((prevCandyData) => {
      return [
        ...prevCandyData,
        {
          id: Math.random().toString(),
          Name: candyName,
          Description: candyDescription,
          Price: candyPrice,
        },
      ];
    });
  };

  return (
    <div className="App">
      <Header />
      <CandyForm onAdd={addCandyHandler} />
      <CandyList CandyData={CandyData}/>
      
    </div>
  );
}

export default App;
