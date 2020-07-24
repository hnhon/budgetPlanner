import React, { createContext, useState } from 'react';

export const BillsListContext = createContext();

function BillsListContextProvider(props) {

    const data = JSON.parse(localStorage.getItem('billsList')); 
    const [billsList, setBillsList] = useState(data == null? []: data);

    return (
        <BillsListContext.Provider value={{ billsList, setBillsList }}>
            {props.children}
        </BillsListContext.Provider>
    )
}

export default BillsListContextProvider;