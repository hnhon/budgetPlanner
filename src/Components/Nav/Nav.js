import React, {useState} from 'react';
import { Tab, Tabs } from '@material-ui/core';
import './Nav.css';

function Nav(props) {
    return (
        <nav className='filter-nav'>
            <ul>
                
                    <Tab label='Daily' variant='outlined' color='primary' onClick={() => { props.setPeriod('daily'); props.converse('daily') }} />
                    <Tab label='Monthly' variant='outlined' color='primary' onClick={() => { props.setPeriod('monthly'); props.converse('monthly') }} />
                    <Tab label='Yearly' variant='outlined' color='primary' onClick={() => { props.setPeriod('yearly'); props.converse('yearly') }} />
                
            </ul>
        </nav>
    )
}

export default Nav;