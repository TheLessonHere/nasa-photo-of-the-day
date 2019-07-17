import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title, CurrentDate, Description, ImgContainer } from "./APIobjectdata/index"
import { DateButtonL, DateButtonR } from "./dateButtons/index"

import "./App.css";

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

  return (
    <div className="App">
      <div className="top-section">
        <Title title={currentObj.title} />
        <ImgContainer url={currentObj.url} />
      </div>
      <div className="bottom-section">
        <DateButtonL handler={() => setDateState('2012-03-13')} />
        <div className="bottom-text">
          <CurrentDate date={dateState} />
          <Description explanation={currentObj.explanation} />
        </div>
        <DateButtonR handler={() => setDateState('2012-03-15')} />
      </div>
    </div>
  );
}

export default App;
