import React, { useContext } from 'react';
import { Tab } from '@material-ui/core';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';
import './Nav.css';

function Nav() {

    const { setPeriodical } = useContext(PeriodicalContext);

    return (
        <nav className='filter-nav'>
            <ul>
                <Tab label='Daily' variant='outlined' color='primary' onClick={() => { setPeriodical('daily') }} />
                <Tab label='Monthly' variant='outlined' color='primary' onClick={() => { setPeriodical('monthly') }} />
                <Tab label='Yearly' variant='outlined' color='primary' onClick={() => { setPeriodical('yearly') }} />
            </ul>
        </nav>
    )
}

export default Nav;