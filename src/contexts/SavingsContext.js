import React, { createContext, useState } from 'react';

export const SavingsContext = createContext();

const SavingsContextProvider = (props) => {

    const data = JSON.parse(localStorage.getItem('savings'));

    const [savings, setSavings] = useState(
        localStorage.getItem('savings') == null? 
        {monthlySavings: 0,yearlySavings: 0,dailySavings: 0}:
        data
        );

    const updateSavings = (savedAmount) => {
        setSavings(
            {
                monthlySavings: Math.round( (savedAmount)*100 )/100,
                yearlySavings:  Math.round( (savedAmount * 12)*100 )/100,
                dailySavings: Math.round( (savedAmount / 30)*100 )/100
            }
        )
    }

    return (
        <SavingsContext.Provider value={{ savings, updateSavings }}>
            {props.children}
        </SavingsContext.Provider>
    )
};

export default SavingsContextProvider;