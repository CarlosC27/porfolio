import React from "react";
import Rtrtimgs from "../../../../constants/rotator-imgs";
import "./../Rotator/rotator.css"

const OregonCityAnimation = () => {
    return(
        <div className="oregon-city-animation">
            <video autoPlay loop muted playsInline className="oregon-city-video">
                <source src={Rtrtimgs.oregon_city} type="video/mp4"/>
                <p>Your browser doesn't support video playback.</p>
            </video>
        </div>
    )
}

export default OregonCityAnimation;