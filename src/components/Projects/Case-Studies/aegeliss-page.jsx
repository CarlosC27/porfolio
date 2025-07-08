import React, {useState} from "react";
import images from "../../../constants/images";
import projects from "../../../constants/project-data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import "./case-studies.css"

const Aegeliss = (props) => {

    const[isTeamOpen, setIsTeamOpen] = useState(false);
    const toggleTeamAccordion = () => {
        setIsTeamOpen(!isTeamOpen)
    };

    const[isMoreResearchOpen, setIsMoreResearch] = useState(false);
     const toggleMoreResearchAccordion = () => {
        setIsMoreResearch(!isMoreResearchOpen)
     };


    return(
        <div>
            <main className="aegeliss-page">
                <section className="aegeliss-intro">
                    <div className="aegeliss-intro-text">
                        <h1>Aegeliss</h1>
                        <h2>Empowering Dementia Caregivers with Montessori-Inspired Design: A Platform That Honors Dignity</h2>
                        <p><b>Timeline:</b> January 2025 - June 2025</p>
                        <p><b>Project Scope:</b> {projects.at(0).projectType}</p>
                        <p><b>My Role:</b> Lead UX/UI Designer, UX Researcher, and Shopify Developer</p>
                        <div className="tech-stack-container">
                            <p><b>Tools Used:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">Figma</p>
                                <p className="ts-item">Miro</p>
                                <p className="ts-item">Shopify</p>
                            </div>
                        </div>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">HTML</p>
                                <p className="ts-item">CSS</p>
                                <p className="ts-item">Liquid</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Ju Tu, Kayla Tounalom, Anushka Verma, June Mi Hong, and Hung Tran</p>
                        <h3>TL:DR</h3>
                    <p>With 57 million people living with dementia, caregivers are overwhelmed by clinical, sterile resources that ignored the human side of care. As lead UX designer, I led the creation of a warm, accessible digital platform for dementia caregivers, rejecting the medical aesthetic that dominates this space in favor of modular content, cultural accessibility, and emotionally supportive design. The result: a sustainable Shopify platform that won two UW Capstone awards, helped Dementia Friends Washington reach 4,000 members, and proved healthcare design can be both professional and deeply human.</p>
                    </div>
                    <img src={images.aegeliss_hp_mockup} alt="an iMac with the Aegeliss website homepage displayed"/>
                </section>
                <section className="aegeliss-project-overview-section">
                    <h2 className="case-study-subsections-titles">Overview</h2>
                    <p><b>57 million people</b> currently live with dementia, expected to nearly triple to <b>153 million by 2050</b>, the human cost extends far beyond the diagnosed individuals. Millions of caregivers struggle daily with physical exhaustion, emotional burnout, and a profound lack of resources to provide quality care while maintaining their own wellbeing.</p>
                    <p>As the lead UX Designer on a cross-functional team at the University of Washington, I assisted with the creation of the Aegeliss website, designed to be a digital platform to empower dementia caregivers through education, community support, and practical resources</p>
                    <h2 className="case-study-subsections-titles">The Challenge</h2>
                    <p>Caregivers for people with dementia face burnout, confusion, and a lack of accessible, dignified resources. Most digital tools are sterile, overly medical, and not culturally inclusive.
                        <br></br>We identified our central design challenge: <b><em>"How might we help caregivers achieve a better understanding of dementia and its effects so they can provide more effective support, enhance care strategies, and improve quality of life for people living with dementia?"</em></b></p>
                    <div className="meet-the-team-container">
                        <button className="meet-the-team-accordion-header" onClick={toggleTeamAccordion} aria-expanded={isTeamOpen}>
                            <h3>More about the Team</h3>
                            <IoIosArrowDown className={`accordion-arrow ${isTeamOpen ? 'rotated' : ''}`} />
                        </button>
                        {isTeamOpen && (
                            <div className="meet-the-team-content">
                                <p>Our cross-functional team brought together diverse expertise to tackle this complex challenge</p>
                                <ul>
                                    <li><b>Kayla Tounalom</b>, Lead Project Manager</li>
                                    <li><b>Anushka Verma</b>, Project Manager and Data Analyst</li>
                                    <li><b>June Mi Hong</b>, Designer and Shopify Developer</li>
                                    <li><b>Hung Tran</b>, Designer and Marketing</li>
                                    <li>Myself, <b>Lead UX/UI Designer</b> and <b>Shopify Developer</b></li>
                                </ul>
                                <p>We collaborated closely with Ju Tu, CEO and Founder of Aegeliss, whose personal experience with dementia care and vision for applying Montessori principles to dementia care guided our project direction. Her background with Montessori methods which emphasize dignity, independence, and individualized engagement provided a unique framework for reimagining how we approach dementia care resources.
                                    <br></br> Ju Tu's insights into existing gaps in dementia care, combined with her Montessori-inspired philosophy, provided crucial context as we began our research phase.</p>
                            </div>
                        )}
                    </div>
                    
                </section>
                <section className="ageliss-user-research-section">
                    <h2>User Research</h2>
                    <p>To understand the challenges facing dementia caregivers, we did took a comprehensive research approach that combined multiple methodologies for a holistic view of user needs while exploring how Montessori principles could be applied to dementia care.</p>
                    <h3>Research Methods</h3>
                    <ul className="research-methods-list">
                        <li><b>Qualitative interviews</b> with <b>12 caregivers</b> across multiple stakeholder groups (family caregivers, professional staff, and sandwich generation caregivers)</li>
                        <li><b>Literature review</b> of current dementia care practices, existing digital solutions, and Montessori-based dementia care approaches</li>
                        <li><b>Stakeholder interviews</b> with dementia care professionals and organization leaders</li>
                        <li><b>Observational research</b> through volunteering at Elderwise care facilities</li>
                        <li><b>Community surveys</b> distributed to caregivers to validate and enrich our findings</li>
                        <li><b>Montessori principles research</b> examining how person-centered, dignity-focused approaches could address current gaps in dementia care</li>
                    </ul>
                    <div className="aegeliss-more-user-research-container">
                        <button className="more-user-research-accordion-header" onClick={toggleMoreResearchAccordion} aria-expanded={isMoreResearchOpen}>
                            <h3>Intresesed in our Interview Process and Montessori Integegration? Read all about it here <FaBookOpenReader /></h3>
                            <IoIosArrowDown className={`accordion-arrow ${isTeamOpen ? 'rotated' : ''}`} />
                        </button>
                        {isMoreResearchOpen && (
                            <div className="more-user-research-content">
                                <h3>Interview Process and Participant Diversity</h3>
                                <p>We conducted <b>45-60 minute</b> semi-structured interviews with caregivers representing diverse experiences: first-generation immigrant caregivers facing language barriers, sandwich generation caregivers balancing work and remote caregiving, and professional caregivers managing <b>11+ patients</b>. <br></br>Key questions explored how caregivers currently seek information, barriers they face in providing care, cultural considerations in caregiving approaches, and what would make their caregiving journey more manageable.</p>
                                <h3>Montessori Research Integration</h3>
                                <p>Working with Ju Tu's vision to apply Montessori principles to dementia care, we researched how these educational approaches emphasizing dignity, independence, and individualized engagement could address the gaps we were discovering in traditional medical-focused care models. This research revealed that Montessori methods align perfectly with what caregivers desperately needed: person-centered approaches that honor individual capabilities rather than focusing solely on deficits.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Aegeliss;