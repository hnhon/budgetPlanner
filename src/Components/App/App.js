import React, { useState } from 'react';  
import './App.css';


function App() {

  const [billTitle, setBillTitle] = useState('');
  //need to assign initial value, otherwise react will treat it as null resulting uncontrolled form later on when using the state
  const [billAmount, setBillAmount] = useState('');
  const [billsList, setBillsList] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);
  const [saved, setSaved] = useState(0);
  const [period, setPeriod] = useState('monthly');
  const [periodCosts, setPeriodCosts] = useState();
  const [periodSaved, setPeriodSaved] = useState();

  const converse = (period) => {
    if (period === 'monthly') {
      setPeriodCosts(totalCosts);
      setPeriodSaved(saved);
    } else if (period === 'yearly') {
      setPeriodCosts(totalCosts*12);
      setPeriodSaved(saved*12)
    } else if (period === 'daily') {
      setPeriodCosts(Math.round((totalCosts/30)*100)/100); 
      setPeriodSaved(Math.round((saved/30)*100)/100)
    }
  }

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

    let newSaved=0;

    billsList.map(bill=> {
      if (bill.checked === false) {
        newSaved += Math.round(parseFloat(bill.billAmount)*100 )/100
      }
      return bill
    });
    setSaved(newSaved);
  }

  return (
      <div className='bills-container'>
        <nav className='filter-nav'>
          <ul>
            <li><button onClick={()=>{setPeriod('daily'); converse('daily') }}>Daily</button></li>
            <li><button onClick={()=>{setPeriod('monthly'); converse('monthly')}}>Monthly</button></li>
            <li><button onClick={()=>{setPeriod('yearly'); converse('yearly')}}>Yearly</button></li>
          </ul>
        </nav>
        <form className='add-bill-form-control' onSubmit={addBill}>
          <input type='text' placeholder='Bill Title' onChange={(e)=> setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billTitle} ></input>
          <input type='text' placeholder='Enter Monthly Bill' onChange={(e)=> setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billAmount} ></input>
          <input type='submit'></input>
        </form>
        <div className='bills-total-cost'>
          <p>{period} bill cost: $ {period==='monthly'?totalCosts:periodCosts} </p>
          <p>{period} saved: $ {period==='monthly'?saved:periodSaved}</p>
        </div>
        <div className='bills-list'>
          <div>Monthly Bill</div>
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
