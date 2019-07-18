import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
    background: silver;
`;

const StyledImage = styled.img`
    margin-bottom: 20px;
    box-shadow: 5px 5px 5px grey;
    max-height: 640px;
`;

const ImgContainer = props => {
    return (
    <StyledImageContainer>
        <StyledImage src={`${props.url}`} alt="NASA APOD"/>
    </StyledImageContainer>
    )
}

export default ImgContainer;