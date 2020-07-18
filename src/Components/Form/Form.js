import React from 'react';
import { Grid } from '@material-ui/core';

function Form(props) {
    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <form className='add-bill-form-control' onSubmit={props.addBill}>
                    <div>
                        <input type='text' placeholder='Bill Title' onChange={(e) => props.setBillTitle(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={props.billTitle} ></input>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter Monthly Bill' onChange={(e) => props.setBillAmount(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={props.billAmount} ></input>
                    </div>
                    <div>
                        <input type='submit'></input>
                    </div>
                </form>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default Form;