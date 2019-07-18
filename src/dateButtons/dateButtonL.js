import React from "react";
import styled from "styled-components";

const StyledButtonL = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #282c34;
  border: 3px solid whitesmoke;
  color: whitesmoke;
  text-align: center;
  font-size: 28px;
  padding: 20px;
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
  display: inline-block;
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