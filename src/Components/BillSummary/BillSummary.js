import React, {useContext} from 'react';
import { Grid } from '@material-ui/core';
import { CostsContext } from '../../contexts/CostsContext';

function BillSummary(props) {

    const {costs} = useContext(CostsContext);
    
    return (
        <>
            
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className='bills-total-cost'>
                    <h1>{costs.monthlyCosts}</h1>
                    <p>{props.period[0].toUpperCase()+props.period.substring(1)} bill cost: $ {props.period === 'monthly' ? costs.monthlyCosts : props.periodCosts} </p>
                    <p>{props.period[0].toUpperCase()+props.period.substring(1)} saved: $ {props.period === 'monthly' ? props.saved : props.periodSaved}</p>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default BillSummary;