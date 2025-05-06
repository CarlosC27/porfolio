import React from "react";
import AirplaneTextButton from "./airplane-text-buttons";
import images from "../constants/images";

const Construction = () => {
    return(
        <div>
            <main className="constrction-page-content">
                <section className="construction-page">
                    <img src={images.labubus_desk} alt="polaroid of Carlos's collection of Labubus on his desk with programming books and apple pencils" className="construction-img"/>
                    <div>
                        <h1 className="construction-title">Oooops!</h1>
                        <p className="contruction-p">
                            The Labubu crew has taken over this page for coding practice! <br/>Come back soon to see their work 🤩
                        </p>
                        <AirplaneTextButton to="/" text="Go to Homepage" image={images.green_pa}/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Construction