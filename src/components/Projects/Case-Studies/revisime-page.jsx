import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const Revisime = (props) => {
    return(
        <div>
            <main className="revisime-page">
                <section className="revisime-intro">
                    <div className="revisime-intro-text">
                        <h1>RÉVISEMÉ</h1>
                        <p><b>November 2024 - December 2024</b></p>
                        <p><b>Project Scope:</b> {projects.at(3).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Node.js</p>
                                <p className="ts-item">MongoDB</p>
                                <p className="ts-item">Express.js</p>
                                <p className="ts-item">Perplexity API</p>
                            </div>
                        </div>
                        <p><b>Collaborators: Olivia Sapp, Renusree Chittella, and Ayaan Rahim</b> </p>
                       <p>{projects.at(3).description}</p>
                    </div>
                    <img src={images.reviseme_mockup} alt="a macbook with the Rotator Creative website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default Revisime;