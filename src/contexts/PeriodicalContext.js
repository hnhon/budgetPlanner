import React, { createContext, useState } from 'react';

export const PeriodicalContext = createContext();

const PeriodicalContextProvider = (props) => {

    const [periodical, setPeriodical] = useState('monthly')

    return (
        <PeriodicalContext.Provider value={{ periodical, setPeriodical }}>
            {props.children}
        </PeriodicalContext.Provider>
    )

}

export default PeriodicalContextProvider;