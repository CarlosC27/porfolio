import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const ViableVegansim = (props) => {
    return(
        <div>
            <main className="vv-page">
                <section className="vv-intro">
                    <div className="vv-intro-text">
                        <h1>Viable Veganism</h1>
                        <p><b>January 2024 - June 2024</b></p>
                        <p><b>Project Scope:</b> {projects.at(6).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Adobe CC</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b>  Hong An Nguyen, Chelsea Li, and Riya Prasad</p>
                       <p>{projects.at(6).description}</p>
                    </div>
                    <img src={images.viableVeganism_hp_mockup} alt="a macbook with the Viable Veganism website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default ViableVegansim;