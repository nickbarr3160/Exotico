import DetailedCard from "../comps/DetailedCard";
import React from "react";
import styled from "styled-components";

const MainCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export default function ibbytest() {
    return (
        <MainCont> 
            <DetailedCard />
        </MainCont>
    )
}