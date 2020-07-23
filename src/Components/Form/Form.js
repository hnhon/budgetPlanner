import React, { useState, useContext } from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import { BillsListContext } from '../../contexts/BillsListContext'
import { CostsContext } from '../../contexts/CostsContext';

function Form() {
  const [billTitle, setBillTitle] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const { billsList, setBillsList } = useContext(BillsListContext);
  const { updateCosts } = useContext(CostsContext);

  const addBill = (e) => {
    e.preventDefault();
    setBillsList(
      [...billsList,
      {
        billTitle: billTitle,
        billAmount: billAmount,
        checked: true,
        id: Date.now()
      }]
    );
    setBillTitle(
      ''
    );
    setBillAmount(
      ''
    );
  }

  return (
    <>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <form className='add-bill-form-control' onSubmit={(e) => { addBill(e); updateCosts(parseFloat(billAmount)) }}>
          <TextField type='text' label='Bill Title' onChange={(e) => setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billTitle} required ></TextField>
          <TextField type='number' label='Enter Monthly Bill' onChange={(e) => setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billAmount} required ></TextField>
          <Box mt={1}>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Box>
        </form>
      </Grid>
      <Grid item xs={4}></Grid>
    </>
  )
};

export default Form;