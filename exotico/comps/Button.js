import styled from "styled-components";
import React from "react";

const ButtonContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: #edcb51;
height: 5vh;
width: 10vw;
border-radius: 15px;
border: none;
box-shadow: 2px 2px 5px 1px black;
font-size: 1.5rem;
`;

const ButtonUI = ({
    text="ADOPT"
}) => {
    return <ButtonContainer>{text}</ButtonContainer>
}

export default ButtonUI;