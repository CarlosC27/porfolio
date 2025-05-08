import React from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import "./case-studies.css"

const Aegeliss = (props) => {
    return(
        <div>
            <main className="aegeliss-page">
                <section className="aegeliss-intro">
                    <div className="aegeliss-intro-text">
                        <h1>Aegeliss</h1>
                        <p><b>January 2025 - Present</b></p>
                        <p><b>Project Scope:</b> {projects.at(0).projectType}</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">CSS</p>
                                <p className="ts-item">Shopify</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Ju Tu, Kayla Tounalom, Anushka Verma, June Mi Hong, and Hung Tran</p>
                       <p>{projects.at(0).description}</p>
                    </div>
                    <img src={images.aegeliss_hp_mockup} alt="an iMac with the Aegeliss website homepage displayed"/>
                </section>
            </main>
        </div>
    )
}

export default Aegeliss;