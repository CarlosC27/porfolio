import React from "react";
import images from "../../../../constants/images";
import projects from "../../../../constants/project-data";
import "./../case-studies.css"

const Rotator = (props) => {
    return(
        <div>
            <main className="rotator-page">
                <section className="rotator-intro">
                    <div className="rotator-intro-text">
                        <h1>Rotator Creative</h1>
                        <p><b>June 2024 - August 2024</b></p>
                        <p><b>Project Scope:</b> {projects.at(4).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Adobe CC</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Kendon Shaw, Lance Kagey, Adam Auter, Katie Meadows, Cari Schindler, and Tyler Sporer</p>
                       <p>{projects.at(4).description}</p>
                    </div>
                    <img src={images.rotator_hp_mockup} alt="a macbook with the Rotator Creative website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default Rotator;