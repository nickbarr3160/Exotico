import styled from "styled-components";
import React from "react";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 10%;
height: 300px;
background-color: #a36abb;
border-radius: 25px;
overflow: hidden;
`;

const AnimalImg = styled.img``;

const AnimalCardUI = () => {
    return <CardContainer>
        <AnimalImg src="https://placekitten.com/50/50" />
    </CardContainer>
}

export default AnimalCardUI;