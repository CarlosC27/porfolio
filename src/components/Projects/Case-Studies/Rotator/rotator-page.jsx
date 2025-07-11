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
                        <h2>Transforming a multi-disciplinary creative agency's digital presence</h2>
                        <p><b>Timeline: </b>June 2024 - August 2024</p>
                        <p><b>Project Scope:</b> {projects.at(2).projectType}</p>
                        <p><b>My Role: </b>UX/UI Desdign Intern</p>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Adobe CC</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Kendon Shaw, Lance Kagey, Adam Auter, Katie Meadows, Cari Schindler, and Tyler Sporer</p>
                       <p>{projects.at(2).description}</p>
                    </div>
                    <img src={images.rotator_hp_mockup} alt="a macbook with the Rotator Creative website homepage displayed"/>
                </section>
                <section className="the-challenge-section">
                    <h2>The Challenge</h2>
                    <p>Rotator Creative, a multi-disciplinary design agency, had been struggling to redesign their own website for over three years. Despite being incredibly talented at creating compelling digital experiences for their clients, they faced a classic "cobbler's children have no shoes" scenario.</p>
                    <h3>The core problems:</h3>
                    <ul className="core-problems-list">
                        <li className="core-problems-list"><b>Decision paralysis:</b> With an extensive portfolio spanning sculptures, websites, mobile design, murals, posters, branding, and print design, the team felt overwhelmed about which work to showcase</li>
                        <li className="core-problems-list"><b>Competing priorities:</b> Client work consistently took precedence over their own website rebuild</li>
                        <li className="core-problems-list"><b>Client work consistently took precedence over their own website rebuild:</b> Years of diverse, high-quality work made it difficult to create a cohesive story</li>
                    </ul>
                     <p><b>Evidence:</b><em>The project folder was aptly named "rotator rebuild 2021,2022,2023" - a testament to how long this had been on their wishlist.</em></p>
                </section>
                <section className="my-role-and-approach">
                    <h2>My Role and Approach</h2>
                    <p>As the UX/UI Design Intern, I took ownership of finally bringing this long-delayed project to life. Working closely with my mentor Kendon Shaw, I approached this as both a design and strategic content challenge.</p>
                    <h3>My Responsibilities</h3>
                    <ul className="my-responsibilities-list">
                        <li className="responsibility-item">Portfolio content strategy and curation</li>
                        <li className="responsibility-item">UX/UI design for responsive web experience</li>
                        <li className="responsibility-item">Interactive prototype development</li>
                        <li className="responsibility-item">Motion graphics creation and implementation</li>
                        <li className="responsibility-item">Cross-platform design system development</li>
                    </ul>
                    <h2>Process</h2>
                    <div className="phase-1">
                        <h3>Phase 1: Strategic Portfolio Curation</h3>
                        <p>Rather than trying to showcase everything, I worked with Kendon to identify work that best represented the team's diverse capabilities while maintaining quality standards.</p>
                        <h4>Selection Criteria</h4>
                        <ul className="selection-criteria-list">
                            <li className="sc-item">Projects the team was genuinely proud of</li>
                            <li className="sc-item">Work that demonstrated range across different mediums</li>
                            <li className="sc-item">Cases with strong process documentation</li>
                            <li className="sc-item">Projects with measurable impact</li>
                        </ul>
                        <h4>Final Selection:</h4>
                        <ul className="rtr-projects-list">
                            <li className="rtr-project-item">Greater Tacoma Community Foundation</li>
                            <li className="rtr-project-item">Children's Museum at JBLM</li>
                            <li className="rtr-project-item">Port of Tacoma Sculpture</li>
                            <li className="rtr-project-item">Oregon Agricultural Trust</li>
                            <li className="rtr-project-item">Grit City Magazine</li>
                            <li className="rtr-project-item">Port of Tacoma Sculpture</li>
                        </ul>
                    </div>
                    <div className="phase-2">
                        <h3>Phase 2: Process Documentation and Storytelling</h3>
                        <p>I dove deep into project archives, reviewing everything from initial proposals to final deliverables. This gave me insight into Rotator's design methodology and helped me craft authentic case study narratives.</p>
                        <h4>Key Activities</h4>
                        <ul className="phase-2-activies-list">
                            <li className="ph2-activity-item">Analyzed complete project files and iterations</li>
                            <li className="ph2-activity-item">Documented design rationale and decision-making process</li>
                            <li className="ph2-activity-item">Selected compelling visuals that showed progression from concept to completion</li>
                            <li className="ph2-activity-item">Created project-specific mockups that honored each client's branding</li>
                            <li className="ph2-activity-item">Iterated on the project narrative and visuals based on the design team's feedback and suggestions</li>
                        </ul>
                    </div>
                    <div className="phase-3">
                        <h3>Phase 3: Interactive Design and Prototyping</h3>
                        <p>Moving beyond static layouts, I designed interactive components to bring the case studies to life. Additionally, I would have design critique sessions with the design team on a weekly basis to review the progess and recieve suggestions for improvement</p>
                        <ul className="design-solutions-list">
                            <li className="ds-item">Figma prototypes for carousels and hover states</li>
                            <li className="ds-item">Responsive layouts optimized for all screen sizes</li>
                            <li className="ds-item">Custom mockups maintaining brand consistency across projects</li>
                        </ul>
                    </div>
                    <div className="phase-4">
                        <h3>Phase 4: Motion Graphics Integration</h3>
                        <div className="ph4-tx-and-img">
                            <p>When the team expressed interest in motion graphics to enhance the storytelling, <b>I took initiative to learn Adobe After Effects from scratch</b>, creating custom animations that elevated the user experience.</p>
                        </div>
                    </div>
                </section>
                <section className="solution-section">
                    <h2>Solution</h2>
                    <p>I delivered a complete website redesign featuring:</p>
                    <ul className="solutions-list">
                        <li className="solution-item"><b>6 Comprehensive Case Studies</b> - Each telling a complete story from challenge to solution to impact</li>
                        <li className="solution-item"><b>Redesigned Homepage</b> - Clear value proposition and intuitive navigation to featured work</li>
                        <li className="solution-item"><b>Enhanced About Page</b> - Better communication of team capabilities and company culture</li>
                        <li className="solution-item"><b>Interactive Elements</b> - Engaging carousels, hover states, and motion graphics</li>
                        <li className="solution-item"><b>Responsive Design System</b> - Consistent experience across all devices and screen sizes</li>
                    </ul>
                    <h2>Impact and Results</h2>
                    <ul className="impact-and-result-list">
                        <li className="iar-item"><b>Solved a 3-year roadblock:</b>Gave Rotator Creative the digital presence they deserved</li>
                        <li className="iar-item"><b>Enhanced team morale:</b>The team was genuinely excited about their new digital home</li>
                        <li className="iar-item"><b>Process documentation:</b>Created a scalable system for adding future case studies</li>
                    </ul>
                </section>
                <section className="key-learning-section">
                    <h2>Key Learnings</h2>
                    <ul className="key-learnings-list">
                        <li className="kl-item"><b>Technical Growth:</b> Learned Adobe After Effects to meet project needs, demonstrating adaptability and commitment to delivering beyond expectations.</li>
                        <li className="kl-item"><b>Content Strategy:</b> Discovered that sometimes the biggest design challenge isn't visual – it's helping clients/stakeholders make strategic decisions about what story to tell.</li>
                        <li className="kl-item"><b>Collaboration:</b> Working within an active design agency taught me how to balance creative ambition with practical constraints and client priorities.</li>
                        <li className="kl-item"><b>Systems Thinking</b> Building for a design agency meant creating something that was both polished enough to represent their capabilities and flexible enough for future updates.</li>
                    </ul>
                    <blockquote>This project reinforced my belief that great design often starts with great strategy. By helping Rotator Creative get clear on their story first, we were able to create a website that truly represents their incredible range and quality of work.</blockquote>
                </section>
            </main>
        </div>
    )
}

export default Rotator;