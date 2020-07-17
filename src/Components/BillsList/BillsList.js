import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function BillsList(props) {
    return (
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
    )
};

export default BillsList;