import React from 'react';
import { Checkbox, Grid } from '@material-ui/core';

function BillsList(props) {
    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className='bills-list'>
                    <div>Monthly Bill</div>
                    <ul>
                        {props.billsList.map(bill => {
                            return (
                                <li className='bill' key={bill.id}>
                                    <Checkbox checked={bill.checked} onChange={() => props.changeBillCheckbox(bill.id)}></Checkbox>
                                    <span>{bill.billTitle}: ${bill.billAmount}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={4}></Grid>
        </>
    )
};

export default BillsList;