import React, { useState } from 'react';

export default function MainContent() {

    const [cvData, setCvData] = useState({
        personalDetails: {
            'Name': 'John Smith',
            'Email': 'john.smith@gmail.com',
            'Phone': '07123456789'
        }
    });

    return (
        <main>
            <ControlsPanel 
                cvData={cvData}
                setCvData={setCvData}
            />
            <CVViewer cvData={cvData} />
        </main>
    );
}

function ControlsPanel({ cvData, setCvData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the state based on the input change
        setCvData(prevState => ({
            ...prevState,
            personalDetails: {
                ...prevState.personalDetails,
                [name]: value // Dynamically update the corresponding field
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (optional)
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
                            value={cvData.personalDetails[key]}
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
