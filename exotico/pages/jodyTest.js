import styled from "styled-components";
import React from "react";
import AnimalCardUI from "../comps/AnimalCard";
import ButtonUI from "../comps/Button";
import TitleUI from "../comps/Title";

const MainCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: #fad;
`;

export default function jodyTest() {
    return (
        <MainCont>
            <TitleUI />
            <AnimalCardUI />
            <ButtonUI />
        </MainCont>
    )
}