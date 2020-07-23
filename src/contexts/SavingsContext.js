import React, { createContext, useState } from 'react';

export const SavingsContext = createContext();

const SavingsContextProvider = (props) => {
    const [savings, setSavings] = useState({
        monthlySavings: 0,
        yearlySavings: 0,
        dailySavings: 0
    });

    const updateSavings = (savedAmount) => {
        setSavings(
            {
                monthlySavings: savedAmount,
                yearlySavings: savedAmount * 12,
                dailySavings: savedAmount / 30
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