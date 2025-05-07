import React, { useState } from 'react';
import images from '../../constants/images';
import '../../index.css'
import InfoCard from '../info-cards';
import projects from '../../constants/project-data';

const Projects = (props) => {
    return(
        <div>
            <main className='project-page-content'>
                <section className='project-intro-section'>
                    <div className='project-intro-text'>
                        <h1 className='orange-title'>The Carlos Collection</h1>
                        <p>
                            Here lies a collection of my most recent projects that I’m proud to share. 
                            Some of these challenged me to learn new skills on the fly, while others gave me the chance to really showcase what I’m capable of. 
                            A few are even works in progress that I revisit and refine, because practice makes perfect, right? Each project tells a story of 
                            creativity, problem-solving, and a little bit of late-night coding magic. So sit back, explore, and enjoy the show! 🎬✨
                        </p>
                    </div>
                    <img src={images.mascota_polaroid} alt='of carlos in the town of Masocta Jalisco' className='project-intro-img'/>
                </section>
                <section className='project-page-info-cards'>
                    <div className='projects-row-1'>
                        <InfoCard 
                            title={projects.at(0).title}
                            techStack={projects.at(0).techStack}
                            description={projects.at(0).description}
                            projectLink={projects.at(0).projectLink}
                            imgSource={projects.at(0).projectImg} 
                            />
                         <InfoCard 
                            title={projects.at(4).title}
                            techStack={projects.at(4).techStack}
                            description={projects.at(4).description}
                            projectLink={projects.at(4).projectLink}
                            imgSource={projects.at(4).projectImg} 
                            />
                       
                    </div>
                    <div className='projects-row-2'>
                        <InfoCard 
                            title={projects.at(1).title}
                            techStack={projects.at(1).techStack}
                            description={projects.at(1).description}
                            projectLink={projects.at(1).projectLink}
                            imgSource={projects.at(1).projectImg} />
                         <InfoCard 
                            title={projects.at(5).title}
                            techStack={projects.at(5).techStack}
                            description={projects.at(5).description}
                            projectLink={projects.at(5).projectLink}
                            imgSource={projects.at(5).projectImg} />
                    </div>
                    <div className='projects-row-3'>
                        <InfoCard 
                            title={projects.at(3).title}
                            techStack={projects.at(3).techStack}
                            description={projects.at(3).description}
                            projectLink={projects.at(3).projectLink}
                            imgSource={projects.at(3).projectImg} />
                         <InfoCard 
                            title={projects.at(2).title}
                            techStack={projects.at(2).techStack}
                            description={projects.at(2).description}
                            projectLink={projects.at(2).projectLink}
                            imgSource={projects.at(2).projectImg} />
                    </div>
                    <div className='projects-row-4'>
                        <InfoCard 
                            title={projects.at(7).title}
                            techStack={projects.at(7).techStack}
                            description={projects.at(7).description}
                            projectLink={projects.at(7).projectLink}
                            imgSource={projects.at(7).projectImg} />
                         <InfoCard 
                            title={projects.at(6).title}
                            techStack={projects.at(6).techStack}
                            description={projects.at(6).description}
                            projectLink={projects.at(6).projectLink}
                            imgSource={projects.at(6).projectImg} />
                    </div>
                </section>
                <section className='website-dev-journey'>
                    <p className='wdj-p'>
                        And yes, this website was designed and developed by yours truly.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default Projects