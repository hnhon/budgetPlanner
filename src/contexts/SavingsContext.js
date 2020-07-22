import React, { createContext, useState } from 'react';

export const SavingsContext = createContext();

const SavingsContextProvider = (props) => {
    const [savings, setSavings] = useState({
        monthlySavings: 0,
        yearlySavings: 0,
        dailySavings: 0
    });

    const updateSavings = (amount) => {
        setSavings(
            {
                monthlySavings: monthlySavings+amount,
                yearlySavings: yearlySavings+amount*12,
                dailySavings: dailySavings+amount/30
            }
        )
    }

    return (
        <SavingsContext.Provider value={{savings, updateSavings}}>
            {props.children}
        </SavingsContext.Provider>
    )
};

export default SavingsContextProvider;