import React from "react";
import images from "../../../../constants/images";
import projects from "../../../../constants/project-data";
import RevisemeRefactorComponent from "./Visual-Components/reviseme-refactor-component";
import RevisemeArchitectureComponent from "./Visual-Components/reviseme-architecture-component";
import RevisemeResultsComponent from "./Visual-Components/reviseme-result";
import AirplaneTextButton from "../../../airplane-text-buttons";
import "../Reviseme/reviseme.css"


const Revisime = (props) => {
 
    return(
        <div>
            <main className="revisime-page">
                <section className="revisime-intro">
                    <div className="revisime-intro-text">
                        <h1>RÉVISEMÉ</h1>
                        <h2>A rapid development sprint integrating LLM technology to solve real job market challenges</h2>
                        <div className="rv-intro-details">
                            <p><b>Timeline:</b> November 2024 - December 2024</p>
                            <p><b>Project Scope:</b> {projects.at(1).projectType}</p>
                            <p><b>My Role:</b> Full-Stack Developer & Technical Lead</p>
                        </div>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Node.js</p>
                                <p className="ts-item">MongoDB</p>
                                <p className="ts-item">Express.js</p>
                                <p className="ts-item">Perplexity API</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Olivia Sapp, Renusree Chittella, and Ayaan Rahim</p>
                       <p>{projects.at(1).description}</p>
                    </div>
                    <img src={images.rev_intro} alt="the RÉVISEMÉ website homepage displayed"/>
                </section>

                <section className="challenge-section">
                    <h2>The Challenge</h2>
                    <p>The modern job application process creates a fundamental disconnect between qualified candidates and hiring opportunities. Recent graduates possess relevant skills but lack knowledge to present qualifications in ATS-friendly formats.</p>
                    
                 

                    <div className="core-problems">
                        <h3>Core Problems We Identified:</h3>
                        <ul className="problems-list">
                            <li className="problem-item">ATS systems filter out qualified candidates before human review</li>
                            <li className="problem-item">Students lack knowledge of algorithmic parsing requirements</li>
                            <li className="problem-item">Traditional resume advice focuses on humans, not automated systems</li>
                            <li className="problem-item">No immediate feedback system for optimization</li>
                        </ul>
                    </div>
                    <blockquote className="rv-challenge-quote">
                        <em>"How might we leverage LLM technology to create immediate, intelligent feedback that helps users optimize resumes for both ATS requirements and specific job descriptions?"</em>
                    </blockquote>
                </section>

                <section className="leadership-section">
                    <h2>My Technical Leadership Role</h2>
                    <div className="leadership-content">
                        <div className="leadership-text">
                            <p>As the primary full-stack developer and technical lead, I took ownership of the complete system architecture and integration challenges. When critical bugs threatened our deliverables, I stepped up to redesign core functionality and ensure our team met deadlines.</p>
                            
                            <h3>Key Responsibilities:</h3>
                            <ul className="responsibilities-list">
                                <li className="resp-item">Backend API architecture and database design</li>
                                <li className="resp-item">LLM integration and prompt engineering</li>
                                <li className="resp-item">File upload processing and data management</li>
                                <li className="resp-item">Crisis management during the major refactor</li>
                                <li className="resp-item">Team coordination and technical decision-making</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="development-process">
                    <div className="architecture-section">
                        <h2>System Architecture & Development</h2>
                        <div className="arch-content">
                            <div className="arch-text">
                                <p>I designed an API-first architecture separating concerns while enabling efficient data flow between user authentication, file processing, LLM communication, and database management.</p>
                                
                                <h3>Core System Components:</h3>
                                <ul className="architecture-list">
                                    <li className="arch-item"><b>Backend Infrastructure:</b> Express.js server with structured endpoints for upload, analysis, and results</li>
                                    <li className="arch-item"><b>Database Design:</b> MongoDB schema linking users to resume uploads and AI analysis results</li>
                                    <li className="arch-item"><b>LLM Integration:</b> Perplexity API with custom prompt engineering for structured feedback</li>
                                    <li className="arch-item"><b>File Processing:</b> Multi-format resume parsing (PDF, Word, text)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <RevisemeArchitectureComponent/>
                </section>

                <section className="great-refactor">
                    <h2>The Great Refactor: Crisis & Solution</h2>
                    <div className="refactor-story">
                        <div className="crisis-text">
                            <h3>The Crisis</h3>
                            <p>Midway through development, we discovered a fundamental flaw: new users signing in for the first time encountered database queries for non-existent resume data, causing complete system failures.</p>
                            
                            <h3>My Solution</h3>
                            <p>I took leadership in completely refactoring the project architecture, redesigning the user flow to handle empty states gracefully while maintaining functionality for existing users.</p>
                        </div>
                    </div>

                    <RevisemeRefactorComponent/>

                    <div className="lessons-learned">
                        <h3>Critical Lessons Learned:</h3>
                        <ul className="lessons-list">
                            <li className="lesson-item">The importance of mapping complete user journeys before development</li>
                            <li className="lesson-item">Edge cases like first-time user experiences must be planned upfront</li>
                            <li className="lesson-item">Sprint timelines still require architectural planning</li>
                            <li className="lesson-item">Technical debt costs exponentially more time than proper planning</li>
                        </ul>
                    </div>
                </section>

                <section className="results-section">
                    <h2>Results & Impact</h2>
                    <div className="results-content">
                        <div className="results-text">
                            <h3>Successfully Delivered:</h3>
                            <ul className="results-list">
                                <li className="result-item">AI-powered resume analysis providing immediate, tailored feedback</li>
                                <li className="result-item">Multi-format file upload with robust processing pipeline</li>
                                <li className="result-item">User authentication and data persistence system</li>
                                <li className="result-item">Scalable API architecture ready for future enhancements</li>
                                <li className="result-item">Complete CRUD operations for saved reviews and user profiles</li>
                            </ul>
                            <AirplaneTextButton to="https://github.com/CarlosC27/Info441_Final" external={true} text="View GitHub repo" image={images.rev_pa}/>
                            <div className="impact-metrics">
                                <h3>Technical Achievements:</h3>
                                <p><b>Problem Solved:</b> Bridged the gap between student resumes and ATS requirements</p>
                                <p><b>Team Leadership:</b> Successfully managed crisis refactor while meeting sprint deadlines</p>
                                <p><b>Integration Success:</b> Seamless LLM API integration with error handling and fallbacks</p>

                            </div>
                        </div>
                    </div>
                     <RevisemeResultsComponent/>
                   
                </section>

                <section className="key-learnings">
                    <h2>Key Technical Learnings</h2>
                    <div className="rvs-ktl-div">
                        <div className="rvs-ktl-text">
                            <ul className="learnings-list">
                                <li className="learning-item"><b>Architecture Planning:</b> Complex integrations require upfront workflow and dataflow planning, regardless of sprint timelines</li>
                                <li className="learning-item"><b>LLM Integration:</b> AI services require different approaches than typical APIs - prompt engineering, response parsing, and robust fallback mechanisms are essential</li>
                                <li className="learning-item"><b>Crisis Leadership:</b> Taking ownership during critical failures and leading technical solutions under pressure built invaluable leadership skills</li>
                                <li className="learning-item"><b>Full-Stack Coordination:</b> Managing both frontend and backend simultaneously requires careful state management and comprehensive error handling</li>
                            </ul>
                        </div>
                        <img src={images.reviseme_img_card} alt="the RÉVISEMÉ website displayed on a MacBook Pro"/>
                    </div>

                   

                    <blockquote className="rv-final-quote">
                        <em>This sprint project taught me that even rapid development benefits enormously from architectural planning. The refactoring crisis became the most valuable learning experience, showing how technical leadership and problem-solving under pressure can save entire projects.</em>
                    </blockquote>
                </section>
            </main>
        </div>
    )
}

export default Revisime;