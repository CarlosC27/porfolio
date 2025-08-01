import React, { useEffect, useRef } from 'react';
import './reviseme-refactor.css';

const RevisemeRefactorComponent = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
        timelineItems?.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });

        return () => {
            timelineItems?.forEach(item => observer.unobserve(item));
        };
    }, []);

    const showDetails = (type, description) => {
        alert(`${type.toUpperCase()}: ${description}`);
    };

    const showImpact = (type) => {
        const impacts = {
            technical: "Eliminated all new user registration failures, implemented comprehensive error handling, and created scalable architecture for future enhancements.",
            team: "Successfully managed crisis while maintaining sprint deadlines, coordinated team efforts during refactor, and maintained project momentum.",
            learning: "Learned critical importance of edge case planning, architectural foresight, and sustainable development practices under pressure."
        };
        alert(impacts[type]);
    };

    return (
        <div className="reviseme-refactor">
            <h2 className="refactor-title">The Great Refactor: Crisis &amp; Solution</h2>
            
            <div className="crisis-alert">
                <h2>CRITICAL SYSTEM FAILURE</h2>
                <p>New users signing in for the first time encountered database queries for non-existent resume data, causing complete system failures and blocking all new user registrations.</p>
            </div>
            
            <div className="comparison">
                <div className="vs-divider">VS</div>
                
                <div className="before">
                    <div className="section-title">BEFORE: Flawed Architecture</div>
                    
                    <div 
                        className="problem" 
                        onClick={() => showDetails('assumption', 'Original workflow assumed users would always have existing data')}
                    >
                        <strong>False Assumption</strong><br />
                        <small>Assumed all users had existing resume data in database</small>
                    </div>
                    
                    <div 
                        className="problem" 
                        onClick={() => showDetails('query', 'Database queries failed for new users with no data')}
                    >
                        <strong>Query Failures</strong><br />
                        <small>findOne() operations returned null, causing cascading errors</small>
                    </div>
                    
                    <div 
                        className="problem" 
                        onClick={() => showDetails('flow', 'No graceful handling of empty user states')}
                    >
                        <strong>Broken User Flow</strong><br />
                        <small>New users hit immediate roadblock after authentication</small>
                    </div>
                    
                    <div 
                        className="problem" 
                        onClick={() => showDetails('error', 'Poor error handling caused system crashes')}
                    >
                        <strong>System Crashes</strong><br />
                        <small>Unhandled exceptions crashed the entire user session</small>
                    </div>
                    
                    <div className="code-snippet">
                        <pre>{`// PROBLEMATIC CODE
app.get('/dashboard', async (req, res) => {
  const user = await User.findOne({username});
  // CRASH! New users have no data
  const resumes = user.resumes; 
  res.render('dashboard', {resumes});
});`}</pre>
                    </div>
                </div>
                
                <div className="after">
                    <div className="section-title">AFTER: Robust Architecture</div>
                    
                    <div 
                        className="solution" 
                        onClick={() => showDetails('graceful', 'Elegant handling of empty user states')}
                    >
                        <strong>Graceful Empty States</strong><br />
                        <small>Conditional rendering based on user data existence</small>
                    </div>
                    
                    <div 
                        className="solution"
                        onClick={() => showDetails('validation', 'Comprehensive user data validation')}
                    >
                        <strong>Data Validation</strong><br />
                        <small>Thorough checks before database operations</small>
                    </div>
                    
                    <div 
                        className="solution"
                        onClick={() => showDetails('routing', 'Smart routing based on user status')}
                    >
                        <strong>Intelligent Routing</strong><br />
                        <small>Dynamic redirects based on user data completeness</small>
                    </div>
                    
                    <div 
                        className="solution"
                        onClick={() => showDetails('error-handling', 'Comprehensive error handling and recovery')}
                    >
                        <strong>Error Recovery</strong><br />
                        <small>Fallback mechanisms and user-friendly error messages</small>
                    </div>
                    
                    <div className="code-snippet">
                        <pre>{`// REFACTORED CODE
app.get('/dashboard', async (req, res) => {
  const user = await User.findOne({username});
  if (!user) {
    return res.redirect('/register');
  }
  const resumes = user.resumes || [];
  res.render('dashboard', {resumes});
});`}</pre>
                    </div>
                </div>
            </div>
            
            <div className="timeline" ref={timelineRef}>
                <h3 className="timeline-title">Refactor Timeline &amp; Decision Process</h3>
                
                <div className="timeline-item crisis">
                    <div className="timeline-content">
                        <h4 className="crisis-heading">Crisis Discovery</h4>
                        <p>Midway through development, discovered fundamental flaw affecting all new user registrations. System was essentially broken for first-time users.</p>
                    </div>
                </div>
                
                <div className="timeline-item analysis">
                    <div className="timeline-content">
                        <h4 className="analysis-heading">Root Cause Analysis</h4>
                        <p>Identified that workflow assumptions were flawed. Original architecture didn't account for empty user states and edge cases.</p>
                    </div>
                </div>
                
                <div className="timeline-item solution-timeline">
                    <div className="timeline-content">
                        <h4 className="solution-heading">Architecture Redesign</h4>
                        <p>Completely refactored user flow with conditional rendering, proper error handling, and graceful empty state management.</p>
                    </div>
                </div>
            </div>
            
            <div className="impact-section">
                <h3>Impact &amp; Results</h3>
                <div className="metrics">
                    <div className="metric">
                        <div className="metric-value">100%</div>
                        <div>New User Success Rate</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">0</div>
                        <div>System Crashes</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">3 Days</div>
                        <div>Refactor Timeline</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">6 Weeks</div>
                        <div>Sprint Deadline Met</div>
                    </div>
                </div>
                
                <div className="impact-grid">
                    <div className="impact-card" onClick={() => showImpact('technical')}>
                        <h4>Technical Impact</h4>
                        <p>Robust error handling, graceful empty states, and improved user experience for all user types.</p>
                    </div>
                    <div className="impact-card" onClick={() => showImpact('team')}>
                        <h4>Team Impact</h4>
                        <p>Demonstrated crisis leadership and technical problem-solving under pressure while maintaining team morale.</p>
                    </div>
                    <div className="impact-card" onClick={() => showImpact('learning')}>
                        <h4>Learning Impact</h4>
                        <p>Invaluable lessons about architectural planning, edge case handling, and sustainable development practices.</p>
                    </div>
                </div>
            </div>
            
            <div className="leadership-highlight">
                <h3>Leadership &amp; Problem-Solving</h3>
                <p>
                    <strong>This crisis became my most valuable learning experience.</strong> Taking ownership during critical system failures and leading technical solutions under pressure demonstrated how architectural shortcuts create exponentially larger problems. The refactoring process reinforced that even sprint-style development benefits enormously from upfront planning around user workflows and data relationships.
                </p>
            </div>
        </div>
    );
};

export default RevisemeRefactorComponent;