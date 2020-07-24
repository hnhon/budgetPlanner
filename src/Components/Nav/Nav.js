import React, { useContext } from 'react';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';

function Nav() {

    const { setPeriodical } = useContext(PeriodicalContext);

    return (
        <>
            <nav className='nav-style'>
                <button onClick={() => { setPeriodical('Daily') }}>Daily</button>
                <button onClick={() => { setPeriodical('Monthly') }}>Monthly</button>
                <button onClick={() => { setPeriodical('Yearly') }}>Yearly</button>
            </nav>
        </>
    )
}

export default Nav;