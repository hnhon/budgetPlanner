import React, { createContext, useState } from 'react';

export const CostsContext = createContext();

function CostsContextProvider (props) {
    const [costs, setCosts] = useState([{
        monthlyCosts: 0,
        yearlyCosts: 0,
        dailyCosts: 0
    }]);

    const updateCosts = (amount) => {
        let newMonthlyCosts = costs.monthlyCosts + amount;
        let newYearlyCosts = costs.yearlyCosts + amount*12;
        let newDailyCosts = costs.dailyCosts + amount/30;
        setCosts(
            [...costs, {
                monthlyCosts: newMonthlyCosts,
                yearlyCosts: newYearlyCosts,
                dailyCosts: newDailyCosts
            }]
        )
    }

        return (
            <CostsContext.Provider value={{costs, updateCosts}}>
                {props.children}
            </CostsContext.Provider>
        );
}

export default CostsContextProvider;