import React, { useEffect } from 'react';
import './hf-research.css';

const HfResearch = () => {
  useEffect(() => {
    // Animate progress bars with delay
    const timer1 = setTimeout(() => {
      const progressBars = document.querySelectorAll('.hf-research-section .progress-fill');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }, 800);

    // Add staggered animation to cards
    const cards = document.querySelectorAll('.hf-research-section .card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      const timer2 = setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 150);
    });

    // Add subtle hover animations to insight items
    const insightItems = document.querySelectorAll('.hf-research-section .insight-item');
    insightItems.forEach(item => {
      const handleMouseEnter = function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 25px rgba(75, 46, 131, 0.15)';
      };
      
      const handleMouseLeave = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners
      return () => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="hf-research-section">
      <div className="dashboard">
        <div className="header">
          <h2>UW Student Fitness Research</h2>
          <p>Physical Activity Patterns & IMA Experience Analysis</p>
        </div>

        <div className="grid">
          {/* Demographics Card */}
          <div className="card">
            <h3>Demographics</h3>
            <div className="stat-number">20</div>
            <div className="stat-label">Total Responses</div>
            <div className="demographics-grid">
              <div className="demo-item">
                <span>Current Students:</span>
                <span className="frequency">95%</span>
              </div>
              <div className="demo-item">
                <span>Age Range:</span>
                <span className="frequency">19-22</span>
              </div>
              <div className="demo-item">
                <span>Gender Split:</span>
                <span className="frequency">55% M / 45% F</span>
              </div>
            </div>
          </div>

          {/* Activity Level Card */}
          <div className="card">
            <h3>Activity Level</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '90%'}}>90% Active</div>
            </div>
            <div style={{marginTop: '1.5rem'}}>
              <div className="frequency-title">Common Frequencies:</div>
              <div className="frequency-list">• 5-7 times per week</div>
              <div className="frequency-list">• 3-4 times per week</div>
              <div className="frequency-list">• Daily walks/sports</div>
            </div>
          </div>

          {/* Top Motivations Card */}
          <div className="card">
            <h3>Top Motivations</h3>
            <div className="motivation-item">
              <span>Mental Health Benefits</span>
              <span className="frequency">High</span>
            </div>
            <div className="motivation-item">
              <span>Physical Appearance</span>
              <span className="frequency">High</span>
            </div>
            <div className="motivation-item">
              <span>Feeling Stronger</span>
              <span className="frequency">High</span>
            </div>
            <div className="motivation-item">
              <span>Stress Relief</span>
              <span className="frequency">Med</span>
            </div>
            <div className="motivation-item">
              <span>Competition</span>
              <span className="frequency">Med</span>
            </div>
          </div>

          {/* Main Obstacles Card */}
          <div className="card">
            <h3>Main Obstacles</h3>
            <div className="obstacle-item">
              <span>Time Constraints</span>
              <span className="frequency">Very High</span>
            </div>
            <div className="obstacle-item">
              <span>Crowded Gym</span>
              <span className="frequency">High</span>
            </div>
            <div className="obstacle-item">
              <span>Lack of Knowledge</span>
              <span className="frequency">Med</span>
            </div>
            <div className="obstacle-item">
              <span>Equipment Wait</span>
              <span className="frequency">Med</span>
            </div>
            <div className="obstacle-item">
              <span>Intimidation</span>
              <span className="frequency">Med</span>
            </div>
          </div>
        </div>

        {/* IMA Experience Card */}
        <div className="ima-section">
          <div className="card ima-card">
            <h3>IMA Experience Overview</h3>
            <div className="ima-stats">
              <span className="stat-number ima-stat-number">85%</span>
              <div className="stat-label">Have Used IMA</div>
            </div>
            
            <div className="experience-section">
              <div className="experience-grid">
                <div className="positive">
                  <h4>Positive Aspects</h4>
                  <ul>
                    <li>Excellent equipment variety</li>
                    <li>Strong student community</li>
                    <li>Multiple activity options</li>
                    <li>Good facility size</li>
                    <li>Friendly atmosphere</li>
                  </ul>
                </div>
                <div className="negative">
                  <h4>Pain Points</h4>
                  <ul>
                    <li>Overcrowding issues</li>
                    <li>Hot/stuffy environment</li>
                    <li>Long equipment wait times</li>
                    <li>Peak hour congestion</li>
                    <li>Limited towels/supplies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="insights">
          <h2>Key Research Insights</h2>
          <div className="insight-grid">
            <div className="insight-item">
              <h4>Time is Everything</h4>
              <p>Time constraints are the #1 barrier to exercise, even among highly active students</p>
            </div>
            <div className="insight-item">
              <h4>Mental Health Drive</h4>
              <p>Mental health benefits are equally important as physical appearance as motivators</p>
            </div>
            <div className="insight-item">
              <h4>Crowding Challenge</h4>
              <p>IMA overcrowding significantly impacts user experience and workout quality</p>
            </div>
            <div className="insight-item">
              <h4>Community Value</h4>
              <p>Students appreciate the social aspects and community feeling at the IMA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HfResearch;