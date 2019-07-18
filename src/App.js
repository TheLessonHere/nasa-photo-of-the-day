import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title, CurrentDate, Description, ImgContainer } from "./APIobjectdata/index"
import { DateButtonL, DateButtonR } from "./dateButtons/index"
import styled from "styled-components";

const StyledAppContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  margin-bottom: 50px;
  background: silver;
`;

const StyledTopSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledBottomSection = styled.div`
  display: flex;
  align-self: center;
  flex-flow: row nowrap;
  width: 100%;
  background: #282c34;
  color: whitesmoke;
`

const StyledBottomText = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;

function App() {

  const [currentObj, setCurrentObj] = useState([])
  const [dateState, setDateState] = useState('2012-03-14')

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateState}`)
      .then((response) => {
        console.log('Response', response.data);
        let currentobject = response.data;
        setCurrentObj(currentobject);
      })
      .catch((error) => {
        console.log('Data not available');
      })

  }, [dateState])

  const dateNext = (datestring) => {
    let stringday = `${datestring.charAt(8)}${datestring.charAt(9)}`
    let integday = parseInt(stringday);
    function dateChangerNext () {
      if (integday < 31) {
      const nextdatenum = integday + 1;
      if (nextdatenum < 10) {
        const nextdate = `0${nextdatenum.toString()}`;
        return nextdate
      } else {
        const nextdate = nextdatenum.toString();
        return nextdate
      }
      } else {
        const nextdatenum = 1;
        const nextdate = `0${nextdatenum.toString()}`;
        return nextdate
      }
    }
    return dateChangerNext();
  }

  const datePrev = (datestring) => {
    let stringday = `${datestring.charAt(8)}${datestring.charAt(9)}`
    let integday = parseInt(stringday);
    function dateChangerPrev () {
      if (integday > 1) {
      const prevdatenum = integday - 1;
        if (prevdatenum < 10) {
          const prevdate = `0${prevdatenum.toString()}`;
          return prevdate
        } else {
          const prevdate = prevdatenum.toString();
          return prevdate
        }
      } else {
        const prevdatenum = 31;
        const prevdate = prevdatenum.toString();
        return prevdate
      }
    }
    return dateChangerPrev();
  }

  return (
    <StyledAppContainer>
      <StyledTopSection>
        <Title title={currentObj.title} />
        <ImgContainer url={currentObj.url} />
      </StyledTopSection>
      <StyledBottomSection>
        <DateButtonL handler={() => setDateState(`2012-03-${datePrev(dateState)}`)} />
        <StyledBottomText>
          <CurrentDate date={dateState} />
          <Description explanation={currentObj.explanation} />
        </StyledBottomText>
        <DateButtonR handler={() => setDateState(`2012-03-${dateNext(dateState)}`)} />
      </StyledBottomSection>
    </StyledAppContainer>
  );
}

export default App;
