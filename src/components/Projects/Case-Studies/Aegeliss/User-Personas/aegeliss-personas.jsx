import React, {useState} from 'react'
import personaImgs from '../../../../../constants/aegeliss-imgs'
import './../User-Personas/aegeliss-personas.css'

const AegelissUserPersonas = () =>{
    const [activePersona, setActivePersona] = useState('A');

    const personas = {
        A: {
            name: "Jennie Swift",
            title: "Primary Family Caregiver",
            image: personaImgs.jenni_persona,
            background: {
                age: "45, Creative Writing Professor",
                education: "PhD in English Language and Literature",
                caregiving: "Primary caregiver for her mother with recently diagnosed Alzheimer's",
                balance: "Balancing caregiving with full-time work and family responsibilities"
            },
            painPoints: "Jennie feels unprepared despite her analytical nature and organizational skills. Medical information often feels overwhelming and overly clinical, while navigating healthcare systems adds stress to an already challenging situation. She seeks accessible, evidence-based guidance that helps her care for her mother effectively while educating other family members.",
            keyNeed: "I want practical strategies that aren't overwhelming—something that helps me understand what's happening and what I can do about it.",
            bgColor: "bg-pink-200",
            textColor: "text-gray-800",
            theme: "persona-a",
            layout: "image-left"
        },
        B: {
            name: "Allen Day",
            title: "Professional Caregiver",
            image: personaImgs.allen_persona,
            background: {
                age: "27, Nurse Practitioner",
                education: "Recent Nursing Graduate (BSN, RN)",
                caregiving: "Primary caregiver for her mother with recently diagnosed Alzheimer's",
                balance: "Balancing caregiving with full-time work and family responsibilities"
            },
            painPoints: "While Allen has strong medical training, he lacks practical guidance for improving quality of life beyond basic care. He notices residents with dementia are often less engaged and seeks research-backed activities that are adaptable, easy to implement, and can be shared with colleagues and families.",
            keyNeed: "I want evidence-based resources that help residents maintain independence and engagement—tools I can actually use and explain to others.",
            bgColor: "bg-blue-200",
            textColor: "text-gray-800",
            theme: "persona-b",
            layout: "image-right"
        }
    }

    const currentPersona = personas[activePersona];

    return(
        <div className={`personas-container ${currentPersona.theme}`}>
            <div className='personas-wrapper'>
                <h2 className='personas-title'>User Personas</h2>
                <div className='toggle-container'>
                    <div className='toggle-buttons'>
                        <button onClick={()=> setActivePersona('A')} className={`toggle-btn ${activePersona === 'A' ? 'active' : ''}`}>Persona A</button>
                        <button onClick={()=> setActivePersona('B')} className={`toggle-btn ${activePersona === 'B' ? 'active' : ''}`}>Persona B</button>
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
                                 <li className="background-item"><span className="alabel"><b>Education:</b></span> {currentPersona.background.education}</li>
                                 <li className="background-item">{currentPersona.background.caregiving}</li>
                                 <li className="background-item">{currentPersona.background.balance}</li>
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

export default AegelissUserPersonas;