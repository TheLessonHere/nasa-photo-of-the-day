import React from "react";
import styled from "styled-components";

const StyledButtonR = styled.button`
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
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }

`;

const StyledButtonSpanR = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:after {
    content: '\\00BB';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`;

const DateButtonR = props => {
    return (
    <StyledButtonR onClick={props.handler}>
        <StyledButtonSpanR>
        Next Date
        </StyledButtonSpanR>
    </StyledButtonR>
    )
}

export default DateButtonR;