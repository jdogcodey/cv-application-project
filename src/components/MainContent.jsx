import React, { useState } from 'react';

export default function MainContent() {

    const [cvData, setCvData] = useState({
        'Personal Details': {
            'Name': 'John Smith',
            'Email': 'john.smith@gmail.com',
            'Phone': '07123456789'
        },
        'Education Experience': {
            'University/School': 'University of Life',
            'Course/Subject': 'Computer Science',
            'Responsibilities' : ['Developed strong proficiency in programming languages such as Python, Java, and C++ through coursework and personal projects.', 'Designed and implemented a database management system using SQL and NoSQL technologies for a university capstone project.', 'Collaborated with a team to build a mobile application using React Native, enhancing both frontend and backend skills.', 'Conducted research on machine learning algorithms, resulting in the development of a predictive model with 85% accuracy for classifying data.', 'Utilized version control tools like Git to manage and collaborate on code, contributing to multiple open-source projects.'],
        }
    });

    const [formData, setFormData] = useState({
        'Personal Details': {
            'Name': '',
            'Email': '',
            'Phone': ''
        },
        'Education Experience': {
            'University/School': '',
            'Course/Subject': '',
            'Responsibilities' : [],
        }
    });


    return (
        <main>
            <ControlsPanel 
                cvData={cvData}
                setCvData={setCvData}
                formData={formData}
                setFormData={setFormData}
            />
            <CVViewer cvData={cvData} />
        </main>
    );
}

function ControlsPanel({ cvData, setCvData, formData, setFormData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the local form data
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.dataset.section]: {
                ...prevFormData[e.target.dataset.section],
                [name]: value
            }
        }));
    };

    const handleSubmit = (section) => (e) => {
        e.preventDefault();
        setCvData(prevCvData => ({
            ...prevCvData,
            [section]: formData[section]
        }));
    };

    return (
        <>
            {Object.keys(cvData).map((cvKey) => (
                <section key={cvKey}>
                    <h2>{cvKey}:</h2>
                    <form onSubmit={handleSubmit({cvKey})}>
                        {Object.keys(cvData[cvKey]).map((key) => (
                            <div key={key}>
                                <label htmlFor={key}>{key}:</label>
                                <input
                                    id={key}
                                    name={key}
                                    type={key === 'Email' ? 'email' : key === 'Phone' ? 'tel' : 'text'}
                                    placeholder={cvData[cvKey][key]}
                                    value={formData[cvKey][key]}
                                    onChange={handleChange}
                                    data-section={cvKey}
                                    />
                            </div>
                        ))}
                         <input type='submit' value={cvKey} />
                        </form>
                </section>
            ))}
        </>
    );
}


function CVViewer({ cvData }) {
    return (
        <section>
            <h2>CV Preview</h2>
            {Object.keys(cvData['Personal Details']).map((key) => (
                <p key={key}><strong>{key}:</strong> {cvData['Personal Details'][key]}</p>
            ))}
            {Object.keys(cvData['Education Experience']).map((key) => (
                <p key={key}><strong>{key}:</strong> {cvData['Education Experience'][key]}</p>
            ))}
        </section>
    );
}
