import React from 'react';
import './App.css';
import { Grid, Box } from '@material-ui/core';
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
            <Box mt={10} />
            <Grid container>
              <Grid item xs={2} sm={4} />
              <Grid container item xs={8} sm={4} style={{ boxShadow: '2px 5px 20px gray' }}>
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
              <Grid item xs={2} sm={4} />
            </Grid>
            <Box mb={10} />
          </PeriodicalProvider>
        </SavingsProvider>
      </CostsProvider>
    </BillsListProvider>
  );
}

export default App;
