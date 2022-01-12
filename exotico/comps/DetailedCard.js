import styled from 'styled-components';
import React from "react";

const Container = styled.div`
    width: 1200px;
    height: 620px;
    background-color: #9365A6;
    border-radius: 25px;
    display:flex;
`;

const FImg = styled.img`
    width: 480px;
    height: 620px;
`;

const SCont = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Paras = styled.p`
    font-size: 36px;
    font-weight: bold;
    color: #fff;
`;

const Para = styled.p`
    font-size: 20px;
    color: #fff;
`;

const TCont = styled.div`
    margin: 100px;
    display: flex;
`;

const DetailedCard = ({
    animal="Kurama",
    type="Maned Wolf",
    age="14 seconds old",
    continent="South America",
    vstatus="Fully Vaccincated",
    petInfo="Lorem ipsum dolor"

}) => {
    return (
        <Container>
            <FImg src="https://www.fillmurray.com/500/700" />
            <SCont>
                <Paras>
                {animal}
                </Paras>
                <Para>
                {type}
                </Para>
                <Para>
                {age}
                </Para>
                <Para>
                {continent}
                </Para>
                <Para>
                {vstatus}
                </Para>
            </SCont>
            <TCont>
                <Para>
                {petInfo}
                </Para>

                {/* Button goes here */}

            </TCont>
        </Container>
    )
}

export default DetailedCard;