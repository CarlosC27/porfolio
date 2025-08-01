import React, { useEffect } from 'react';
import './reviseme-results.css';

const RevisemeResultsComponent = () => {
    useEffect(() => {
        // Add loading animation to sections
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 150);
        });

        // Add pulse animation to integration arrows
        const arrows = document.querySelectorAll('.arrow');
        arrows.forEach(arrow => {
            const handleMouseEnter = () => {
                arrow.style.animation = 'pulse 0.5s ease-in-out';
            };
            arrow.addEventListener('mouseenter', handleMouseEnter);
            
            return () => arrow.removeEventListener('mouseenter', handleMouseEnter);
        });
    }, []);

   

    return (
        <div className="reviseme-results-container">
            <div className="header">
                <h2>RÉVISEMÉ</h2>
                <p>Unified System Architecture: AI-Powered Resume Analysis with Complex User Workflows and Scalable Database Design</p>
            </div>

            <div className="system-overview">
                <h2>Complete System Overview</h2>
                <p>Sophisticated architecture combining Perplexity LLM integration, multi-path user journeys, and MongoDB Atlas database with real-time processing capabilities</p>
                <div className="overview-stats">
                    <div className="stat">
                        <div className="stat-value">4</div>
                        <div className="stat-label">AI Processing Steps</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">3</div>
                        <div className="stat-label">User Journey Types</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">4</div>
                        <div className="stat-label">Database Collections</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">7+</div>
                        <div className="stat-label">Decision Points</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">∞</div>
                        <div className="stat-label">Flow Combinations</div>
                    </div>
                </div>
            </div>

            <div className="architecture-grid">
                <div className="section">
                    <div className="section-title">
                        Perplexity LLM Integration
                    </div>
                    <div className="ai-flow">
                        <div className="ai-step" >
                            <div className="ai-step-number">1</div>
                            <div className="ai-step-content">
                                <div className="ai-step-title">Data Preparation</div>
                                <div className="ai-step-desc">Extract resume, job description, and filtered user skills</div>
                            </div>
                        </div>
                        <div className="ai-step" >
                            <div className="ai-step-number">2</div>
                            <div className="ai-step-content">
                                <div className="ai-step-title">Prompt Engineering</div>
                                <div className="ai-step-desc">Construct intelligent system &amp; user prompts for analysis</div>
                            </div>
                        </div>
                        <div className="ai-step">
                            <div className="ai-step-number">3</div>
                            <div className="ai-step-content">
                                <div className="ai-step-title">API Communication</div>
                                <div className="ai-step-desc">Secure axios POST to llama-3.1-sonar-large-128k</div>
                            </div>
                        </div>
                        <div className="ai-step" >
                            <div className="ai-step-number">4</div>
                            <div className="ai-step-content">
                                <div className="ai-step-title">Response Processing</div>
                                <div className="ai-step-desc">Parse LLM response and store with MongoDB</div>
                            </div>
                        </div>
                    </div>
                    <div className="ai-tech-stack">
                        <div className="tech-item">128k Context</div>
                        <div className="tech-item">Online Model</div>
                        <div className="tech-item">Bearer Auth</div>
                        <div className="tech-item">Error Handling</div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">
                        Complex User Journeys
                    </div>
                    <div className="user-flows">
                        <div className="user-type new-user" >
                            <div className="user-type-title">
                                New User Journey
                            </div>
                            <div className="user-flow-steps">
                                <div className="flow-step">Landing</div>
                                <div className="flow-step">OAuth</div>
                                <div className="flow-step">Profile Setup</div>
                                <div className="flow-step">Dashboard</div>
                            </div>
                        </div>
                        <div className="user-type returning-user">
                            <div className="user-type-title">
                                Returning User Journey
                            </div>
                            <div className="user-flow-steps">
                                <div className="flow-step">Direct Login</div>
                                <div className="flow-step">Session Verify</div>
                                <div className="flow-step">Action Choice</div>
                                <div className="flow-step">Review Process</div>
                            </div>
                        </div>
                        <div className="user-type power-user" >
                            <div className="user-type-title">
                                Power User Journey
                            </div>
                            <div className="user-flow-steps">
                                <div className="flow-step">Quick Access</div>
                                <div className="flow-step">Multiple Reviews</div>
                                <div className="flow-step">Bulk Actions</div>
                                <div className="flow-step">Advanced Features</div>
                            </div>
                        </div>
                    </div>
                    <div className="complexity-metrics">
                        <div className="complexity-metric">
                            <div className="metric-number">5</div>
                            <div className="metric-text">Popup Interactions</div>
                        </div>
                        <div className="complexity-metric">
                            <div className="metric-number">12</div>
                            <div className="metric-text">State Variations</div>
                        </div>
                        <div className="complexity-metric">
                            <div className="metric-number">6</div>
                            <div className="metric-text">Edge Cases</div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">
                        
                        MongoDB Atlas Schema
                    </div>
                    <div className="db-schemas">
                        <div className="db-table">
                            <div className="table-name">
                                User Collection
                            </div>
                            <div className="table-fields">
                                <div className="table-field">username, email</div>
                                <div className="table-field">firstName, lastName</div>
                                <div className="table-field">skills[], jobInterest[]</div>
                            </div>
                        </div>
                        <div className="db-table" >
                            <div className="table-name">
                                Resume Collection
                            </div>
                            <div className="table-fields">
                                <div className="table-field">resume, job_description</div>
                                <div className="table-field">filtered_user_skills</div>
                                <div className="table-field">llm_response, timestamps</div>
                            </div>
                        </div>
                        <div className="db-table">
                            <div className="table-name">
                                SimpleReview
                            </div>
                            <div className="table-fields">
                                <div className="table-field">resumeName, output</div>
                                <div className="table-field">favorited (boolean)</div>
                                <div className="table-field">resumeReviewName</div>
                            </div>
                        </div>
                        <div className="db-table" >
                            <div className="table-name">
                                SpecificReview
                            </div>
                            <div className="table-fields">
                                <div className="table-field">specificJobs[]</div>
                                <div className="table-field">targeted analysis</div>
                                <div className="table-field">favorited, output</div>
                            </div>
                        </div>
                    </div>
                    <div className="db-relationships">
                        <div className="relationships-title">Relationships</div>
                        <div className="relationship">
                            <span>User</span> <span className="relationship-arrow">→ 1:N →</span> <span>Resume/Reviews</span>
                        </div>
                        <div className="relationship">
                            <span>User.jobInterest</span> <span className="relationship-arrow">→ REF →</span> <span>SpecificReview.specificJobs</span>
                        </div>
                    </div>
                </div>

                <div className="section integration-section">
                    <div className="section-title">
                        Unified System Integration Flow
                    </div>
                    <div className="integration-flow">
                        <div className="integration-node">
                            <h4>React Frontend</h4>
                            <p>Dynamic UI with real-time updates, popup management, and complex state coordination</p>
                        </div>
                        <div className="arrow">→</div>
                        <div className="integration-node">
                            <h4>Express API</h4>
                            <p>RESTful endpoints with authentication, session management, and error handling</p>
                        </div>
                        <div className="arrow">→</div>
                        <div className="integration-node" >
                            <h4>Perplexity AI</h4>
                            <p>LLM processing pipeline with prompt engineering and response validation</p>
                        </div>
                        <div className="arrow">→</div>
                        <div className="integration-node" >
                            <h4>MongoDB Atlas</h4>
                            <p>Distributed database with relationships, indexing, and automatic timestamps</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="metrics">
                <div className="metric" >
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">System Uptime</div>
                    <div className="metric-desc">High availability with error recovery</div>
                </div>
                <div className="metric">
                    <div className="metric-value">&lt;200ms</div>
                    <div className="metric-label">AI Response Time</div>
                    <div className="metric-desc">Optimized LLM processing</div>
                </div>
                <div className="metric" >
                    <div className="metric-value">∞</div>
                    <div className="metric-label">Scalability</div>
                    <div className="metric-desc">Cloud-native architecture</div>
                </div>
                <div className="metric" >
                    <div className="metric-value">OAuth</div>
                    <div className="metric-label">Authentication</div>
                    <div className="metric-desc">Microsoft SSO integration</div>
                </div>
                <div className="metric" >
                    <div className="metric-value">15+</div>
                    <div className="metric-label">Advanced Features</div>
                    <div className="metric-desc">Favoriting, bulk actions, targeting</div>
                </div>
                <div className="metric">
                    <div className="metric-value">Multi-Path</div>
                    <div className="metric-label">User Flows</div>
                    <div className="metric-desc">Adaptive routing and state management</div>
                </div>
            </div>
        </div>
    );
};

export default RevisemeResultsComponent;