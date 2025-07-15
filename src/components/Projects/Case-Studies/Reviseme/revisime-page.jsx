import React from "react";
import images from "../../../../constants/images";
import projects from "../../../../constants/project-data";
import "./../case-studies.css"

const Revisime = (props) => {
    return(
        <div>
            <main className="revisime-page">
                <section className="revisime-intro">
                    <div className="revisime-intro-text">
                        <h1>RÉVISEMÉ</h1>
                        <h2>A rapid development sprint integrating LLM technology to solve real job market challenges</h2>
                        <p><b>Timeline</b>: 6 weeks, November 2024 - December 2024</p>
                        <p><b>Project Scope:</b> {projects.at(1).projectType}</p>
                        <p><b>My Role</b>: Full-Stack Developer & Technical Lead</p>
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
                       <h3>TL:DR</h3>
                       <p>As college seniors facing the competitive job market, my team and I recognized a critical gap between the resumes students create and what actually passes through Applicant Tracking Systems (ATS). RÉVISEMÉ emerged from our shared frustration with the "black box" of resume screening, too many qualified candidates never reach human recruiters due to poorly optimized resumes.
                        <br></br>In this rapid development sprint, I took on the challenge of building a full-stack AI-powered platform that provides immediate, tailored resume feedback using large language model integration. This project tested my ability to rapidly prototype, integrate complex APIs, and solve critical technical architecture challenges under tight deadlines.</p>
                    </div>
                    <img src={images.reviseme_mockup} alt="a macbook with the RÉVISEMÉ website homepage displayed"/>
                </section>
                <section className="challenge-section">
                    <h2>The Challenge</h2>
                    <div>
                        <p>The modern job application process creates a fundamental disconnect between qualified candidates and hiring opportunities. Applicant Tracking Systems filter out resumes before human review, often eliminating strong candidates whose resumes simply don't match algorithmic parsing requirements or contain the right keywords for specific roles.</p>
                        <p>Our research revealed that recent graduates and career changers face particular challenges in this system. They possess relevant skills and experience but lack the knowledge to present their qualifications in ATS-friendly formats. Traditional resume advice often focuses on human readers rather than the automated systems that determine whether resumes ever reach human eyes.</p>
                        <p><b>Technical Challenge</b>: <em>How might we leverage LLM technology to create an immediate, intelligent feedback system that helps users optimize their resumes for both ATS requirements and specific job descriptions?</em></p>
                        <p>This challenge required solving complex technical problems around file upload processing, AI integration, user data management, and real-time feedback delivery, all within a sprint timeline that prioritized rapid iteration over extensive design research.</p>
                    </div>
                    
                </section>
                <section className="role-and-responsibilities-section">
                    <h2>My Role & Technical Responsibilities</h2>
                    <div>
                        <p>As the primary full-stack developer and technical lead, my responsibilities centered around ensuring seamless integration between our frontend interface, backend API architecture, and external LLM services. This role required constant problem-solving as we discovered architectural challenges that threatened core functionality.</p>
                        <p>My primary focus became building robust backend systems that could handle file uploads, process resume content through AI analysis, and manage user data persistence across sessions. The frontend integration work proved equally challenging, requiring careful state management to ensure users could smoothly navigate between resume upload, AI feedback, and result saving workflows.</p>
                        <p>The rapid sprint timeline meant making real-time technical decisions without extensive planning, leading to several critical learning moments about the importance of architectural foresight in complex integrations.</p>
                    </div>
                </section>
                <section className="team-collaboration-section">
                    <h2>Team Collaboration and Sprint Dynamics</h2>
                    <div>
                        <p>Working with Renusree Chittella, Ayaan Rahim, and Olivia Sapp, we divided responsibilities across the full technology stack while maintaining close collaboration on integration points. The sprint format required daily coordination to ensure individual components worked together seamlessly.</p>
                        <p>Our team dynamic emphasized rapid prototyping and frequent testing, with each member taking ownership of specific technical domains while remaining flexible enough to support integration challenges as they emerged. This collaborative approach proved essential when we encountered fundamental architectural issues that required complete project refactoring.</p>
                    </div>
                </section>
                <section className="architecture-and-developement-section">
                    <h2>Technical Architecture and Development Approach</h2>
                    <div>
                        <div>
                            <h3>Core System Design:</h3>
                            <p>The RÉVISEMÉ platform required integrating multiple complex systems: user authentication, file upload processing, LLM API communication, database management, and real-time result delivery. I designed an API-first architecture that separated concerns while enabling efficient data flow between components.</p>
                        </div>
                        <div>
                            <h3>Backend Infrastructure:</h3>
                            <p>I built the server architecture around Express.js with carefully designed endpoints for each major function: resume upload (api/upload-resume), AI analysis submission (api/submit-review), result retrieval (api/review-results/id), and user data management. Each endpoint needed to handle different data types and processing requirements while maintaining consistent error handling and user feedback.</p>
                            <p>The database design required balancing immediate analysis needs with long-term storage for users who wanted to save multiple resume versions and feedback sessions. I implemented a relational structure that linked user accounts to resume uploads and AI analysis results, enabling both immediate feedback and historical access.</p>
                        </div>
                        <div>
                            <h3>LLM Integration Strategy:</h3>
                            <p>Integrating large language model APIs presented unique challenges around prompt engineering, response formatting, and error handling. We developed a system that could send structured resume data and job description requirements to the LLM while parsing responses into actionable feedback categories: ATS compliance, keyword optimization, structural improvements, and role-specific recommendations.</p>
                            <p>The AI integration required careful prompt design to ensure consistent, useful feedback across different resume formats and job types. We implemented fallback mechanisms for API failures and response validation to maintain system reliability even when external services experienced issues.</p>
                        </div>
                    </div>
                </section>
                <section className="challenges-and-solutions">
                    <h2>Critical Technical Challenges and Solutions</h2>
                    <div>
                        <div>
                            <h3>The Great Refactor: Learning from Architectural Mistakes</h3>
                            <p>Midway through development, we encountered a fundamental flaw in our initial approach that threatened the entire project's viability. Our original workflow assumed users would always have existing data when accessing their dashboard, but new users signing in for the first time encountered database queries for non-existent resume data, causing system failures.</p>
                            <p>This discovery forced me to completely refactor the project architecture, redesigning the user flow to handle empty states gracefully while maintaining functionality for users with existing data. The experience taught me crucial lessons about the importance of mapping complete user journeys before beginning development, particularly around edge cases like first-time user experiences.</p>
                        </div>
                        <div>
                            <h3>Database State Management:</h3>
                            <p>The refactoring process required reimagining how we handled user state across the application. I implemented conditional rendering and error handling that could gracefully manage users with no saved resumes, users in the middle of analysis processes, and users with extensive historical data.</p>
                            <p>This challenge highlighted the critical importance of creating workflow and dataflow diagrams before development begins. The sprint timeline had encouraged us to begin coding immediately, but the refactoring cost far more time than proper planning would have required.</p>
                        </div>
                        <div>
                            <h3>File Upload & Processing Pipeline:</h3>
                            <p>Building reliable file upload functionality required handling multiple resume formats (PDF, Word, plain text) while extracting usable content for AI analysis. I developed a processing pipeline that could parse different document types, extract text content, and format the data appropriately for LLM consumption.</p>
                            <p>The system needed to handle file size limitations, format validation, and extraction errors while providing clear feedback to users about any issues. I implemented progressive feedback states so users understood what was happening during processing rather than facing unexplained delays.</p>
                        </div>
                    </div>
                </section>
                <section className="api-dev-section">
                    <h2>API Development & Integration Management</h2>
                    <div>
                        <div>
                            <h3>Comprehensive Endpoint Architecture:</h3>
                            <p>Building the complete API required careful planning around data flow and user authentication requirements. I developed endpoints that handled everything from basic user registration (api/auth/register) to complex resume analysis workflows (api/submit-review) while maintaining consistent error handling and response formatting.</p>
                            <p>Each endpoint needed to validate input data, handle authentication requirements, and provide meaningful error messages when problems occurred. The job categories endpoint (api/job-categories) required maintaining current data about different role types while allowing for future expansion as we learned more about user needs.</p>
                        </div>
                        <div>
                            <h3>Database Integration & Data Persistence:</h3>
                            <p>The saved reviews functionality (api/saved-reviews, api/save-review, api/delete-review/id) required implementing complete CRUD operations while maintaining data relationships between users, resumes, and analysis results. I designed the database schema to support multiple resume versions per user while enabling efficient queries for dashboard displays.</p>
                            <p>User profile management (api/user/profile) needed to balance security requirements with useful functionality, ensuring users could access their data while protecting privacy and preventing unauthorized access.</p>
                        </div>
                    </div>
                </section>
                <section className="sprint-section">
                    <h2>Sprint Methodology and Rapid Iteration</h2>
                    <div>
                        <div>
                            <h3>Agile Development Under Pressure:</h3>
                            <p>The sprint timeline required making technical decisions quickly while remaining flexible enough to pivot when challenges emerged. This experience taught me valuable lessons about balancing speed with sustainability, particularly around the importance of upfront architectural planning.</p>
                            <p>Our daily standups focused on integration points and blocking issues, with frequent testing to ensure individual components worked together effectively. The rapid iteration cycle meant deploying changes frequently and gathering immediate feedback about functionality and user experience.</p>
                        </div>
                        <div>
                            <h3>Technical Debt & Learning Opportunities:</h3>
                            <p>The sprint format inevitably created technical debt that we had to address through the refactoring process. This experience provided valuable insights into the long-term costs of rushed architectural decisions and the importance of building scalable foundations even under tight deadlines.</p>
                            <p>Working through these challenges reinforced the value of test-driven development and comprehensive error handling, particularly when integrating external APIs that might fail or return unexpected responses.</p>
                        </div>
                    </div>
                </section>
                <section className="results-and-achievements">
                    <h2>Results and Technical Achievements</h2>
                    <div>
                        <div>
                            <h3>Successful LLM Integration:</h3>
                            <p>The completed platform successfully demonstrates the potential for AI-powered resume analysis, providing users with immediate, tailored feedback that addresses both ATS requirements and role-specific optimization. The LLM integration produces relevant, actionable recommendations that users can implement immediately.</p>
                            <p>Users can upload resumes in multiple formats, receive categorized feedback addressing different improvement areas, and save results for future reference. The system handles edge cases gracefully while maintaining good performance even during complex AI analysis operations.</p>
                        </div>
                        <div>
                            <h3>Scalable Architecture Foundation:</h3>
                            <p>Despite the sprint timeline, the final architecture provides a solid foundation for future enhancement and feature development. The API-first design enables easy integration of additional functionality, while the database structure supports expanding user needs and analysis capabilities.</p>
                            <p>The authentication system and user data management create opportunities for more sophisticated features like progress tracking, collaborative editing, or integration with job application platforms.</p>
                        </div>
                    </div>
                </section>
                <section className="key-learning">
                    <h2>Key Technical Learnings</h2>
                    <div>
                        <div>
                            <h3>Architecture Planning Importance:</h3>
                            <p>The refactoring experience provided invaluable lessons about the critical importance of workflow and dataflow planning before beginning development. While sprint methodologies encourage rapid iteration, complex integrations require upfront architectural thinking to avoid fundamental design flaws.</p>
                            <p>Creating detailed user journey maps and data flow diagrams early in the process would have prevented the major refactoring crisis and resulted in more sustainable code from the beginning. This learning will inform all future technical projects, regardless of timeline constraints.</p>
                        </div>
                        <div>
                            <h3>LLM Integration Complexity:</h3>
                            <p>Working with large language model APIs taught me about the unique challenges of integrating AI services into traditional web applications. Prompt engineering, response parsing, and error handling for AI services require different approaches than typical API integrations.</p>
                            <p>The experience highlighted the importance of building robust fallback mechanisms and user feedback systems when working with AI services that might produce unexpected results or experience service interruptions.</p>
                        </div>
                        <div>
                            <h3>Full-Stack Development Coordination:</h3>
                            <p>Managing both frontend and backend development simultaneously required careful attention to state management and data synchronization. The experience reinforced the value of clear API contracts and comprehensive error handling to ensure smooth user experiences even when backend processes encounter issues.</p>
                        </div>
                    </div>
                </section>
                <section className="opportunities-section">
                    <h2>Future Enhancement Opportunities</h2>
                    <div>
                        <div>
                            <h3>Advanced AI Capabilities:</h3>
                            <p>The current LLM integration provides a foundation for more sophisticated AI features, including industry-specific analysis, salary negotiation advice, or interview preparation recommendations based on resume content and target roles.</p>
                            <p>Real-time collaborative editing features could enable career counselors or mentors to provide guidance while users refine their resumes, creating new opportunities for professional development support.</p>
                        </div>
                        <div>
                            <h3>Integration Expansion:</h3>
                            <p>The API architecture supports integration with job posting platforms, enabling automatic resume optimization for specific opportunities. Connection with applicant tracking systems could provide real-time feedback about how resumes perform in actual screening processes.</p>
                        </div>
                        <div>
                            <h3>User Experience Enhancement:</h3>
                            <p>Future iterations could include more sophisticated progress tracking, comparative analysis between resume versions, and community features that allow users to share successful optimization strategies.</p>
                        </div>
                    </div>
                </section>
                <section className="reflection-section">
                    <h2>Reflection and Growth</h2>
                    <p>This sprint project provided crucial experience in rapid full-stack development under realistic constraints, highlighting both the possibilities and pitfalls of accelerated development timelines. The refactoring crisis became one of the most valuable learning experiences, demonstrating how architectural shortcuts create exponentially larger problems down the line.</p>
                    <p>The successful LLM integration showed me the potential for AI-enhanced applications while revealing the complexity of building reliable systems around rapidly evolving AI technologies. Managing both technical implementation and user experience considerations simultaneously deepened my appreciation for the intersection between backend architecture and frontend usability.</p>
                    <p>Most importantly, this project reinforced that even sprint-style development benefits enormously from upfront planning around user workflows and data relationships. The time saved by jumping directly into coding was more than lost in the refactoring process, providing a lasting lesson about sustainable development practices.</p>
                    <h3>Technical Growth Areas:</h3>
                    <p>Working through complex API integrations, database design challenges, and AI service integration expanded my technical capabilities while highlighting areas for continued growth in system architecture and scalable design patterns.</p>
                    <p>The experience of leading technical decision-making under pressure provided valuable insights into balancing rapid iteration with long-term maintainability, skills that will be essential in professional development environments.</p>
                    <blockquote>RÉVISEMÉ demonstrated how emerging technologies like LLMs can address real-world problems when integrated thoughtfully into well-designed technical architectures. The project's challenges and successes provided invaluable lessons about full-stack development, AI integration, and the critical importance of architectural planning in complex technical projects.</blockquote>
                </section>
            </main>
        </div>
    )
}

export default Revisime;