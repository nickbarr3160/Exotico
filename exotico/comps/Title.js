import styled from "styled-components";
import React from "react";

const TitleCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 25%;
`;

const TitleText = styled.h1`
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 3rem;
font-weight: 200;
letter-spacing: 50px;
color: #EDCB51;
`;

const TitleUI = ({

}) => {
    return <TitleCont>
        <TitleText>EXOTICO</TitleText>
    </TitleCont>
}

export default TitleUI;