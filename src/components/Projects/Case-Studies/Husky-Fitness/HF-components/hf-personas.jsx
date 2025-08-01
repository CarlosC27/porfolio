import React, {useState} from 'react'
import hfImgs from '../../../../../constants/hf-imgs';
import './hf-personas.css'

const HfUserPersonas = () =>{
    const [activePersona, setActivePersona] = useState('A');

    const personas = {
        A: {
            name: "Austin Smith",
            title: "Motivated Beginner",
            image: hfImgs.austin_smith,
            background: {
                age: "19, Undergraduate Student",
                experience: "New to structured fitness routines",
                motivation: "Desperately wants to establish a consistent workout routine",
                challenge: "Feels overwhelmed by gym culture complexity and social dynamics"
            },
            painPoints: "Austin feels intimidated by the gym environment and fears appearing inexperienced in front of others. He's uncertain about proper exercise form and safety protocols, which prevents him from fully utilizing the IMA facilities. The complexity of gym equipment and unspoken social rules create barriers that keep him from achieving his fitness goals.",
            keyNeed: "I need guidance on proper techniques and a supportive environment where I can build confidence without feeling judged.",
            bgColor: "bg-amber-100",
            textColor: "text-amber-800",
            theme: "persona-a",
            layout: "image-left"
        },
        B: {
            name: "Genesis Swift",
            title: "Time-Constrained Achiever",
            image: hfImgs.genesis_swift,
            background: {
                age: "21, Senior Computer Science Student",
                experience: "Former basketball player with athletic background",
                situation: "Lives off-campus while managing heavy academic workload",
                challenge: "Struggling to balance fitness goals with time constraints"
            },
            painPoints: "Despite her athletic experience, Genesis struggles with time management and coordinating her off-campus lifestyle with gym access. Her demanding senior-level coursework leaves little time for fitness, and she needs efficient, optimized workout solutions. The scheduling challenges and travel time to campus create additional barriers to maintaining her fitness routine.",
            keyNeed: "I need intelligent scheduling and optimization features that help me maximize my limited time while maintaining my fitness goals.",
            bgColor: "bg-purple-600",
            textColor: "text-purple-100",
            theme: "persona-b",
            layout: "image-right"
        },
        C: {
            name: "Sebastian Gomez",
            title: "Helpful Expert",
            image: hfImgs.sebastian_gomez,
            background: {
                age: "20, Sports Medicine Student",
                role: "Part-time IMA staff member",
                expertise: "Knowledgeable about fitness and facility operations",
                position: "Dual perspective as both user and staff member"
            },
            painPoints: "Sebastian is often overwhelmed by the volume of individual assistance requests while trying to maintain facility safety and organization. His dual role reveals operational challenges that affect the overall user experience. He wants to help as many people as possible but struggles with the demands of facility management and the need to provide personalized guidance to users with varying experience levels.",
            keyNeed: "I need tools and systems that help me assist more users efficiently while maintaining high safety standards and facility organization.",
            bgColor: "bg-indigo-200",
            textColor: "text-indigo-800",
            theme: "persona-c",
            layout: "image-left"
        }
    }

    const currentPersona = personas[activePersona];

    return(
        <div className={`personas-container ${currentPersona.theme}`}>
            <div className='personas-wrapper'>
                <h2 className='personas-title'>User Personas</h2>
                <div className='toggle-container'>
                    <div className='toggle-buttons'>
                        <button onClick={()=> setActivePersona('A')} className={`toggle-btn ${activePersona === 'A' ? 'active' : ''}`}>Austin</button>
                        <button onClick={()=> setActivePersona('B')} className={`toggle-btn ${activePersona === 'B' ? 'active' : ''}`}>Genesis</button>
                        <button onClick={()=> setActivePersona('C')} className={`toggle-btn ${activePersona === 'C' ? 'active' : ''}`}>Sebastian</button>
                    </div>
                </div>
                <div className={`persona-content ${currentPersona.layout}`}>
                    <div className='persona-image-container'>
                        <div className='persona-image'>
                            <img
                                src={currentPersona.image}
                                alt={currentPersona.name}
                                className='persona-photo'
                                />
                        </div>
                        <h2 className='persona-name'>{currentPersona.name} - {currentPersona.title}</h2>
                    </div>
                    <div className='persona-deatils'>
                        <div className='persona-section'>
                            <h3 className='persona-section-title'>Background:</h3>
                            <ul className='persona-background-list'>
                                 <li className="background-item"><span className="alabel"><b>Age:</b></span> {currentPersona.background.age}</li>
                                 <li className="background-item"><span className="alabel"><b>Experience:</b></span> {currentPersona.background.experience || currentPersona.background.role}</li>
                                 <li className="background-item">{currentPersona.background.motivation || currentPersona.background.situation || currentPersona.background.expertise}</li>
                                 <li className="background-item">{currentPersona.background.challenge || currentPersona.background.position}</li>
                            </ul>
                        </div>
                        <div className='persona-section'>
                            <h3 className='persona-section-title'>Pain Points & Goals</h3>
                            <p className='persona-section-text'>{currentPersona.painPoints}</p>
                        </div>
                        <div className='persona-section'>
                            <h3 className='persona-section-title'>Key Need</h3>
                            <p className='key-need-text'>"{currentPersona.keyNeed}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HfUserPersonas;