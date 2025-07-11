import React, {useState} from "react";
import images from "../../../../constants/images";
import aegelissImgs from "../../../../constants/aegeliss-imgs";
import projects from "../../../../constants/project-data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import ExpandableCard from "../../../expandable-card";
import AegelissUserPersonas from "./User-Personas/aegeliss-personas";
import AegelissUserTesting from "./User-Testing/user-testing";
import ImageCarousel from "../../../image-carousel";
import '../../../expandableCards.css';
import "./../case-studies.css"

const Aegeliss = (props) => {

    const[isTeamOpen, setIsTeamOpen] = useState(false);
    const toggleTeamAccordion = () => {
        setIsTeamOpen(!isTeamOpen)
    };

    const[isMoreResearchOpen, setIsMoreResearch] = useState(false);
     const toggleMoreResearchAccordion = () => {
        setIsMoreResearch(!isMoreResearchOpen)
     };

     const intialWirframingImgs = [
        aegelissImgs.ui_sketches, aegelissImgs.carlos_ideas, aegelissImgs.junes_ideas, aegelissImgs.hungs_ideas
     ]

     const montessoriPrinciplesData = [
        {
            title: "Respect for the Individual",
            description: "Every person deserves dignity, autonomy, and respect, regardless of their cognitive state.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Encourages person-centered care focused on abilities rather than deficits.</li>
                        <li>Respects choices by allowing individuals to decide on daily activities.</li>
                        <li>Avoids infantilizing language and promotes age-appropriate interactions.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Prepared Environmentl",
            description: "The environment should be structured to promote engagement, accessibility, and independence.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Creates familiar, clutter-free spaces with clear labels and visual cues.</li>
                        <li>Uses contrasting colors to enhance visibility and orientation.</li>
                        <li>Provides sensory-stimulating objects to encourage interaction.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Hands-On Learning & Purposeful Activities",
            description: "People learn best by doing, with hands-on experiences that build confidence and cognitive strength.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Engages memory through tactile activities like folding laundry, sorting objects, or gardening.</li>
                        <li>Encourages muscle memory for routine tasks, such as setting a table.</li>
                        <li>Provides structured yet adaptable activities suited to cognitive abilities.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Freedom of Choice with Guidance",
            description: "Giving individuals choices fosters independence and self-worth.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Affects personality, behavior, and language</li>
                        <li>Emotional outbursts, inappropriate social behavior</li>
                        <li>Early onset (often in 40s or 50s)</li>
                    </ul>
                </div>
            )
        },
           {
            title: "Prepared Encouraging Social Interaction",
            description: "Social engagement enhances learning, emotional well-being, and cognitive function.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Encourages group activities like music therapy, storytelling, and reminiscence therapy.</li>
                        <li>Strengthens connections with caregivers and peers through structured conversations.</li>
                        <li>Reduces feelings of isolation by fostering a sense of belonging.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Repetition and Routine for Mastery",
            description: "Repetition helps reinforce learning and build confidence.",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Establishes predictable routines to reduce anxiety and confusion.</li>
                        <li>Encourages daily repetition of familiar tasks to maintain cognitive function.</li>
                        <li>Helps individuals retain skills for longer by reinforcing positive experiences.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Multi-Sensory Engagement",
            description: "Learning and engagement should incorporate multiple senses (sight, touch, smell, sound, taste).",
            theme: "healthcare-theme",
            expandedContent: (
                <div>
                    <h4 className="content-title">Dementia Care Impact:</h4>
                    <ul className="content-list">
                        <li>Uses aromatherapy, textured objects, and music therapy to stimulate memory.</li>
                        <li>Introduces visual aids and large-print books to support cognitive function.</li>
                        <li>Encourages tactile activities like painting, sculpting, or handling fabrics.</li>
                    </ul>
                </div>
            )
        }
     ]


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
                                <div className="montesorri-principles-cards">
                                    <h4>Montesorri Principles in Dementia Care</h4>
                                    <p>These core principles guide our approach to creating dignified, person-centered care experiences:</p>
                                    <div className="mp-card-grid">
                                        {montessoriPrinciplesData.map((principle, index) => (
                                            <ExpandableCard 
                                                key={index}
                                                title={principle.title}
                                                description={principle.description}
                                                expandedContent={principle.expandedContent}
                                                className={"principle.them"}
                                                />
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    <h2>Research Insights</h2>
                    <p>Our comprehensive research, including interviews with 12 caregivers across diverse stakeholder groups, Montessori principles investigation, community volunteering, and stakeholder conversations, revealed critical gaps in the current dementia care landscape that impact both caregivers and the people they support.</p>
                    <h3>What We Discovered</h3>
                    <ul className="ageliss-research-insights-list">
                        <li><b>Limited practical resources:</b> Caregivers lack accessible guidance and tools for meaningful engagement with people living with dementia</li>
                        <li><b>Medical-focused approach:</b> Current solutions overlook quality of life, dignity, and emotional connection—core elements that Montessori-inspired dementia care emphasizes</li>
                        <li><b>Cultural and language barriers:</b> First-generation immigrant caregivers face additional challenges accessing resources, with <b>4 out of 5</b> rating language barriers as frequent obstacles</li>
                        <li><b>Professional caregiver burnout:</b> <b>75%</b> of professional caregivers reported caring for <b>11+ patients</b> simultaneously, leading to emotional fatigue and high turnover</li>
                        <li><b>Generic solutions:</b> Existing resources fail to address personalized needs of individuals with dementia, contradicting person-centered Montessori principles</li>
                        <li><b>Sandwich generation strain:</b> Remote caregivers experience guilt, physical health impacts, and struggle to balance career demands with caregiving responsibilities</li>
                    </ul>
                    <h3>The Montessori Connection:</h3>
                    <p>Our research into Montessori principles revealed an opportunity to apply person-centered, dignity-focused approaches that emphasize independence and meaningful engagement directly addressing the gaps caregivers described in traditional medical-model care.</p>
                    <h3>Why This Matters:</h3>
                    <p>Without better solutions, we risk a cascade of negative outcomes: caregiver burnout and mental health challenges, declining quality of life for people with dementia, escalating healthcare costs, cultural barriers preventing equitable care access, and lost opportunities for precious family connections as the disease progresses.<br>
                    </br>These insights, combined with Montessori-inspired principles, became the foundation for our design approach, prioritizing features that address both practical caregiving needs and emotional well-being while honoring the dignity and individual capabilities of people living with dementia.</p>
                </section>
                <section className="aegeliss-user-personas">
                    <AegelissUserPersonas />
                </section>
                <section className="ideation-and-design-section">
                    <h2>Ideation & Design Process</h2>
                    <p>After synthesizing our research insights, I led the team through a structured ideation process to transform our findings into actionable design solutions for the Aegeliss platform.</p>
                    <div>
                        <div>
                            <h3>Feature Ideation & Brainstorming</h3>
                            <p>We began with collaborative brainstorming sessions, generating ideas that directly addressed the gaps we identified in our research. Our ideation focused on three key areas: accessibility features (good contrast, seamless UI design, key term definitions), user engagement elements (personal stories, intuitive navigation, multilingual support), and practical functionality (search features, text-to-speech options, cultural considerations).</p>
                        </div>
                        <div>
                            <h3>Market Research & Competitive Analysis</h3>
                            <p>To understand the current landscape, we conducted comprehensive market research examining existing dementia and memory care websites. Our analysis revealed a consistent pattern: most sites in this space had a sterile, medical feel with dense text and clinical language that could overwhelm caregivers already facing significant stress.
                                However, one website stood out as exceptional—Dementia Australia—which our sponsor Ju Tu recommended. This site successfully balanced professional credibility with warmth and accessibility, using concise text and an inviting design that made complex information digestible for diverse audiences.</p>
                        </div>
                    </div>
                    <div>
                        <h3>Prioritization & Feature Ranking</h3>
                        <p>Using insights from our research and market analysis, we systematically prioritized features through impact-effort mapping. High-priority features included multilingual support, descriptive visuals, colorful and friendly design schemes, and cultural incorporation, all directly addressing the barriers our research participants identified. We also prioritized accessibility features like text-to-speech options, keyboard accessibility, and high contrast visuals to ensure the platform could serve caregivers with varying technical comfort levels.</p>
                        <img src={aegelissImgs.idea_map} alt="Aegeliss features brainstoming map" className="aegeliss-brainstorm-map"/>
                    </div>
                    <h2>Design Approach</h2>
                    <p>Our team's design approach consisted of multiple complementary aspects that helped Aegeliss develop into a brand with strong focus on practicality and empathy. Understanding that our users, family caregivers, professional staff, and care partners, needed a welcoming, clear, and easy-to-use platform, we centered our approach around reducing cognitive load while maintaining comprehensive functionality.</p>
                    <div>
                        <div>
                            <h3>Research-Driven Design Decisions</h3>
                            <p>Drawing from our interviews with 12 caregivers and community engagement experiences, we understood that traditional medical websites often alienated the very people they aimed to help. Our participants consistently expressed frustration with clinical language, overwhelming information density, and sterile aesthetics that felt disconnected from the warmth and dignity they wanted to provide in their caregiving relationships.</p>
                        </div>
                        <div>
                            <h3>Accessibility-First Considerations</h3>
                            <p>We prioritized navigation clarity, readability, and information organization throughout our design process. Recognizing that our stakeholders span a wide age range and varying levels of medical background and technical comfort, we implemented features like alt text for all images, keyboard accessibility, and text-to-speech functionality. Our design remained intentionally simple, with carefully chosen color palettes and typography to ensure information never felt overwhelming.</p>
                        </div>
                        <div>
                            <h3>Guiding Design Principles</h3>
                            <p>Leveraging Aegeliss's existing brand guide, we embraced warm, inviting colors rather than the sterile aesthetics common in medical websites. Our primary palette used off-white backgrounds with dark blue headings, switching to dark blue backgrounds with yellow headings when contrast was needed. This approach created visual balance while maintaining the welcoming atmosphere essential for stressed caregivers seeking support and guidance.</p>
                        </div>
                    </div>
                    <p>The result was a platform that honored both the practical needs identified in our research and the emotional needs of people navigating one of life's most challenging experiences.</p>
                </section>
                <section className="wireframing-and-protoyping">
                    <h2>Wireframes & Prototyping</h2>
                    <p>Due to our project's swift timeline, we took a non-traditional but efficient approach to wireframing that prioritized rapid iteration and stakeholder feedback over extensive low-fidelity exploration.</p>
                    <div>
                        <div>
                            <h3>Sketching and Mid-fidelity Components</h3>
                            <p>I began with hand-drawn sketches to quickly explore layout concepts and information architecture. These initial sketches focused on key user flows and helped us visualize how different content sections could work together cohesively across the platform. The sketching phase allowed for rapid experimentation with navigation patterns, content hierarchy, and accessibility considerations without the constraints of digital tools.
                                <br></br>Building on these foundational sketches, our team took a modular approach where each member designed mid-fidelity wireframes focusing on specific components and sections that could be applied across different pages. Rather than creating comprehensive page wireframes, this method allowed us to work efficiently while ensuring design consistency and reusability throughout the platform.</p>
                        </div>
                        <ImageCarousel
                            images={intialWirframingImgs}
                            primaryColor="#122D43"
                            secondaryColor="#344F66"
                            // buttonColor="#122D43"
                            width="200px"
                            className="ageliss-initial-wireframing"
                        />
                    </div>
                </section>
                <section className="design-system-and-hifi-fidelit-section">
                    <h2>Design System & High-Fidelity Wireframes</h2>
                    <div>
                        <div>
                            <h3>Component-Based Design System</h3>
                            <p>To ensure efficiency and consistency across the platform, I developed a comprehensive design system featuring reusable components. This included creating standardized navigation elements with multiple states (active, hover, default), color-coded content cards for different resource categories, and interactive dropdown menus that could be applied across different sections.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Consistent Visual Language</h3>
                            <p>The design system established consistent brand elements including our signature wave dividers, carefully selected color palettes, and typography hierarchy that created visual cohesion throughout the platform. These wave dividers became a key brand element that created a friendly and inviting environment while effectively separating sections, contrasting sharply with the linear, clinical aesthetic common in medical websites.</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Accessibility-Focused Navigation</h3>
                            <p>The high-fidelity wireframes prioritized accessibility through high-contrast color combinations, multiple navigation options, and clear visual hierarchy. The navigation system accommodated users who might prefer linear browsing versus those comfortable with more complex interactions, ensuring the platform remained welcoming to our diverse user base.</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Flexible Content Architecture</h3>
                            <p>For content-heavy sections, I designed flexible dropdown components that minimized cognitive load while maintaining comprehensive information access. This was particularly important for sensitive topics like dementia education, where we needed to balance thoroughness with digestibility. For serious content sections, I opted for linear dividers instead of playful waves to ensure visual elements aligned with content tone.</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Storytelling Through Design</h3>
                            <p>For content-heavy sections, I designed flexible dropdown components that minimized cognitive load while maintaining comprehensive information access. This was particularly important for sensitive topics like dementia education, where we needed to balance thoroughness with digestibility. For serious content sections, I opted for linear dividers instead of playful waves to ensure visual elements aligned with content tone.</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <p>This component-based approach not only accelerated our design and development process but also ensured that every interface element served our core mission: creating a platform that feels supportive, accessible, and dignified for caregivers navigating one of life's most challenging experiences.</p>
                </section>
                <section className="developement-section">
                    <h2>Development</h2>
                    <p>After completing our design validation, the development team and I implemented the Aegeliss platform on Shopify. This decision was strategically aligned with Ju Tu's business goals, she plans to create and sell products influenced by Montessori principles that aid in dementia care. Shopify provided the optimal solution as an e-commerce platform that would allow Ju to easily manage product listings, process sales, and make content updates without requiring technical expertise that a custom-coded website would demand. 
                        <br></br>While we could have built a custom website from scratch, we prioritized Ju's long-term ability to maintain and grow her business independently. Shopify's user-friendly content management system, built-in e-commerce functionality, and extensive template library made it the ideal choice for a founder who needed to focus on product development and customer relationships rather than technical website maintenance.</p>
                    <div>
                        <h3>Development Challenges</h3>
                        <div>
                            <div>
                                <h4>Design Implementation Constraints</h4>
                                <p>Despite Shopify's excellent templates and built-in features, the platform significantly limited our design flexibility and component creation capabilities. Shopify's section and block architecture constrained how we could structure web pages, often forcing us to compromise on our carefully designed layouts and interactions that had tested well with users.</p>
                            </div>
                            <div>
                                <h4>Balancing Customization with Usability</h4>
                                <p>We were aware that Shopify allows custom sections and blocks through code development, but implementing extensive custom code would create maintenance challenges for Ju, who lacks a technical background. This created a constant tension between design fidelity and long-term sustainability.</p>
                            </div>
                            <div>
                                <h4>Technical Complexity Navigation</h4>
                                <p>Shopify's multiple class system made styling specific components challenging, as each element inherited numerous CSS classes that could conflict with our custom styling. This required extensive research and testing to understand Shopify's underlying structure.</p>
                            </div>
                        </div>
                        <div>
                            <h3>Development Strategy</h3>
                            <div>
                               <div>
                                    <div>
                                        <h4>Built-in Components Priority</h4>
                                        <p>We prioritized using Shopify's native sections and blocks wherever possible, ensuring that Ju would be able to drag, drop, and edit content easily through the visual editor without touching any code. This approach maintained the user-friendly experience that motivated our platform choice.</p>
                                    </div>
                                    <div>
                                        <h4>Strategic CSS Implementation</h4>
                                        <p>For sections where built-in components couldn't achieve our design vision, we carefully implemented custom CSS while maintaining detailed documentation. Each custom style was thoroughly documented with explanations of its purpose and functionality, creating a reference guide for Ju to understand how modifications would affect the design.</p>
                                    </div> 
                                </div>
                                <div>
                                    <div>
                                        <h4>Custom Section Development</h4>
                                        <p>Through extensive research into Shopify's backend architecture, we developed custom sections and blocks that functioned identically to Shopify's built-in components. These custom elements maintained the same drag-and-drop functionality and editing interface that Ju was familiar with, ensuring seamless integration with her workflow.</p>
                                    </div>
                                    <div>
                                        <h4>Documentation and Knowledge Transfer</h4>
                                        <p>Understanding that our involvement was time-limited, we created comprehensive documentation covering all custom implementations, CSS modifications, and component functionality. This documentation serves as both a reference guide and a training manual for Ju's future website management.</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="user-testing-section">
                    <AegelissUserTesting/>
                </section>
                <section className="results-and-impact">
                    <h2>Results and Impact</h2>
                    <h3>Project Deliverables</h3>
                    <p>After six months of intensive research and design, our team delivered comprehensive solutions that directly addressed the gaps we identified in dementia care resources. We provided Ju Tu with a detailed research report documenting our findings about caregiver needs, cultural barriers, and opportunities for Montessori-inspired approaches to dementia care. Most importantly, we designed and developed a fully functional website on Shopify that now serves as Aegeliss's primary digital presence and e-commerce platform.</p>
                    <h3>Successful Knowledge Transfer</h3>
                    <p>The website implementation prioritized Ju's long-term independence, ensuring she could confidently manage content updates, product listings, and customer communications without ongoing technical support. We provided comprehensive documentation and conducted thorough handoff sessions, enabling Ju to continue evolving the platform as her Montessori-inspired product line grows.</p>
                    <h3>Community Impact & Recognition</h3>
                    <p>Our work's significance was validated through multiple community engagements and formal recognition. At the UW Information School Capstone Showcase, our project received two prestigious awards:</p>
                    <ul>
                        <li><b>The Bridge-Builder Award for Equity</b> - recognizing our focus on addressing cultural barriers and accessibility challenges in dementia care</li>
                        <li><b>The Visionary Lens Award for Insightfulness</b> - honoring our innovative application of Montessori principles to digital caregiver support</li>
                    </ul>
                    <h3>Real-World Application</h3>
                    <p>Beyond digital deliverables, our community engagement created tangible impact. Our partnership with Dementia Friends Washington helped surpass their milestone of 4,000 Dementia Friends, while our hands-on volunteering with Elderwise provided authentic insights that directly influenced our design decisions. These experiences validated our research findings and demonstrated the real-world need for the solutions we created.</p>
                </section>
                <section className="key-learnings-and-refelection">
                    <h2>Key Learnings and Reflections</h2>
                    <h3>Balancing Constraints with Vision</h3>
                    <p>This project taught me valuable lessons about navigating competing constraints while maintaining design integrity. Working within Shopify's platform limitations while preserving our user-centered design principles required creative problem-solving and constant prioritization of user needs over technical convenience.</p>
                    <h3>The Power of Community-Centered Research</h3>
                    <p>Our most valuable insights came from direct community engagement, volunteering at Elderwise and hosting the Dementia Friends event provided context that traditional user interviews alone couldn't capture. This reinforced my belief in the importance of immersive research methods when designing for vulnerable populations.</p>
                    <h3>Designing for Dignity</h3>
                    <p>Perhaps most importantly, this project deepened my understanding of how design choices can either reinforce or challenge societal stigmas. Our decision to move away from clinical aesthetics toward warm, dignified visuals wasn't just about preferences, it was about honoring the humanity and capabilities of people living with dementia and their caregivers.</p>
                </section>
                <section className="looking-forward-section">
                    <h2>Looking Forward</h2>
                    <p>The Aegeliss platform now provides Ju Tu with a strong foundation to grow her business while serving dementia caregivers who need accessible, dignified resources. Our research findings continue to inform her product development, ensuring that future Montessori-inspired tools address the real needs we documented throughout our comprehensive research process. 
                        <br></br>This project demonstrated how thoughtful UX research and design can bridge the gap between academic insights and practical solutions that make a meaningful difference in people's lives during some of their most challenging moments.</p>
                    <p>This project was completed as part of the University of Washington Informatics Capstone program under the guidance of professors Clare Hegg and Andrew Neang, whose support and insights were instrumental to our success.</p>
                </section>
            </main>
        </div>
    )
}

export default Aegeliss;