import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const Coast2Coast = (props) => {
    return(
        <div>
            <main className="c2c-page">
                <section className="c2c-intro">
                    <div className="c2c-intro-text">
                        <h1>Coast 2 Coasts Cousins BBQ</h1>
                        <p><b>June 2024 - January 2025</b></p>
                        <p><b>Project Scope:</b> {projects.at(1).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">React</p>
                                <p className="ts-item">JavaScript</p>
                                <p className="ts-item">HTML</p>
                                <p className="ts-item">CSS</p>
                                <p className="ts-item">Figma</p>
                            </div>
                        </div>
                       <p>{projects.at(1).description}</p>
                    </div>
                    <img src={images.c2cccbbq_hp_mockup} alt="a macbook with the Rotator Creative website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default Coast2Coast;