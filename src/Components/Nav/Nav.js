import React, { useContext } from 'react';
import { Tab } from '@material-ui/core';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';
import './Nav.css';

function Nav() {

    const { setPeriodical } = useContext(PeriodicalContext);

    return (
        <nav className='filter-nav'>
            <ul>
                <Tab label='Daily' variant='outlined' color='primary' onClick={() => { setPeriodical('Daily') }} />
                <Tab label='Monthly' variant='outlined' color='primary' onClick={() => { setPeriodical('Monthly') }} />
                <Tab label='Yearly' variant='outlined' color='primary' onClick={() => { setPeriodical('Yearly') }} />
            </ul>
        </nav>
    )
}

export default Nav;