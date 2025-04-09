import React, { useState } from 'react';
import AirplaneTextButton from '../airplane-text-buttons';
import '../../index.css';
import JouneyCard from '../journey-card';
import images from '../../constants/images';
import logos from '../../constants/logo-images'


const About = (props) => {
    const icons = [logos.after_effects_logo, logos.swift_logo, logos.android_studio_logo, logos.sql_logo, logos.css_logo, logos.react_logo, logos.figma_logo, logos.python_logo, logos.firebase_logo, logos.postgre_logo,
        logos.git_logo, logos.photoshop_logo, logos.html_logo, logos.node_js_logo, logos.illustator_logo, logos.mongo_db_logo, logos.indesign_logo, logos.miro_logo, logos.java_logo, logos.kotlin_logo, logos.javascript_logo]
    return(
        <div>
            <main className='about-page-content'>
                <section className='about-intro-section'>
                    <div className='about-intro-img'>
                        <img src={images.mascota_polaroid} alt='polaroid of Carlos in Mascota, Jalisco' className="about-intro-polaroid about-img-1"/>
                        <img src={images.picnic_polaroid} alt='polaroid of Carlos at a picnic' className="about-intro-polaroid about-img-2"/>
                    </div>
                    <div className='title-profile-img-text'>
                        <div className='airplane-to-img'>
                            <h1 className='orange-title'>It's Me! Hi!</h1>
                            <img className='about-headshot' src={images.profile_picture} alt='A headshot of Carlos'/>
                        </div>
                        {/* <div className='intro-about-text'> */}
                            <p className='about-intro-p'>
                            I am <strong>Carlos Alexis Carrillo-Sandoval</strong>, a <strong>designer</strong> and <strong>developer</strong> based in <strong>Seattle</strong>. I’m in my final quarter at the <em>University of Washington</em>,
                            where I will be earning my Bachelor of Science in Informatics. Throughout my academic journey, I’ve honed my skills in <strong>web</strong> and <strong>mobile development</strong>
                            while also exploring <strong>product</strong> and <strong>user experience design</strong>. I thrive on tackling complex problems with a thoughtful approach, transforming ideas from 
                            concept to reality while balancing functionality and user experience.
                            </p>
                        {/* </div> */}
                    </div>
                </section>
                <section className='skills-section'>
                    <h2 className='skills-title'>My Coding & Crafting Kit  💻</h2>
                    <div className='icon-strip'>
                        <div className='icons-wrapper-left'>
                        {[...icons, ...icons].map((icon, index) => (
                            <img src={icon} alt={`icon-${index}`} className='img-icon' key={index}/>
                        ))}                            
                        </div>
                    </div>
                    <div className='my-skills'>
                        <div className='technical-skills'>
                            <h3>💻 Technical Skills:</h3>
                            <h4>Programming Languages & Frameworks</h4>
                            <ul>
                                <li><strong>Backend:</strong> Node.js,  Express.js</li>
                                <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript</li>
                                <li><strong>Mobile Development:</strong> Kotlin, Android Studio</li>
                                <li><strong>General Purpose Languages:</strong> Java, Python</li>
                            </ul>
                            <h4>Databses & Data Management:</h4>
                            <ul>
                                <li><strong>SQL Databases:</strong> PostgreSQL</li>
                                <li><strong>NoSQL Databases:</strong> MongoDB, Firebase</li>
                            </ul>
                            <h4>Version Control</h4>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                        <div className='design-skills'>
                            <h3>🎨 Design & User Experience:</h3>
                            <div className='design-skills-columns'>
                                <div className='design-skill-1'>
                                    <h4>Design Tools</h4>
                                    <ul>
                                        <li>Figma</li>
                                        <li>Axure</li>
                                        <li>Miro</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe Illustrator</li>
                                        <li>Adobe InDesign</li>
                                        <li>Adobe After Effects</li>
                                    </ul>
                                </div>
                                <div className='design-skill-2'>
                                    <h4>UX/UI Design</h4>
                                    <ul>
                                        <li>Wireframing</li>
                                        <li>Prototyping</li>
                                        <li>Mockups</li>
                                        <li>User Flow Mapping</li>
                                        <li>Interaction Design</li>
                                        <li>Responsive & Mobile Design</li>
                                        <li>Accessibility & Inclusive Design</li>
                                    </ul>
                                </div>
                            </div>
                            <h4>Design Techniques:</h4>
                            <ul>
                                <li>Information Architecture</li>
                                <li>Value Sensitive Design</li>
                                <li>Usability Testing</li>
                                <li>User Research</li>
                            </ul>
                        </div>
                        <img src={images.keyboard_temp} alt='hands on keyboard' className='keyboard-img'/> 
                    </div>
                    <div className='icon-strip'>
                        <div className='icons-wrapper-right'>
                        {[...icons, ...icons].map((icon, index) => (
                            <img src={icon} alt={`icon-${index}`} className='img-icon' key={index}/>
                        ))}                            
                        </div>
                    </div>
                </section>
                <section className='my-journey-section'>
                    <h2 className='small-orange-title'>My Journey</h2>
                    <div className='scroll-container'>
                    <div className="timeline-scroll-wrapper">
                        <div className='timeline-section'>
                            <JouneyCard
                                date="2016"
                                title="The Beggining"
                                imgSource={images.mexico_and_friends}
                                altText="Carlos and his friends in Mexico at a school event"
                                paragraph="My journey toward earning this degree began during my sophomore year of high school in Mexico, where I was living in my family’s hometown of Las Varas, Nayarit. There, I studied graphic design before pivoting to computer programming in my junior year—a decision that instantly sparked my passion."
                            />

                            <div className="cream-journey-card">
                            <JouneyCard
                                date="2016"
                                title="Discovering Programming"
                                imgSource={images.unity}
                                altText="the Unity software"
                                paragraph="My introduction to programming came through game design and development using Unity and C#, and I was captivated by the process of bringing ideas to life through code."
                            /></div>   

                            <JouneyCard
                                date="2017-2021"
                                title="Returning to Washington"
                                imgSource={images.highschool}
                                altText="Carlos graduating from federal way highschool"
                                paragraph="Eventually, I moved back to Washington and completed high school at Federal Way High School. After that, I attended Highline College, where I earned my Associate’s degree in Computer Science through dedication and persistence."
                            />

                            <div className="cream-journey-card">
                            <JouneyCard
                                date="2023"
                                title="Finding My Path at UW"
                                imgSource={images.dubs_and_I}
                                altText="Carlos and the UW mascot Dubs the husky"
                                paragraph="Following a gap year, I was accepted into the University of Washington. While my initial goal was to study Computer Science, fate had other plans. Though I was disappointed at first, not being admitted to the program turned out to be a blessing in disguise."
                            /></div>     

                            <JouneyCard
                                date="2024"
                                title="Embracing Informatics"
                                imgSource={images.uw_tacoma}
                                altText="Carlos sitting on the steps of UW Tacoma campus"
                                paragraph="I discovered the Informatics program instead, which has given me the opportunity to explore a broader range of software development and design concepts than I could have in Computer Science."
                            />   

                            <div className="cream-journey-card">
                            <JouneyCard
                                date="2024"
                                title="Gaining Real-World Experience"
                                imgSource={images.rotator}
                                altText="the office of Rotator Creative"
                                paragraph="I interned at Rotator Creative, where my main task was to redesign their website, creating a modern and user-friendly experience. As a side project, I also designed an article layout for Grit City Magazine, collaborating closely with the team to bring the story to life. In addition, I worked on personal projects to further develop my skills in software development and design."
                            /></div> 

                            <JouneyCard
                                date="2025"
                                title="Building Connections"
                                imgSource={images.capstone_team}
                                altText="Carlos and his capstone team"
                                paragraph="Throughout my time in the program, I’ve met incredible peers who have enriched my learning experience through collaboration on coursework and projects. One of the most rewarding experiences has been working on my capstone with a startup called Aegeliss, where we focus on creating solutions to support care within the memory loss community."
                            />   

                            <div className="cream-journey-card">
                            <JouneyCard
                                date="2025"
                                title="Reflecting on the Journey"
                                imgSource={images.cherry_blossoms_uw}
                                altText="Carlos at UW Seattle campus, at the quad during cherry blossom season"
                                paragraph="Looking back, I’m grateful for how my path unfolded, as it led me to where I am today—equipped with a diverse skill set and a passion for creating thoughtful, impactful solutions. With graduation approaching in June, I’m excited to see where my journey takes me next."
                            /></div> 

                        </div>
                        </div>
                        </div>
                        <div className='behind-the-screen-section'>
                            <h2 className='small-orange-title'>Behind the Screen</h2>
                            <div className='more-about-me-images'></div>
                            <div className='more-about-me-text'>
                                <h3>🌑 Stories, Hobbies, and a Few Record Spins 🪐</h3>
                                <p>When I’m off screen, you’ll find me spending quality time with my fiancé Joseph, our dog Bella, 
                                    and our circle of family and friends. I’ve recently jumped back into my fitness journey, staying
                                    active whenever I can. I love to travel and explore new places—New York has been my favorite recent adventure. 
                                    On sunny days in our rainy city, I’m usually out hiking, soaking up nature. And when I’m not on the trails, you 
                                    can spot me digging through vinyl bins at local record shops, always on the hunt for a new gem.</p>
                            </div>
                        </div>
                    <div className='dancing-through-life-section'>
                        <div className='dancing-through-life-text'>
                            <h3>🪩 Dancing Through Life 🪩</h3>
                            <p>As you can probably tell, I’m a huge music lover—and yes, that means I’m absolutely obsessed with concerts. If one of my 
                                favorite artists is performing, you can bet I’ll be there. My favorite artist of all time is Taylor Swift, and I was lucky
                                 enough to experience the magic of the Eras Tour not once, but twice. (Still recovering, honestly.)</p>
                            <p>Some of my other unforgettable shows include the Future Nostalgia Tour, the YSUFT Tour, the Solar power Tour,  the NFR Tour,
                                 and the Emails I Can’t Send Tour. I’m also always down for a musical or a drag show—anything that brings good vibes and great performances! 🎶</p>
                        </div>
                        <div className='dancing-through-life-images'></div>
                    </div>
                    <div className='travel-section'>
                        <div className='travel-images'></div>
                        <div className='travel-text'>
                            <p>I’m lucky enough to call two places home—Washington and Las Varas, Nayarit, Mexico. Having both has given me a unique blend of perspectives and experiences. 
                                I love living in the Emerald City, where city life hums with energy but the surrounding forests and mountains offer a peaceful escape when I need to recharge. There’s nothing quite like a sunny hike to remind me why I love this place.
                                Once a year, I make my way down to Las Varas to visit my mom and family, soaking up the coastal vibes and stepping away from the busyness of life. It’s my little slice of paradise where I can slow down and reconnect.
                                Traveling fuels my soul, and I can’t wait to see more of the world after graduation. There’s just something about new places and new faces that keeps me curious and craving adventure. ✈️🌎</p>
                        </div>
                    </div>
                    <div className='record-and-music-section'>
                        <div className='record-and-music-text'>
                            <h3>✨It's a new soundtrack, I could dance to✨
                            ✨this beat, beat forevermore✨</h3>
                            <p>There's just something magical about dropping the needle on a record and hearing the crackle before the music kicks in. Collecting records is more than just a hobby for me—it’s like curating the soundtrack of my life. Some albums just hit 
                                differently when they’re spinning on a turntable. A few of my favorites include Fearless and Red (Taylor's Version), Midnights, Folklore, and Manic. Each one holding a special place in my collection. I’m also obsessed with Short n’ Sweet,
                                 NFR, Brat, Melodrama, Eternal Sunshine,  The Good Witch, and Punisher. I’m always on the lookout for unique variants and special pressings that make my collection feel even more personal. Whether it’s limited editions or colored vinyl, I
                                  just love the feeling of owning a piece of music history. Catch me flipping through bins at the local record shop—I’ll probably be obsessing over the latest find or debating whether I really need that splatter variant (spoiler: I do). 🎶</p>
                        </div>
                        <div className='record-and-music-images'></div>
                    </div>
                </section>
                <section className='lets-chat'>
                    <h2>Let's Chat!</h2>
                    <div className='lets-chat-text-and-buttons'>
                        <p>Feel free to reach out—I’m always happy to meet new people and strike up a good conversation! Whether it’s about work opportunities, concert experiences, record stores, travel plans, or anything in between, I’m all ears. Let’s connect and share stories—I’d love to hear from you! 🎉</p>
                        <div className='lets-chat-buttons'>
                            <AirplaneTextButton to="mailto:carlos.cs.2799@gmail.com" text='Email me at carlos.cs.2799@gmail.com' image={images.green_pa}/>
                            <AirplaneTextButton text='Connect with me on LinkedIn' to="https://www.linkedin.com/in/cacs27/" image={images.green_pa} />
                            <AirplaneTextButton text='Follow me on Instagram' to="https://www.instagram.com/carlosjtj13/" image={images.green_pa} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About