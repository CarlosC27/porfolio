import React, { useState, useEffect } from 'react';
import './reviseme-architecture.css';

const RevisemeArchitectureComponent = () => {
    const [highlightAnimation, setHighlightAnimation] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightAnimation(true);
            setTimeout(() => setHighlightAnimation(false), 500);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleComponentClick = (tooltip) => {
        if (tooltip) {
            alert(tooltip);
        }
    };

    return (
        <div className="reviseme-architecture">
            <h2 className="architecture-title">RÉVISEMÉ System Architecture</h2>
            
            <div className="architecture-grid">
                {/* Frontend Layer */}
                <div className="layer frontend">
                    <div className="layer-title">Frontend Layer</div>
                    <div 
                        className="component" 
                        onClick={() => handleComponentClick("User authentication and profile management")}
                    >
                        <strong>Authentication Pages</strong><br />
                        <small>log-in-page.html, register-page.html</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Main user dashboard and navigation")}
                    >
                        <strong>Dashboard</strong><br />
                        <small>homepage.html, profile-page.html</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Resume upload and review interface")}
                    >
                        <strong>Resume Interface</strong><br />
                        <small>upload-new-resume.html</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Dynamic popup management for complex workflows")}
                    >
                        <strong>Interactive Popups</strong><br />
                        <small>Resume upload, Review options</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Client-side state management and API calls")}
                    >
                        <strong>JavaScript Controllers</strong><br />
                        <small>Session handling, Form validation</small>
                    </div>
                </div>

                {/* Backend Layer */}
                <div className="layer backend">
                    <div className="layer-title">Backend Layer</div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Express.js server with middleware")}
                    >
                        <strong>Express Server</strong><br />
                        <small>app.js with session management</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Microsoft OAuth authentication flow")}
                    >
                        <strong>Authentication Service</strong><br />
                        <small>MSAL wrapper integration</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("RESTful API endpoints")}
                    >
                        <strong>API Routes</strong><br />
                        <small>/api/user, /api/resumes</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Resume processing and LLM communication")}
                    >
                        <strong>Resume Processing</strong><br />
                        <small>File upload, Text extraction</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Database models and schemas")}
                    >
                        <strong>Data Models</strong><br />
                        <small>User, Resume, Reviews</small>
                    </div>
                </div>

                {/* External Services */}
                <div className="layer external">
                    <div className="layer-title">External Services</div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Cloud database for data persistence")}
                    >
                        <strong>MongoDB Atlas</strong><br />
                        <small>User data, Resumes, Reviews</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Enterprise authentication provider")}
                    >
                        <strong>Microsoft OAuth</strong><br />
                        <small>User authentication & authorization</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Large Language Model API for resume analysis")}
                    >
                        <strong>Perplexity LLM</strong><br />
                        <small>llama-3.1-sonar-large-128k-online</small>
                    </div>
                    <div 
                        className="component"
                        onClick={() => handleComponentClick("Session storage and user state")}
                    >
                        <strong>Session Management</strong><br />
                        <small>Express sessions, Cookies</small>
                    </div>
                </div>
            </div>

            <div className="tech-stack">
                <h3>Technology Stack</h3>
                <div className="tech-grid">
                    <div className="tech-item">Node.js</div>
                    <div className="tech-item">Express.js</div>
                    <div className="tech-item">MongoDB</div>
                    <div className="tech-item">Perplexity API</div>
                    <div className="tech-item">Microsoft MSAL</div>
                    <div className="tech-item">HTML/CSS/JS</div>
                </div>
            </div>

            <div className="data-flow">
                <h3>Data Flow Process</h3>
                <div className="flow-steps">
                    <span className="flow-step">User Login</span>
                    <span className="flow-arrow">→</span>
                    <span className="flow-step">Authentication</span>
                    <span className="flow-arrow">→</span>
                    <span className="flow-step">Upload Resume</span>
                    <span className="flow-arrow">→</span>
                    <span className={`flow-step highlight ${highlightAnimation ? 'animate' : ''}`}>
                        LLM Analysis
                    </span>
                    <span className="flow-arrow">→</span>
                    <span className="flow-step">Store Results</span>
                    <span className="flow-arrow">→</span>
                    <span className="flow-step">User Dashboard</span>
                </div>
            </div>
        </div>
    );
};

export default RevisemeArchitectureComponent;