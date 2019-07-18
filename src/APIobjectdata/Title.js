import React from "react";
import styled from "styled-components";

const StyledImageTitle = styled.h1`
font-size: 3rem;
padding: 30px;
background: #282c34;
color: whitesmoke;
box-shadow: 5px 5px 5px grey;
text-shadow: 3px 3px 5px black;
`;

const Title = props => {
    return (
    <StyledImageTitle>{props.title}</StyledImageTitle>
    )
}

export default Title;