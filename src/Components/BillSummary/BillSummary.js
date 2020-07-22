import React, {useState} from 'react';
import { Grid } from '@material-ui/core';

function BillSummary(props) {
    
    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className='bills-total-cost'>
                    <p>{props.period[0].toUpperCase()+props.period.substring(1)} bill cost: $ {props.period === 'monthly' ? props.totalCosts : props.periodCosts} </p>
                    <p>{props.period[0].toUpperCase()+props.period.substring(1)} saved: $ {props.period === 'monthly' ? props.saved : props.periodSaved}</p>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default BillSummary;