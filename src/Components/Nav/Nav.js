import React, { useState } from 'react';  

function Nav (props) {

    return (
        <nav className='filter-nav'>
          <ul>
            <Button variant='outlined' color='primary' onClick={()=>{props.setPeriod('daily'); props.converse('daily') }}>Daily</Button>
            <Button variant='outlined' color='primary' onClick={()=>{setPeriod('monthly'); converse('monthly')}}>Monthly</Button>
            <Button variant='outlined' color='primary' onClick={()=>{setPeriod('yearly'); converse('yearly')}}>Yearly</Button>
          </ul>
        </nav>
    )
}

export default Nav;