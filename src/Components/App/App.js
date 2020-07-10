import React, { useState } from 'react';  
import './App.css';


function App() {

  const [billTitle, setBillTitle] = useState();
  const [billAmount, setBillAmount] = useState();
  const [billsList, setBillsList] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);
  console.log(billsList);

  const addBill = (e) => {
    e.preventDefault();
    setBillsList([
        ...billsList,
      {
        billTitle: billTitle,
        billAmount: billAmount
      }
      ]);
    setTotalCosts(
        totalCosts + Math.round(parseFloat(billAmount)*100)/100
      );
    console.log(typeof(parseFloat(totalCosts)));
    setBillTitle(
      ''
    );
    setBillAmount(
      ''
    );
  }

  return (
      <div className='bills-container'>
        <form className='add-bill-form-control' onSubmit={addBill}>
          <input type='text' placeholder='Bill Title' onChange={(e)=> setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billTitle} ></input>
          <input type='text' placeholder='Bill Amount' onChange={(e)=> setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billAmount} ></input>
          <input type='submit' value='Add Bill'></input>
        </form>
        <div className='bills-total-cost'>
          <p>Monthly bill cost: {totalCosts}</p>
          <p>Monthly saved:</p>
        </div>
        <div className='bills-list'>
          {billsList.map(bill=>{
            return (
              <div className='bill'>
                <input type='checkbox'></input>
                <li>{bill.billTitle}: ${bill.billAmount}</li>
              </div>
            )
          })}
        </div>
      </div>
  );
}

export default App;
