import React, { useContext } from 'react';
import { Tab, Grid } from '@material-ui/core';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';

function Nav() {

    const { setPeriodical } = useContext(PeriodicalContext);

    return (
        <>
            <Grid item xs={4}>
                <Tab style={{padding: '0'}} label='Daily' variant='outlined' color='primary' onClick={() => { setPeriodical('Daily') }} />
            </Grid>
            <Grid item xs={4}>
                <Tab style={{padding: '0'}} label='Monthly' variant='outlined' color='primary' onClick={() => { setPeriodical('Monthly') }} />
            </Grid>
            <Grid item xs={4}>
                <Tab style={{padding: '0'}} label='Yearly' variant='outlined' color='primary' onClick={() => { setPeriodical('Yearly') }} />
            </Grid>
        </>
    )
}

export default Nav;