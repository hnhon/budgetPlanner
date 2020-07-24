import React, { createContext, useState } from 'react';

export const CostsContext = createContext();

function CostsContextProvider(props) {

    const data = JSON.parse(localStorage.getItem('costs')); 

    const [costs, setCosts] = useState(
        // {
        // monthlyCosts: 0,
        // yearlyCosts: 0,
        // dailyCosts: 0
        // }
        data == null? {monthlyCosts: 0, yearlyCosts:0, dailyCosts:0} : data
    );

    const updateCosts = (amount) => {
        let newMonthlyCosts = Math.round( (costs.monthlyCosts + amount)*100 )/100 ;
        let newYearlyCosts =  Math.round( (costs.yearlyCosts + amount * 12)*100 )/100 ;
        let newDailyCosts = Math.round( (costs.dailyCosts + amount / 30)*100 )/100 ;
        setCosts(
            {
                monthlyCosts: newMonthlyCosts,
                yearlyCosts: newYearlyCosts,
                dailyCosts: newDailyCosts
            }
        )
    }

    return (
        <CostsContext.Provider value={{ costs, updateCosts }}>
            {props.children}
        </CostsContext.Provider>
    );
}

export default CostsContextProvider;