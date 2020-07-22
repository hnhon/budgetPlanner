import React, {useContext} from 'react';
import { Checkbox, Grid } from '@material-ui/core';
import { BillsListContext } from '../../contexts/BillsListContext';
import { SavingsContext } from '../../contexts/SavingsContext';

function BillsList(props) {
    const {billsList} = useContext(BillsListContext);
    const {updateSavings} = useContext(SavingsContext);
    return (
        <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <div className='bills-list'>
                    <div>Monthly Bill</div>
                    <ul>
                        {billsList.map(bill => {
                            return (
                                <li className='bill' key={bill.id}>
                                    <Checkbox checked={bill.checked} onChange={() => {props.changeBillCheckbox(bill.id); updateSavings( parseFloat(bill.billAmount) )}}></Checkbox>
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