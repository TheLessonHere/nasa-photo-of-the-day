import React from "react";

const ImgContainer = props => {
    return (
    <div className="img-container">
        <img src={`${props.url}`} alt="NASA APOD"/>
    </div>
    )
}

export default ImgContainer;