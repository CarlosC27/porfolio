import React from "react";
import images from "../../../../constants/images";
import projects from "../../../../constants/project-data";
import "./husky-fitness.css";

const HuskyFitness = (props) => {

    // Placeholder arrays for future images
    const userResearchImages = []; // Survey results, user interviews, research insights
    const personaImages = []; // User personas: Austin, Genesis, Sebastian
    const wireframeEvolution = []; // Low-fi to high-fi wireframe progression
    const designSystemImages = []; // UI components, color palette, typography
    const prototypeScreenshots = []; // Final app screens and user flows

    return(
        <div>
            <main className="hf-page">
                <section className="hf-intro">
                    <div className="hf-intro-text">
                        <h1>Husky Fitness</h1>
                        <h2>Transforming the University of Washington's gym experience through comprehensive UX design</h2>
                        <div className="hf-intro-details">
                            <p><b>Timeline:</b> April 2023 - June 2023 (10 weeks)</p>
                            <p><b>Project Scope:</b> {projects.at(4).projectType}</p>
                            <p><b>My Role:</b> Product Manager & Lead UX/UI Designer</p>
                        </div>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Adobe CC</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Mariama Diallo, Jesiah Guadiz-Macadangdang, and Max Marchand</p>
                        <p>{projects.at(4).description}</p>
                    </div>
                    <img src={images.huskyFitness_hp_mockup} alt="an iphone with the Husky Fitness app homepage displayed"/>
                </section>

                <section className="challenge-section">
                    <h2>The Challenge</h2>
                    <p>The University of Washington's IMA represents a significant investment in student wellness, included in every student's tuition. However, thousands of students were avoiding their included fitness facility due to overcrowding, lack of guidance, and overwhelming anxiety about proper workout techniques.</p>
                    
                    <div className="challenge-visual-placeholder">
                        {/* Visual: Problem illustration - gym overcrowding, student frustration stats */}
                        <div className="visual-placeholder">
                            <p>📊 Visual: IMA Usage Statistics & Student Pain Points</p>
                        </div>
                    </div>

                    <div className="core-problems">
                        <h3>Key Problems We Discovered:</h3>
                        <ul className="problems-list">
                            <li className="problem-item">Students felt intimidated and overwhelmed by gym culture and equipment</li>
                            <li className="problem-item">Facility overcrowding led to frustration and abandoned workout plans</li>
                            <li className="problem-item">Lack of accessible fitness guidance for beginners</li>
                            <li className="problem-item">No way to plan workouts around facility capacity and personal schedules</li>
                        </ul>
                    </div>
                    <blockquote className="hf-challenge-quote">
                        <em>"How might we create a digital experience that empowers students of all fitness levels to confidently and effectively use the IMA while optimizing facility operations?"</em>
                    </blockquote>
                </section>

                <section className="leadership-section">
                    <h2>My Dual Leadership Role & Research Process</h2>
                    <div className="leadership-content">
                        <div className="leadership-text">
                            <p>Taking on dual responsibilities as both Product Manager and Lead Designer, I guided our team through the complete product development lifecycle while creating all visual design elements and interactive prototypes.</p>
                            
                            <h3>My Key Responsibilities:</h3>
                            <ul className="responsibilities-list">
                                <li className="resp-item">Product strategy and team coordination across 10-week timeline</li>
                                <li className="resp-item">Complete visual design system and UI component development</li>
                                <li className="resp-item">User research analysis and persona development</li>
                                <li className="resp-item">Interactive prototyping and usability testing coordination</li>
                                <li className="resp-item">Feature prioritization and design decision leadership</li>
                            </ul>

                            <h3>Research Approach:</h3>
                            <p>We conducted comprehensive surveys with 18 current and former UW students, plus stakeholder interviews with both IMA users and employees. This revealed not just surface frustrations about crowded facilities, but deeper emotional and systemic barriers to fitness success.</p>
                        </div>
                        
                        <div class="research-visual-placeholder">
                            {/* Visual: Research process, survey insights, interview highlights */}
                            <div className="visual-placeholder">
                                <p>🔍 Visual: User Research Process & Key Insights</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="user-insights-section">
                    <div className="personas-section">
                        <h2>User Insights & Strategic Direction</h2>
                        <div className="personas-content">
                            <div className="personas-text">
                                <p>Based on our research, I developed three detailed personas representing the spectrum of IMA users, each highlighting different aspects of the challenges we needed to address.</p>
                                
                                <h3>Our Three Key Personas:</h3>
                                <ul className="personas-list">
                                    <li className="persona-item"><b>Austin Smith - "Motivated Beginner":</b> 19-year-old desperately wanting to establish a routine but overwhelmed by gym culture and technique uncertainty</li>
                                    <li className="persona-item"><b>Genesis Swift - "Time-Constrained Achiever":</b> 21-year-old senior juggling academic demands with fitness goals, needing scheduling optimization</li>
                                    <li className="persona-item"><b>Sebastian Gomez - "Helpful Expert":</b> 20-year-old sports medicine student and IMA employee struggling to help all users while managing facility operations</li>
                                </ul>
                            </div>
                            
                            <div className="personas-visual-placeholder">
                                {/* Visual: User personas with photos, goals, pain points */}
                                <div className="visual-placeholder">
                                    <p>👥 Visual: Detailed User Personas & Journey Maps</p>
                                </div>
                            </div>
                        </div>

                        <div className="strategy-decision">
                            <h3>Strategic Solution Direction</h3>
                            <p>Our analysis revealed that partial solutions would fail to address the interconnected nature of user challenges. Students needed comprehensive support for planning, learning, and executing fitness routines—leading us to pursue a complete mobile application ecosystem.</p>
                        </div>
                    </div>
                </section>

                <section className="design-process">
                    <h2>Design Process & Evolution</h2>
                    <div className="design-content">
                        <div className="design-text">
                            <h3>Core Feature Architecture:</h3>
                            <ul className="features-list">
                                <li className="feature-item"><b>Real-time Traffic Monitoring:</b> Live facility capacity updates to eliminate frustrating equipment unavailability</li>
                                <li className="feature-item"><b>Comprehensive Workout Library:</b> Visual exercise demonstrations with equipment requirements and muscle group targeting</li>
                                <li className="feature-item"><b>Smart Scheduling Integration:</b> Personalized workout time recommendations using UW NetID and facility data</li>
                                <li className="feature-item"><b>Direct Trainer Communication:</b> Messaging system connecting students with IMA staff for guidance and support</li>
                            </ul>

                            <h3>Design System Decisions:</h3>
                            <p>I leveraged University of Washington's existing branding while creating an approachable, anxiety-reducing aesthetic. The pastel purple background provided calming contrast to traditional UW colors, while maintaining brand familiarity that would increase user trust and adoption.</p>
                        </div>
                        
                        <div className="design-visual-placeholder">
                            {/* Visual: Design system components, color palette, typography */}
                            <div className="visual-placeholder">
                                <p>🎨 Visual: Design System & UI Components</p>
                            </div>
                        </div>
                    </div>

                    <div className="wireframe-evolution-visual">
                        {/* Visual: Wireframe progression from sketches to high-fidelity */}
                        <div className="visual-placeholder">
                            <p>📱 Visual: Wireframe Evolution - Sketches to High-Fidelity</p>
                        </div>
                    </div>

                    <div className="key-design-decisions">
                        <h3>Critical Design Decisions:</h3>
                        <ul className="decisions-list">
                            <li className="decision-item">Replaced pop-up windows with bottom sheets to reduce user errors and improve flow</li>
                            <li className="decision-item">Simplified progress tracking with ratio displays (e.g., "1,989/2,500 steps") for clearer goal communication</li>
                            <li className="decision-item">Implemented high contrast ratios and large touch targets for accessibility in gym environments</li>
                            <li className="decision-item">Created modular component system to accommodate diverse content types and user scenarios</li>
                        </ul>
                    </div>
                </section>

                <section className="results-section">
                    <h2>Results & Impact</h2>
                    <div className="results-content">
                        <div className="results-text">
                            <h3>Successfully Delivered:</h3>
                            <ul className="results-list">
                                <li className="result-item">Complete mobile app prototype addressing all major user pain points</li>
                                <li className="result-item">Comprehensive design system with UW branding integration</li>
                                <li className="result-item">Interactive prototype demonstrating full user journeys</li>
                                <li className="result-item">Validated solution framework for ongoing IMA operational improvements</li>
                                <li className="result-item">Feature architecture ready for university IT system integration</li>
                            </ul>

                            <div className="impact-metrics">
                                <h3>Key Achievements:</h3>
                                <p><b>User Validation:</b> Strong positive response to core features, especially real-time traffic monitoring and integrated workout guidance</p>
                                <p><b>Design Impact:</b> Successfully balanced university branding requirements with approachable, anxiety-reducing aesthetics</p>
                                <p><b>Strategic Success:</b> Demonstrated comprehensive approach to complex operational challenges affecting student wellness</p>
                            </div>
                        </div>

                        <div className="final-product-visual">
                            {/* Visual: Final app screenshots, user interface flows */}
                            <div className="visual-placeholder">
                                <p>📱 Visual: Final App Screens & User Interface</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="key-learnings">
                    <h2>Key Learnings & Reflections</h2>
                    <ul className="learnings-list">
                        <li className="learning-item"><b>Dual Role Leadership:</b> Managing both product strategy and design execution provided invaluable insights into how strategic thinking and design craft must work together to create meaningful solutions</li>
                        <li className="learning-item"><b>Research-Driven Design:</b> Comprehensive user research directly impacted design confidence and effectiveness—quality persona development based on real interviews guided every subsequent design choice</li>
                        <li className="learning-item"><b>Accessibility Integration:</b> Designing for diverse user contexts (gym environments, varying technical comfort, physical abilities) strengthened overall solution usability</li>
                        <li className="learning-item"><b>Iterative Prototyping:</b> Moving from low-fidelity to interactive prototypes revealed crucial usability insights that static wireframes couldn't capture</li>
                    </ul>

                    <div className="prototype-examples-visual">
                        {/* Visual: Prototype screenshots, interaction examples */}
                        <div className="visual-placeholder">
                            <p>🔄 Visual: Interactive Prototype & User Testing Results</p>
                        </div>
                    </div>

                    <div className="future-opportunities">
                        <h3>Future Enhancement Opportunities:</h3>
                        <p>The foundation we established creates numerous opportunities for expansion: wearable device integration, social workout communities, gamification elements, and extension to other university recreational facilities. Each builds on our core infrastructure while addressing additional user needs revealed through ongoing research.</p>
                    </div>

                    <blockquote className="hf-final-quote">
                        <em>This project demonstrated how thoughtful UX research and design can transform everyday experiences that significantly impact student wellness and academic success. The dual role of product management and design leadership provided crucial insights into creating user-centered solutions for complex, interconnected challenges.</em>
                    </blockquote>
                </section>
            </main>
        </div>
    )
}

export default HuskyFitness;