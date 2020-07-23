import React from 'react';
import './App.css';
import { Grid, Container } from '@material-ui/core';
import Nav from '../Nav/Nav';
import Form from '../Form/Form'
import BillSummary from './../BillSummary/BillSummary';
import BillsList from './../BillsList/BillsList';
import BillsListProvider from '../../contexts/BillsListContext';
import CostsProvider from '../../contexts/CostsContext';
import SavingsProvider from '../../contexts/SavingsContext';
import PeriodicalProvider from '../../contexts/PeriodicalContext';

function App() {

  return (
    <BillsListProvider>
      <CostsProvider>
        <SavingsProvider>
          <PeriodicalProvider>
            <Container maxWidth='sm'>
              <Grid container className='bills-container'>
                <Grid item container xs={12}>
                  <Nav />
                </Grid>
                <Grid item container xs={12}>
                  <Form />
                </Grid>
                <Grid item container xs={12}>
                  <BillSummary />
                </Grid>
                <Grid item container xs={12}>
                  <BillsList />
                </Grid>
              </Grid>
            </Container>
          </PeriodicalProvider>
        </SavingsProvider>
      </CostsProvider>
    </BillsListProvider>
  );
}

export default App;
