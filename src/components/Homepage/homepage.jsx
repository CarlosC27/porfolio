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
                                 Hello! I’m passionate about building digital experiences that inspire and empower people. With a background in Software Development and User Experience Design, I love crafting solutions that are both intuitive and efficient.
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
                            <img src={images.elotes_polaroid} alt='polaroid of Carlos holding an elote' className="intro-polaroid intro-img-2"/>
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
                                    projectLink="/Projects"
                                    imgSource={project.projectImg}
                                />
                            )}
                    </div>

                </section>
                <section className='about-me-section'>
                    <div className='about-me-text-content'>
                        <h2 className='orange-subtitle'>It's Me! Hi!</h2>
                        <p>
                        I am a first generation student at the University of Washington. I am currently a senior majoring 
                        in Informatics with a focus area in Software Development and Human-Computer Interaction. 
                        I chose this major because of it’s focus on the intersectionality of technology and human values. 
                        I have experience with computer programming, web development, and user experience design.
                        My experience working in the hospitality industry has allowed me to develop an eye for attention to detail and managing multiple tasks in a timely manner. 
                        </p>
                        <AirplaneTextButton to='/About' text='Learn More About Me' image={images.green_pa}/>
                    </div>
                    <img src={images.elotes_polaroid} alt='Carlos holding an elote, polaroid image' className='about-me-section-img' />
                </section>
                <section className='contact-me-section'>
                    <img src={images.picnic_polaroid} alt='Carlos at a picnic, polaroid picture' className='contact-me-section-img'/>
                    <div className='contact-me-text-content'>
                        <h2 className='yellow-subtitle'>Contact Me</h2>
                        <p>
                        I’m always open to chat about school, research or work opportunities, design, programming, pop culture, or simply just networking. 
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
                            <AirplaneTextButton text='GitHub' to="https://github.com/CarlosC27" image={images.green_pa} />
                        </div>
                        <div className='social-link'>
                            <img src={images.green_linkedin_logo} alt='the LinkedIn logo in green' className='social-link-icon'/>
                            <AirplaneTextButton text='LinkedIn' to="https://www.linkedin.com/in/cacs27/" image={images.green_pa} />
                        </div>
                        <div className='social-link'>
                            <img src={images.green_instagram_logo} alt='the Instagram logo in green' className='social-link-icon' />
                            <AirplaneTextButton text='Instagram' to="https://www.instagram.com/carlosjtj13/" image={images.green_pa} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage