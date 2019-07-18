import React from "react";
import styled from "styled-components";

const StyledButtonL = styled.button`
  display: flex;
  align-self: center;
  border-radius: 4px;
  background-color: #282c34;
  border: 3px solid whitesmoke;
  color: whitesmoke;
  text-align: center;
  font-size: 2rem;
  padding: 20px;
  height: 100%
  width: 200px;
  transition: padding-left 0.5s;
  cursor: pointer;
  margin: 5px;
  outline: none;

  &:hover {
      background-color: silver;
      color: #282c34;
  }

  &:hover span {
    padding-left: 25px;
  }

  &:hover span:after {
    opacity: 1;
    left: 0;
  }

`;

const StyledButtonSpanL = styled.span`
  cursor: pointer;
  display: flex;
  position: relative;
  transition: 0.5s;

  &:after {
    content: '\\00AB';
    position: absolute;
    opacity: 0;
    top: 0;
    left: -20px;
    transition: 0.5s;
  }
`;

const DateButtonL = props => {
    return (
    <StyledButtonL onClick={props.handler}>
        <StyledButtonSpanL>
            Prior Date
        </StyledButtonSpanL>
    </StyledButtonL>
    )
}

export default DateButtonL;