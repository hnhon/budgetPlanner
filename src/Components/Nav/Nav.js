import React, { useContext } from 'react';
import { Grid, Button } from '@material-ui/core';
import { PeriodicalContext } from '../../contexts/PeriodicalContext';

function Nav() {

    const { setPeriodical } = useContext(PeriodicalContext);

    return (
        <>
            <Grid item container xs={4}>
                <Grid item xs={4}><Button color='primary' onClick={() => { setPeriodical('Daily') }} >Daily</Button></Grid>
            </Grid>
            <Grid item container xs={4}>
                <Grid item xs={4}><Button color='primary' onClick={() => { setPeriodical('Monthly') }} >Monthly</Button></Grid>
            </Grid>
            <Grid item container xs={4}>
                <Grid item xs={4}><Button color='primary' onClick={() => { setPeriodical('Yearly') }} >Yearly</Button></Grid>
            </Grid>
        </>
    )
}

export default Nav;