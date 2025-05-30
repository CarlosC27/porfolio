import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const HuskyFitness = (props) => {
    return(
        <div>
            <main className="hf-page">
                <section className="hf-intro">
                    <div className="hf-intro-text">
                        <h1>Husky Fitness</h1>
                        <p><b>April 2023 - June 2023</b></p>
                        <p><b>Project Scope:</b> {projects.at(7).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Adobe CC</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b>  Mariama Diallo, Jesiah Guadiz-Macadangdang, and Max Marchand</p>
                       <p>{projects.at(7).description}</p>
                    </div>
                    <img src={images.huskyFitness_hp_mockup} alt="an iphone with the Husky Fitness app homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default HuskyFitness;