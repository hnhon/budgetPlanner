import React from 'react';
import Button from '@material-ui/core/Button';

function Nav(props) {
    return (
        <nav className='filter-nav'>
            <ul>
                <Button variant='outlined' color='primary' onClick={() => { props.setPeriod('daily'); props.converse('daily') }}>Daily</Button>
                <Button variant='outlined' color='primary' onClick={() => { props.setPeriod('monthly'); props.converse('monthly') }}>Monthly</Button>
                <Button variant='outlined' color='primary' onClick={() => { props.setPeriod('yearly'); props.converse('yearly') }}>Yearly</Button>
            </ul>
        </nav>
    )
}

export default Nav;