import styled from "styled-components";
import React from "react";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
color: #fff;
width: 10vw;
height: 30vh;
background-color: #a36abb;
border-radius: 15px;
box-shadow: 2px 2px 5px 1px black;
overflow: hidden;
`;

const AnimalImg = styled.img`
display: flex;
align-self: flex-start;
width: 100%;
`;


const AnimalCardUI = ({

    name="Jake",
    type="Finger Monkey",
    age="5 months old"
})=> {
    return <CardContainer>
        <AnimalImg src="https://placekitten.com/50/50" />
        {/* <AnimalDescCont>
            <AnimalName>{name}</AnimalName>
            <AnimalType>{type}</AnimalType>
            <AnimalAge>{age}</AnimalAge>
        </AnimalDescCont> */}
        {name}
        <br/>
        {type}
        <br/>
        {age}
    </CardContainer>
}

export default AnimalCardUI;