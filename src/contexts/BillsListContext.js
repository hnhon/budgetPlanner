import React, { createContext, useState } from 'react';

export const BillsListContext = createContext();

function BillsListContextProvider(props) {
    const [billsList, setBillsList] = useState([]);
    return (
        <BillsListContext.Provider value={{ billsList, setBillsList }}>
            {props.children}
        </BillsListContext.Provider>
    )
}

export default BillsListContextProvider;