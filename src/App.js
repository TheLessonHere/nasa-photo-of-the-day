import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title, CurrentDate, Description, ImgContainer } from "./APIobjectdata/index"
import { dateButtonL, dateButtonR } from "./dateButtons/index"

import "./App.css";

function App() {

  const [titleState, setTitleState] = useState("Angry Sun Erupting")
  const [dateState, setDateState] = useState('2012-03-14')
  const [descriptionState, setDescriptionState] = useState("It's one of the baddest sunspot regions in years. Active Region 1429 may not only look, to some, like an angry bird -- it has thrown off some of the most powerful flares and coronal mass ejections of the current solar cycle. The extended plumes from these explosions have even rained particles on the Earth's magnetosphere that have resulted in colorful auroras. Pictured above, AR 1429 was captured in great detail in the Sun's chromosphere three days ago by isolating a color of light emitted primarily by hydrogen. The resulting image is shown in inverted false color with dark regions being the brightest and hottest. Giant magnetically-channeled tubes of hot gas, some longer than the Earth, are known as spicules and can be seen carpeting the chromosphere. The light tendril just above AR 1429 is a cool filament hovering just over the active sunspot region. As solar maximum nears in the next few years, the increasingly wound and twisted magnetic field of the Sun may create even more furious active regions that chirp even more energetic puffs of solar plasma into our Solar System.   Gallery: See images of the latest planetary conjunction")
  const [imageURLState, setImageURLState] = useState("https://apod.nasa.gov/apod/image/1203/angrysun_friedman_960.jpg")

  useEffect(() => {
    console.log('Hello')
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateState}`)
      .then((response) => {
        console.log('Response', response);
        setTitleState(response.data.title);
        setDateState(response.data.date);
        setDescriptionState(response.data.explanation);
        setImageURLState(response.data.url);
      })
      .catch((error) => {
        console.log('Data not available');
      })

  }, [dateState])

  return (
    <div className="App">
      <div className="top-section">
      <Title props={titleState} />
      <ImgContainer props={imageURLState} />
      </div>
      <div className="bottom-section">
      <CurrentDate props={dateState} />
      <Description props={descriptionState} />
      </div>
    </div>
  );
}

export default App;
