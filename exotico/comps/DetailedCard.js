import styled from 'styled-components';
import React from "react";

const Container = styled.div`
    width: 1200px;
    height: 620px;
    background-color: #9365A6;
`;

const Paragraph = styled.p`
    font-size: 14px;

`;

const DetailedCard = ({
    animal="work",
    type="",
    age="",
    country="",
    vstatus=""
}) => {
    return (
        <Container>
            <Paragraph>
                {animal}
                {type}
                {age}
                {country}
                {vstatus}
            </Paragraph>
        </Container>
    )
}

export default DetailedCard;