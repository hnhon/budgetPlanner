import React, { useState } from 'react';  
import './App.css';


function App() {

  const [billTitle, setBillTitle] = useState('');
  //need to assign initial value, otherwise react will treat it as null resulting uncontrolled form later on when using the state
  const [billAmount, setBillAmount] = useState('');
  const [billsList, setBillsList] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);

  const addBill = (e) => {
    e.preventDefault();
    setBillsList([
        ...billsList,
      {
        billTitle: billTitle,
        billAmount: billAmount,
        checked: true,
        id: Date.now()
      }
      ]);
    setTotalCosts(
        totalCosts + Math.round(parseFloat(billAmount)*100)/100
      );
    setBillTitle(
      ''
    );
    setBillAmount(
      ''
    );
  }

  const changeBillCheckbox = (id) => {
    let newBillsList = billsList.map(bill=> {
      if (bill.id === id) {
       bill.checked = !bill.checked;
       return bill;
      }
      return bill;
    });
    setBillsList(newBillsList);
  }

  return (
      <div className='bills-container'>
        <form className='add-bill-form-control' onSubmit={addBill}>
          <input type='text' placeholder='Bill Title' onChange={(e)=> setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billTitle} ></input>
          <input type='text' placeholder='Bill Amount' onChange={(e)=> setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billAmount} ></input>
          <input type='submit'></input>
        </form>
        <div className='bills-total-cost'>
          <p>Monthly bill cost: ${totalCosts}</p>
          <p>Monthly saved:</p>
        </div>
        <div className='bills-list'>
          {billsList.map(bill=>{
            return (
              <div className='bill' key={bill.id}>
                <input type='checkbox' checked={bill.checked} onChange={()=>changeBillCheckbox(bill.id)}></input>
                <li>{bill.billTitle}: ${bill.billAmount}</li>
              </div>
            )
          })}
        </div>
      </div>
  );
}

export default App;
