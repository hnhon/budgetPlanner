import React, { useContext, useEffect } from 'react';
import { Checkbox, Grid } from '@material-ui/core';
import { BillsListContext } from '../../contexts/BillsListContext';
import { SavingsContext } from '../../contexts/SavingsContext';

function BillsList() {
    const { billsList, setBillsList } = useContext(BillsListContext);
    const { savings, updateSavings } = useContext(SavingsContext);

    useEffect(()=> {
        localStorage.setItem('savings', JSON.stringify(savings))
    }, [savings])

    const changeBillCheckbox = (id) => {
        let newBillsList = billsList.map(bill => {
            if (bill.id === id) {
                bill.checked = !bill.checked;
                return bill;
            }
            return bill;
        });
        setBillsList(newBillsList);

        let savedAmount = 0;

        billsList.map(bill => {
            if (bill.checked === false) {
                savedAmount += Math.round(parseFloat(bill.billAmount) * 100) / 100
            }
            return bill
        });
        updateSavings(savedAmount);
    }

    return (
        <>
            <Grid item xs={3} sm={4}></Grid>
            <Grid item xs={6} sm={4}>
                <div className='bills-list'>
                    <div>Monthly Bill</div>
                    <ul style={{padding: '0'}}>
                        {billsList.map(bill => {
                            return (
                                <li className='bill' key={bill.id}>
                                    <Checkbox style={{paddingLeft: '0'}} checked={bill.checked} onChange={() => { changeBillCheckbox(bill.id) }}></Checkbox>
                                    <span>{bill.billTitle}: ${bill.billAmount}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Grid>
            <Grid item xs={3} sm={4}></Grid>
        </>
    )
};

export default BillsList;