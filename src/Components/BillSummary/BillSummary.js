import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { CostsContext } from '../../contexts/CostsContext';
import { SavingsContext } from '../../contexts/SavingsContext';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';

function BillSummary() {

    const { costs } = useContext(CostsContext);
    const { savings } = useContext(SavingsContext);
    const { periodical } = useContext(PeriodicalContext);

    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className='bills-total-cost'>
                    <h1>{costs.monthlyCosts}</h1>
                    <p>{periodical[0].toUpperCase() + periodical.substring(1)} bill cost: $ {periodical === 'monthly' ? costs.monthlyCosts : (periodical === 'yearly' ? costs.yearlyCosts : costs.dailyCosts)} </p>
                    <p>{periodical[0].toUpperCase() + periodical.substring(1)} saved: $ {periodical === 'monthly' ? savings.monthlySavings : (periodical === 'yearly' ? savings.yearlySavings : savings.dailySavings)}</p>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default BillSummary;