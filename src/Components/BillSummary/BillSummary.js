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
                    <p style={{fontSize: '1.25rem'}}>{periodical} bill cost: </p>
                    <p style={{fontSize: '1.25rem'}}> $ {periodical === 'Monthly' ? costs.monthlyCosts : (periodical === 'Yearly' ? costs.yearlyCosts : costs.dailyCosts)} </p>
                    <p style={{fontSize: '1.25rem'}}>{periodical} saved:</p>
                    <p style={{fontSize: '1.25rem'}}> $ {periodical === 'Monthly' ? savings.monthlySavings : (periodical === 'Yearly' ? savings.yearlySavings : savings.dailySavings)}</p>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default BillSummary;