import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi'

const searchBar = ({
}) => {
    return <div className= "searchBar">
    <input 
    type = "text"
    placeholder = "search to see where to properly recycle an item"
    id = "inputField"/>
    <div >
    <BiSearchAlt/>
    </div>
</div>
   
}

export default searchBar;