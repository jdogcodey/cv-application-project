import React, { useState } from 'react';

export default function MainContent() {

    const [cvData, setCvData] = useState({
        personalDetails: {
            'Name': 'John Smith',
            'Email': 'john.smith@gmail.com',
            'Phone': '07123456789'
        }
    });

    const [formData, setFormData] = useState({
        'Name': '',
        'Email': '',
        'Phone': ''
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

function ControlsPanel({ cvData, setCvData, formData, setFormData}) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the local form data
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the main state with the form data on submit
        setCvData(prevCvData => ({
            ...prevCvData,
            personalDetails: formData
        }));
    };

    return (
        <section>
            <h2>Personal Details:</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(cvData.personalDetails).map((key) => (
                    <div key={key}>
                        <label htmlFor={key}>{key}:</label>
                        <input
                            id={key}
                            name={key}
                            type={key === 'Email' ? 'email' : key === 'Phone' ? 'number' : 'text'}                            
                            placeholder={cvData.personalDetails[key]} // Initial placeholder
                            value={formData[key]}  // Show value only after submit
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <input type="submit" value="Update" />
            </form>
        </section>
    );
}

function CVViewer({ cvData }) {
    return (
        <section>
            <h2>CV Preview</h2>
            {Object.keys(cvData.personalDetails).map((key) => (
                <p key={key}><strong>{key}:</strong> {cvData.personalDetails[key]}</p>
            ))}
        </section>
    );
}
