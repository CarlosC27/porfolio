import React, { useState } from 'react';
import images from '../../constants/images';
import '../../index.css';

const Contact = (props) => {

    const [representation, setRepresentation] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return(
        <div>
            <h1 className='orange-title'>Nice to meet you, where you been?</h1>
            <p>Thank you for your interest in getting to know me! Whether you want to learn more about me, wanting to collabrate, have any question about my work, or just want to talk about similar interest feel free to reach out! I look forward to hearing from you 🥳</p>
            <div className='contact-form-container'>
                <h2 className=''>Let's get in touch!</h2>
                <p>Hi👋, my name is...</p>
                <input type='text' placeholder='Your name...' className='contact-form-name-input'/>
                <p>And I represent...</p>
                <div className="form-toggle">
                    <button
                        type="button"
                        className={`toggle-button ${
                            representation === "individual" ? "active" : ""
                        }`}
                        onClick={() => setRepresentation("individual")}
                    >
                        An individual
                    </button>
                    <button
                        type="button"
                        className={`toggle-button ${
                            representation === "company" ? "active" : ""
                        }`}
                        onClick={() => setRepresentation("company")}
                    >
                        A company
                    </button>
                </div>
                <p>I'd love to ask about...</p>
                <input
                    type='text'
                    placeholder="Whatever you'd like🥳"
                    className="contact-form-textarea"
                />
            </div>
        </div>
    );
}

export default Contact