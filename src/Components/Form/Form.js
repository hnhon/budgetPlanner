import React, { useState, useContext, useEffect } from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import { BillsListContext } from '../../contexts/BillsListContext'
import { CostsContext } from '../../contexts/CostsContext';

function Form() {
  const [billTitle, setBillTitle] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const { billsList, setBillsList } = useContext(BillsListContext);
  const { costs, updateCosts } = useContext(CostsContext);

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

  useEffect(() => {
    localStorage.setItem('billsList', JSON.stringify(billsList));
  }, [billsList])

  useEffect(() => {
    localStorage.setItem('costs', JSON.stringify(costs));
  }, [costs])

  return (
    <>
      <Grid item xs={1} sm={4}></Grid>
      <Grid item xs={10} sm={4}>
        <a href='https://github.com/hnhon' rel="noopener noreferrer" target="_blank" style={{ color: 'black', textDecoration: 'none', margin:'auto' }}>Project Repo</a> <br />
        <a href='https://linkedin.com/in/hiunamhon' rel="noopener noreferrer" target="_blank" style={{ color: 'black', textDecoration: 'none' }} >Contact Me</a> <br />
        <Box mb={1} />
        <form className='add-bill-form-control' onSubmit={(e) => { addBill(e); updateCosts(parseFloat(billAmount)) }}>
          <TextField type='text' label='Bill Title' onChange={(e) => setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billTitle} required /><br />
          <TextField type='number' label='Monthly Bill' onChange={(e) => setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={billAmount} required /><br />
          <Box mt={1}>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Box>
        </form>
      </Grid>
      <Grid item xs={1} sm={4}></Grid>
    </>
  )
};

export default Form;