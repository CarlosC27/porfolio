import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const TheCityBetween = (props) => {
    return(
        <div>
            <main className="tcb-page">
                <section className="tcb-intro">
                    <div className="tcb-intro-text">
                        <h1>The City Between Article</h1>
                        <p><b>July 2024 - August 2024</b></p>
                        <p><b>Project Scope:</b> {projects.at(5).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">InDesign</p>
                                <p className="ts-item">Photoshop</p>
                                <p className="ts-item">Illustrator</p>
                                <p className="ts-item">Figma</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Sierra Hartman, Katie Meadows, Adam Auter, and Cari Schindler</p>
                       <p>{projects.at(5).description}</p>
                    </div>
                    <img src={images.cityBtwn_mockup} alt="a macbook with the Rotator Creative website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default TheCityBetween;