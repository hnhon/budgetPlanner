import React from 'react';

function BillSummary(props) {
    return (
        <div className='bills-total-cost'>
            <p>{props.period} bill cost: $ {props.period === 'monthly' ? props.totalCosts : props.periodCosts} </p>
            <p>{props.period} saved: $ {props.period === 'monthly' ? props.saved : props.periodSaved}</p>
        </div>
    )
};

export default BillSummary;