//function components(only render, no state, no events) vs class components

import React from 'react'
import './search-box.styles.css'

export const SearchBox = (props)=>(
    <input 
    type='search'
    className = "search" 
    placeholder={props.placeholder}
    onChange={props.handleChange}
    >
</input>
)