import React from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';

function Form(props) {
    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <form className='add-bill-form-control' onSubmit={props.addBill}>
                    <TextField type='text' label='Bill Title' onChange={(e) => props.setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={props.billTitle} ></TextField>
                    <TextField type='text' label='Enter Monthly Bill' onChange={(e) => props.setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={props.billAmount} ></TextField>
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