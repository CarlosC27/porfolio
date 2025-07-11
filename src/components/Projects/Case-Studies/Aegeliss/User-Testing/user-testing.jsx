import React, {useState} from 'react';
import '../User-Testing/aegeliss-user-testing.css'


const AegelissUserTesting = () => {
    const [activePhase, setActivePhase] = useState('figma');

    const testingPhases = {
        figma: {
            title: "Usability Studies - Figma",
            subtitle: "Pre-Implementation Validation",
            description: "Before implementing our designs on Shopify, we conducted comprehensive usability studies to evaluate our core design assumptions and validate our approach to supporting dementia caregivers through digital resources.",
            methodology: {
                approach: "Structured usability sessions with 6 participants using high-fidelity prototype",
                focus: "Visual appeal, navigation clarity, content accessibility, and overall user experience",
                process: "Background questions, guided task scenarios, and feedback discussions"
            },
            participants: [
                "Annie Tu (Legal Assistant)",
                "Anqi Li (Nursing Student)", 
                "Amy Huang (Secondary Caregiver)",
                "Katelin Sayachith (Secondary Caregiver)",
                "Disha Manikandan (College Student)",
                "Joseph Day (Operations Specialist)"
            ],
            keyInsights: {
                successful: [
                    "Users quickly understood the website's mission to support dementia caregivers",
                    "Color scheme and aesthetic received overwhelmingly positive feedback",
                    "Information cards helped users digest information without feeling overwhelmed",
                    "Warm, welcoming visual design successfully differentiated from clinical medical websites"
                ],
                improvements: [
                    "Multiple participants noted that some fonts could be larger",
                    "Users requested dropdown menus in navigation bar",
                    "Need for clearer product descriptions and dedicated shop page",
                    "Participants suggested personalizing content based on dementia type"
                ]
            },
            quote: "I liked the design and the welcome I feel when I viewed the site.",
            outcome: "Validated our fundamental approach of creating a dignified, accessible, and emotionally supportive platform that resonated strongly with users.",
            theme: "figma-testing",
            icon: "🎨"
        },
        shopify:{
            title: "Usability Testing - Shopify",
            subtitle: "Development Enviroment Validation",
            description: "After our website was developed and deployed to a password-protected Shopify environment, we conducted comprehensive usability testing to evaluate how our designs performed in the actual development environment before public launch.",
            methodology: {
                approach: "Moderated usability testing with 5 participants in password-protected environment",
                focus: "Real-world usage patterns within Shopify's framework constraints",
                process: "Semi-structured interviews with think-aloud protocol during site navigation"
            },
            participants: [
                "Crystal Shen (INFO student and MemoryBloom app designer)",
                "Kelly Wang (UX Designer)",
                "Douglas Lane (Clinical psychologist with geriatric psychology certification)",
                "Amy Huang (HCDE student and secondary caregiver)",
                "Katie Zeitler (Dementia Friends Program Manager)"
            ],
            keyInsights: {
                successful: [
                    "Participants consistently praised imagery choices and visual execution",
                    "Warm color palette and authentic photography conveyed dignity and joy",
                    "Core design principles maintained even within Shopify constraints",
                    "Overall visual approach successfully implemented in development environment"
                ],
                improvements: [
                    "Poor text hierarchy - buttons appeared larger than body text",
                    "Font sizes consistently reported as too small for older adults",
                    "Navigation terminology confusion, particularly 'Caregivers Hub'",
                    "Unclear product positioning and relationship between content and commerce"
                ]
            },
            quote: "I love the photos used—it makes it feel more lively. They look like they are living a life.",
            outcome: "Identified critical platform-specific improvements while validating that core design principles successfully translated to the development environment.",
            theme: "shopify-testing",
            icon: "🛍️"
        }
    };

    const currentPhase = testingPhases[activePhase];

    return(
        <div className={`testing-container ${currentPhase.theme}`}>
            <div className='testing-wrapper'>
                <h2>User Testing</h2>
                <div className='toggle-container'>
                    <div className='toggle-buttons'>
                        <button onClick={() => setActivePhase('figma')} className={`toggle-btn ${activePhase === 'figma' ? 'active' : ''}`}>
                            <span className='toggle-icon'>{testingPhases.figma.icon}</span>
                            Figma Testing
                        </button>
                        <button onClick={() => setActivePhase('shopify')} className={`toggle-btn ${activePhase === 'shopify' ? 'active' : ''}`}>
                            <span className='toggle-icon'>{testingPhases.shopify.icon}</span>
                            Shopify Testing
                        </button>
                    </div>
                </div>
                <div className='testing-content'>
                    <div className='testing-header'>
                        <h2 className='phase-title'>{currentPhase.title}</h2>
                        <p className='phase-subtitle'>{currentPhase.subtitle}</p>
                        <p className='phase-description'>{currentPhase.description}</p>
                    </div>
                    <div className='content-grid'>
                        <div className='content-card'>
                            <h3 className='card-title'>Testing Methodology</h3>
                            <div className='methodology-content'>
                                <div className='methodology-item'>
                                    <span className='label'>Approach:</span>
                                    <span className='value'>{currentPhase.methodology.approach}</span>
                                </div>
                                <div className='methodology-item'>
                                    <span className='label'>Focus:</span>
                                    <span className='value'>{currentPhase.methodology.focus}</span>
                                </div>
                                <div className='methodology-item'>
                                    <span className='label'>Process:</span>
                                    <span className='value'>{currentPhase.methodology.process}</span>
                                </div>
                            </div>
                        </div>
                        <div className='content-card'>
                            <h3 className='card-title'>Participants ({currentPhase.participants.length})</h3>
                            <ul className='participants-list'>
                                {currentPhase.participants.map((participant, index) => (
                                    <li key={index} className='participant-item'>{participant}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='content-card insights-card'>
                            <h3 className='card-title'>Key Insights</h3>
                            <div className='insights-section'>
                                <h4 className='insights-subtitle successful'>Successful Design Decisions</h4>
                                <ul className='insghts-list'>
                                    {currentPhase.keyInsights.successful.map((insight, index) =>(
                                        <li key={index} className='insight-item'>{insight}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='insights-section'>
                                <h4 className='insghts-subtitle improvements'>Areas for Improvement</h4>
                                <ul className='insights-list'>
                                    {currentPhase.keyInsights.improvements.map((improvement, index) => (
                                        <li key={index} className='inisghts-item'>{improvement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='content-card outcome-card'>
                            <h3 className='card-title'>Testing Outcome</h3>
                            <blockquote className='testing-quote'>
                                "{currentPhase.quote}"
                            </blockquote>
                            <p className='outcome-text'>{currentPhase.outcome}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AegelissUserTesting;