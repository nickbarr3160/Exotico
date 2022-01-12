import AnimalCardUI from "../comps/AnimalCard";
import React from "react";
import styled from "styled-components";
import ButtonUI from "../comps/Button";

const MainCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export default function jodyTest() {
    return (
        <MainCont>
            <AnimalCardUI />
            <ButtonUI />
        </MainCont>
    )
}