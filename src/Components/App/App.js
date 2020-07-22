import React, { useState } from 'react';
import './App.css';
import { Grid, Container } from '@material-ui/core';
import Nav from '../Nav/Nav';
import Form from '../Form/Form'
import BillSummary from './../BillSummary/BillSummary';
import BillsList from './../BillsList/BillsList';
import BillsListProvider from '../../contexts/BillsListContext';
import CostsProvider from '../../contexts/CostsContext';

function App() {
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
    <BillsListProvider>
      <CostsProvider>
        <Container maxWidth='sm'>
          <Grid container className='bills-container'>
            <Grid item xs={12}>
              <Nav converse={converse} setPeriod={setPeriod} />
            </Grid>
            <Grid item container xs={12}>
              <Form setTotalCosts={setTotalCosts} totalCosts={totalCosts} />
            </Grid>
            <Grid item container xs={12}>
              <BillSummary period={period} setPeriod={setPeriod} totalCosts={totalCosts} periodCosts={periodCosts} saved={saved} periodSaved={periodSaved} />
            </Grid>
            <Grid item container xs={12}>
              <BillsList changeBillCheckbox={changeBillCheckbox} />
            </Grid>
          </Grid>
        </Container>
      </CostsProvider>
    </BillsListProvider>
  );
}

export default App;
