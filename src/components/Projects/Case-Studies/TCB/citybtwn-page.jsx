import React from "react";
import images from "../../../../constants/images";
import citybtwnimgs from "../../../../constants/citybtwn-imgs";
import projects from "../../../../constants/project-data";
import AirplaneTextButton from "../../../airplane-text-buttons";
import ImageCarousel from "../../../image-carousel";
import "./city-between.css";

const TheCityBetween = (props) => {

    const ellensPhotos = [citybtwnimgs.el_ph_11, citybtwnimgs.el_ph_2, citybtwnimgs.el_ph_3, citybtwnimgs.el_ph_4, citybtwnimgs.el_ph_5, citybtwnimgs.el_ph_6, citybtwnimgs.el_ph_7, citybtwnimgs.el_ph_8, citybtwnimgs.el_ph_9, citybtwnimgs.el_ph_10, citybtwnimgs.el_ph_1];
    const myDrawings = [citybtwnimgs.mt_rainier_sketch, citybtwnimgs.paddle_board_sketch, citybtwnimgs.sun_and_rain_sketch, citybtwnimgs.tacoma_sketch, citybtwnimgs.cherry_blossom_sketch];
    const postcarditeration = [citybtwnimgs.postcard_front_v2, citybtwnimgs.postcard_back];
    const magazine_pages = [citybtwnimgs.article_p1_v1, citybtwnimgs.article_p1_v2, citybtwnimgs.article_p2_v1, citybtwnimgs.article_p2_v2];

    return(
        <div>
            <main className="tcb-page">
                <section className="tcb-intro">
                    <div className="tcb-intro-text">
                        <div className="tcb-title-and-img">
                            <div className="tai-text">
                                <h1>The City Between Article</h1>
                                <h2>Designing a love letter to Tacoma for Grit City Magazine Issue 23</h2>
                            </div>
                            <img src={citybtwnimgs.postcards} alt="The City Between Postcard front and back" className="hero-img"/>
                        </div>
                        <div className="tpsmy">
                            <p><b>Timeline</b>: July 2024 - August 2024</p>
                            <p><b>Project Scope:</b> {projects.at(3).projectType}</p>
                            <p><b>My Role</b>: Layout Designer</p>
                        </div>
                        <div className="tech-stack-container">
                            <p><b>Tech Stack:</b></p>
                            <div className="tech-stack-items"> 
                                <p className="ts-item">InDesign</p>
                                <p className="ts-item">Photoshop</p>
                                <p className="ts-item">Illustrator</p>
                                <p className="ts-item">Figma</p>
                            </div>
                        </div>
                        <p><b>Collaborators:</b> Sierra Hartman, Katie Meadows, Adam Auter, and Cari Schindler</p>
                       <p>{projects.at(3).description}</p>
                    </div>
                </section>
                <section className="about-gcm-section">
                    <div className="about-gcm-text">
                        <h2>About Grit City Magazine</h2>
                        <p>Grit City Magazine, founded on the belief that Tacoma has incredible stories to tell, releases quarterly issues celebrating the city's culture and community. During my internship at Rotator Creative (who handles GCM's layout design), I was given the opportunity to contribute to their 23rd issue.</p>
                    </div>
                    <img src={citybtwnimgs.gcm_logo} alt="Grit City Magazine Logo"/>
                </section>
                <section className="the-challenge-section">
                    <h2>The Challenge</h2>
                    <p>This was my <b>first major print design project</b> and only my second time using InDesign. I needed to:</p>
                    <ul className="the-challenge-list">
                        <li className="challenge-item">Create a layout that matched the article's intimate, personal tone</li>
                        <li className="challenge-item">Work within Grit City Magazine's established brand guidelines</li>
                        <li className="challenge-item">Collaborate effectively with experienced editors and designers</li>
                        <li className="challenge-item">Learn new technical skills while delivering professional-quality work</li>
                    </ul>
                </section>
                <section className="process-and-design-section">
                    <h2>My Approach: Concept-Driven Design</h2>
                    <h3>The "Aha" Moment</h3>
                    <p>Sitting in the editorial meeting, listening to the content overview, I was struck by how the article truly felt like a love letter to Tacoma, written with both affection and sardonic wit. This insight became my design north star.</p>
                    <p><b>Core Concept:</b> Design the layout as if it were an actual letter</p>
                    <h2 className="padd-title">Process and Design Decisions</h2>
                    <div className="typography-section">
                        <div className="typography-text">
                            
                        </div>
                        <div className="typography-list-and-img">
                            <div className="tlai-text">
                                <h3 className="typography-title">Typography as Voice</h3>
                                <h4>Primary font choice:  <span className="swanky-font">Swanky and Moo Moo</span></h4>
                                <ul className="font-rationale-list">
                                    <li className="frl-item">Handwritten style that reinforced the personal letter concept</li>
                                    <li className="frl-item">Added warmth and intimacy to contrast with the sardonic tone</li>
                                    <li className="frl-item">Created visual hierarchy while maintaining the personal feeling</li>
                                </ul>
                            </div>
                            <img src={citybtwnimgs.samm_font} alt="swanky and moo moo font from a to z"/>
                        </div>
                        
                    </div>
                    <div className="ds-main">
                        <h3>Hand-drawn Illustration Elements</h3>
                        <h4>Personal touches that enhanced the letter concept:</h4>
                            <div className="drawings-section">
                                <div className="drawings-text">
                                    <ul className="drawing-rational-list">
                                        <li className="drl-item">Simple line drawings of local landmarks</li>
                                        <li className="drl-item">Weather elements (sun, clouds, rain) that referenced the Pacific Northwest climate</li>
                                        <li className="drl-item">Small decorative flourishes that felt like margin doodles in a personal journal</li>
                                        <li className="drl-item">These elements bridged the gap between the polished photography and intimate letter aesthetic</li>
                                    </ul>
                                </div>
                                <ImageCarousel
                                images={myDrawings}
                                primaryColor="#2C394C"
                                secondaryColor="#D5D1C5"
                                buttonColor="#D5D1C5"
                                width="max-content"
                                className="cb-sketches"
                                />
                        </div>
                    </div>
                    <div className="photography-section">
                        <div className="photography-text">
                            <h3>Photography Integration</h3>
                            <p><b>Photographer:</b> Ellen Rummel</p>
                            <p><b>Style direction:</b> Ellen's photography had a nostalgic quality perfect for the letter concept</p>
                            <p><b>Added Design Concept:</b> "Taped" photos onto the page</p>
                            <ul className="photography-rational-list">
                                <li className="prl-item">Created a crafted, personal scrapbook aesthetic using realistic tape effects</li>
                                <li className="prl-item">Made the layout feel like someone had carefully curated memories in a personal collection</li>
                                <li className="prl-item">Added tactile quality appropriate for print medium</li>
                                <li className="prl-item">Mixed scenic and urban photography to reflect the article's theme of contradictions</li>
                            </ul>
                        </div>
                        <div className="ellens-work">
                            <ImageCarousel
                            images={ellensPhotos}
                            primaryColor="#2C394C"
                            secondaryColor="#D5D1C5"
                            buttonColor="#D5D1C5"
                            className="ellens-photos"
                            />
                            <AirplaneTextButton to="https://www.instagram.com/ellenrumel/?hl=en" text="Checkout more of Ellen's work here" image={images.tcb_pa}/>
                        </div>
                    </div>
                    <div className="postcard-section">
                        <div className="postcard-text">
                            <h3>The Postcard Element: "Greetings from THE CITY BETWEEN"</h3>
                            <p><b>Concept:</b> Custom vintage postcard as the visual centerpiece</p>
                            <ul className="postcard-rational-list">
                                <li className="pcrl-item">Created a large-format postcard reading "Greetings from THE CITY BETWEEN" using classic postcard lettering</li>
                                <li className="pcrl-item">Sealed the "letter" metaphor both literally and visually</li>
                                <li className="pcrl-item">The postcard title directly referenced the article's exploration of Tacoma's in-between status</li>
                            </ul>
                            <p><b>Visual storytelling: </b>The contrast between the nostalgic, scenic postcard and raw urban photography (like the weathered payphone booth) perfectly embodied the article's central theme about how Tacoma "pairs promise and catastrophe."</p>
                        </div>
                        <ImageCarousel
                            images={postcarditeration}
                            primaryColor="#2C394C"
                            secondaryColor="#D5D1C5"
                            buttonColor="#D5D1C5"
                            className="postcard-iterations"
                            />
                    </div>
                </section>
                <section className="collaboration-section">
                    <h2>Collaborative Learning Process</h2>
                    <p>This project became an intensive masterclass in print design, facilitated by the generous Grit City Magazine and Rotator Creative team:</p>
                    <div className="collab-grid">
                        <div className="sierra">
                            <p><b>Sierra Hartman (Editor):</b> Provided content guidance and ensured design supported editorial vision through multiple critique rounds</p>
                        </div>
                        <div className="katie">
                            <p><b>Katie Meadows (Lead Designer):</b> Mentored my InDesign learning process</p>
                            <ul className="katies-list">
                                <li className="kl-item">Taught essential print design technical skills</li>
                                <li className="kl-item">Ensured layouts adhered to Grit City Magazine brand standards</li>
                                <li className="kl-item">Guided typography and grid system understanding</li>
                            </ul>
                        </div>
                        <div className="adam">
                            <p><b>Adam Auter (Designer):</b> Advanced my illustration capabilities</p>
                            <ul className="adams-list">
                                <li className="al-list">Showed proper techniques for transforming sketches into vector graphics</li>
                                <li className="al-list">Taught consistency in illustration style and execution</li>
                                <li className="al-list">Helped refine early concepts that included hand-drawn elements</li>
                            </ul>
                        </div>
                        <div className="cari">
                            <p><b>Cari Schindler (Designer):</b> Collaborated specifically on postcard design development</p>
                            <ul className="caris-list">
                                <li className="cl-item">Provided feedback on concept execution</li>
                                <li className="cl-item">Helped refine the integration of photographic and graphic elements</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="growth-section">
                    <h2>Technical Growth</h2>
                    <div className="new-skilss">
                        <h3>New skills developed:</h3>
                        <ul className="new-skills-list">
                            <li className="nsl-item">InDesign proficiency for professional print layouts</li>
                            <li className="nsl-item">Vector illustration techniques in Illustrator</li>
                            <li className="nsl-item">Print design best practices and brand adherence</li>
                            <li className="nsl-item">Collaborative design critique and iteration process</li>
                        </ul>
                    </div>
                    <div className="process-iterations">
                        <h3>Process Iterations:</h3>
                        <ul className="process-iterations-list">
                            <li className="pil-item">Initial concepts included hand-drawn sketches that didn't make the final cut</li>
                            <li className="pil-item">Multiple rounds of refinement based on team feedback</li>
                            <li className="pil-item">Learned to balance creative vision with practical print requirements</li>
                        </ul>
                    </div>
                </section>
                <section className="final-product-section">
                    <div className="final-product-text">
                        <h2>Final Product</h2>
                        <p>The completed layout successfully transformed "City Between" into a visual love letter to Tacoma, featuring:</p>
                        <p><b>Custom "Greetings from THE CITY BETWEEN" postcard</b> serving as the visual anchor and direct reference to the article's theme</p>
                        <p><b>Cohesive letter aesthetic</b> with handwritten typography, realistic tape effects, and personal memorabilia feel</p>
                        <p><b>Strategic photography curation</b> mixing Ellen Rumel's nostalgic scenic shots with gritty urban imagery that captured Tacoma's contradictions</p>
                        <p><b>Seamless brand integration</b> maintaining Grit City Magazine's high editorial standards while creating something distinctly personal</p>
                        <p><b>Professional print execution</b> with proper color management, typography, and layout techniques learned through collaborative feedback</p>
                    </div>
                    <ImageCarousel
                            images={magazine_pages}
                            primaryColor="#2C394C"
                            secondaryColor="#6b84a9"
                            buttonColor="#6b84a9"
                            className="magazine-iterations"
                            />
                </section>
                <section className="impact-and-learnings">
                    <h2>Impact and Learnings</h2>
                        <div className="ial-container">
                            <div className="ial-text">
                                <p><b>For the publication:</b> Created a layout that enhanced the article's emotional impact and reader connection</p>
                                <p className="fmd-p"><b>For my development:</b></p>
                                <ul className="my-development-list">
                                    <li className="mydl-item">Gained confidence in conceptual thinking, connecting content insight to design approach</li>
                                    <li className="mydl-item">Developed print design skills that differentiate me in a digital-heavy field</li>
                                    <li className="mydl-item">Learned the value of collaborative feedback in refining design ideas</li>
                                    <li className="mydl-item">Experienced the full print production process from concept to published piece</li>
                                </ul>
                            </div>
                            <img src={citybtwnimgs.article_mock_up} alt="the city between article mockup"/>
                        </div>
                    <p><b>Key insight:</b> The strongest designs often come from truly understanding and connecting with the content, not just making it look good.</p>
                </section>
                <section className="reflection-section">
                    <h2>Reflection</h2>
                    <p>This project taught me that great design starts with great listening. By really hearing what "City Between" was trying to say about Tacoma's identity as a place of contradictions, I could create a layout that didn't just contain the content, it amplified it.</p>
                    <div>
                        <p><b>The design choices directly supported the editorial voice:</b></p>
                        <ul className="design-choices-list">
                            <li className="dcl-item">The vintage postcard ("Greetings from THE CITY BETWEEN") celebrated Tacoma's tourist-worthy beauty while the title acknowledged its liminal status</li>
                            <li className="dcl-item">Juxtaposing scenic photography with raw urban imagery (weathered payphones, everyday street scenes) visually represented the author's point about how Tacoma "pairs promise and catastrophe"</li>
                            <li className="dcl-item">The handwritten aesthetic and taped photos made readers feel like they were reading an actual personal letter; intimate and authentic rather than polished marketing</li>
                        </ul>
                    </div>
                    <div className="team-work-and-img">
                        <div className="twai-text">
                            <p>Working within the supportive but demanding environment of experienced designers pushed me to grow quickly while maintaining high standards. The collaborative critique process showed me how constructive feedback makes work stronger, not just different.</p>
                            <p>Most importantly, this project gave me deep appreciation for print design's unique requirements and opportunities. In our digital world, there's something special about creating something people can hold, feel, and experience physically, especially when designing for a community-focused publication like Grit City Magazine.</p>
                        </div>
                        <img src={citybtwnimgs.contribution_note} alt="Rotator's conrtibution acknowledgement for Carlos' work in Grit City Magazine's 23rd issue"/>
                    </div>
                    <blockquote><em>Getting to contribute to a publication that celebrates Tacoma's stories felt like the perfect intersection of design, community, and craft, exactly why I'm passionate about design that serves real people and places.</em></blockquote>
                </section>
                <section className="get-your-copy-section">
                    <div className="gcm-text-and-img">
                        <div className="gcmtai-text">
                            <h2>Get Your Copy!</h2>
                            <p>Get your own copy of the 23rd Issue...or many more.</p>
                            <p>Grit City Magazine is available through their website, with each issue containting unique stories and imagery. You can buy individual issues or subscribe and recieve an issue each quarter!</p>
                            <AirplaneTextButton to="https://gritcitymag.com/" text="Get Your Magazine Here" image={images.tcb_pa}/>
                        </div>
                        <img src={citybtwnimgs.issue_23_cover} alt="Grit City Magazine's 23rd issue" className="gcm23"/>
                    </div>
                    
                </section>
            </main>
        </div>
    )
}

export default TheCityBetween;