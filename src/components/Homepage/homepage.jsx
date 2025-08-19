import React from 'react';
import images from '../../constants/images';
import projects from '../../constants/project-data';
import AirplaneTextButton from '../airplane-text-buttons';
import '../../index.css';
import InfoCard from '../info-cards';

const Homepage = (props) => {
    
    return(
        <div>
            <main className='home-page-content'>
                <section className='intro-section'>
                    <div className='intro-text'>
                        <h1 className='orange-title'>Designing with Purpose,<br/> Coding with Precision</h1>
                        <div className='intro-sub-content'>
                            <h2 className='subtitle'>Carlos Alexis Carrillo-Sandoval</h2>
                            <p className='intro-p'>
                                 Hello! I’m a Product Designer and Developer based in Seattle. I dissect digital problems by analyzing user behavior, technical constraints, and business needs to build solutions that work on multiple levels. My process involves questioning assumptions, testing hypotheses through prototypes, and documenting the reasoning behind design decisions.
                                When I’m not immersed in code or design, you can find me spinning vinyl records, wandering through nature, or capturing life’s moments with my Polaroid camera.
                            </p>
                        </div>
                        <div className='intro-buttons-container'>
                            <AirplaneTextButton to="/Projects" text="View Projects" image={images.green_pa}/>
                            <AirplaneTextButton to="/About" text="More About Me" image={images.green_pa}/>
                            <AirplaneTextButton to="https://www.linkedin.com/in/cacs27/" text="Contact Me" image={images.green_pa}/>
                        </div>
                    </div>
                    <div className='intro-images'>
                            <img src={images.countryBoards_polaroid} alt='polaroid of Carlos' className="intro-polaroid intro-img-1"/>
                            <img src={images.carlos_grad} alt='polaroid of Carlos holdinghis graduation cap' className="intro-polaroid intro-img-2"/>
                    </div>
                </section>
                <section className='recent-projects-section'>
                    <h2 className='yellow-subtitle'>Recent Projects</h2>
                    <div className='project-info-cards'>
                        <div className='spacer'></div>
                            {projects.map((project, index) =>
                                <InfoCard
                                    key={index}
                                    title={project.title}
                                    techStack={project.techStack}
                                    description={project.description}
                                    projectLink={project.projectLink}
                                    imgSource={project.projectImg}
                                />
                            )}
                    </div>

                </section>
                <section className='about-me-section'>
                    <div className='about-me-text-content'>
                        <h2 className='orange-subtitle'>It's Me! Hi!</h2>
                        <p>
                        As a recent University of Washington graduate with a Bachelor's degree in Informatics, I specialize in Software Development and Human-Computer Interaction. My academic focus centered on the critical intersection of technology and human values, driving my passion for creating digital solutions that prioritize user needs. I bring hands-on experience in computer programming, web development, and user experience design, complemented by strong project management and detail-oriented problem-solving skills developed through my background in hospitality management.
                        </p>
                        <AirplaneTextButton to='/About' text='Learn More About Me' image={images.green_pa}/>
                    </div>
                    <img src={images.ash_and_i} alt='Carlos meeting his favorite youtuber Ashley Ippolito' className='about-me-section-img' />
                </section>
                <section className='contact-me-section'>
                    <img src={images.joe_and_i_polaroid} alt='Carlos at a picnic, polaroid picture' className='contact-me-section-img'/>
                    <div className='contact-me-text-content'>
                        <h2 className='yellow-subtitle'>Contact Me</h2>
                        <p>
                        I’m always open to chat about work opportunities, collaborations, design, programming, pop culture, or simply just networking. 
                        Please feel free to reach out and include as much information as possible so I can respond appropriately.
                        </p>
                        <AirplaneTextButton to="mailto:carlos.cs.2799@gmail.com" text='Email me at carlos.cs.2799@gmail.com' image={images.cream_pa}/>
                    </div>
                </section>
                <section className='cme-section'>
                    <h3 className='cme-title'>Contact Me Elsewhere</h3>
                    <div className='socials-container'>
                        <div className='social-link'>
                            <img src={images.green_github_logo} alt='the GitHub logo in green' className='social-link-icon'/>
                            <AirplaneTextButton text='GitHub' external={true} to="https://github.com/CarlosC27" image={images.green_pa} />
                        </div>
                        <div className='social-link'>
                            <img src={images.green_linkedin_logo} alt='the LinkedIn logo in green' className='social-link-icon'/>
                            <AirplaneTextButton text='LinkedIn' external={true} to="https://www.linkedin.com/in/cacs27/" image={images.green_pa} />
                        </div>
                        <div className='social-link'>
                            <img src={images.green_instagram_logo} alt='the Instagram logo in green' className='social-link-icon' />
                            <AirplaneTextButton text='Instagram'external={true} to="https://www.instagram.com/carlosjtj13/" image={images.green_pa} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage