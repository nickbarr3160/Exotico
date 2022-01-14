import React from "react";
import styled from "styled-components";
import NavBar from "../comps/NavBar";


const MainCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export default function ibbytest() {
    return (
        <MainCont>
            <NavBar />
        </MainCont>
    )
}