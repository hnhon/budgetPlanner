import React, { useState } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Form from '../Form/Form'
import BillSummary from './../BillSummary/BillSummary';
import BillsList from './../BillsList/BillsList';

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
      setPeriodCosts(totalCosts * 12);
      setPeriodSaved(saved * 12)
    } else if (period === 'daily') {
      setPeriodCosts(Math.round((totalCosts / 30) * 100) / 100);
      setPeriodSaved(Math.round((saved / 30) * 100) / 100)
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
      totalCosts + Math.round(parseFloat(billAmount) * 100) / 100
    );
    setBillTitle(
      ''
    );
    setBillAmount(
      ''
    );
  }

  const changeBillCheckbox = (id) => {
    let newBillsList = billsList.map(bill => {
      if (bill.id === id) {
        bill.checked = !bill.checked;
        return bill;
      }
      return bill;
    });
    setBillsList(newBillsList);

    let newSaved = 0;

    billsList.map(bill => {
      if (bill.checked === false) {
        newSaved += Math.round(parseFloat(bill.billAmount) * 100) / 100
      }
      return bill
    });
    setSaved(newSaved);
  }

  return (
    <div className='bills-container'>
      <Nav converse={converse} setPeriod={setPeriod} />
      <Form addBill={addBill} setBillTitle={setBillTitle} billTitle={billTitle} setBillAmount={setBillAmount} billAmount={billAmount} />
      <BillSummary period={period} totalCosts={totalCosts} periodCosts={periodCosts} saved={saved} periodSaved={periodSaved} />
      <BillsList billsList={billsList} changeBillCheckbox={changeBillCheckbox} />
    </div>
  );
}

export default App;
