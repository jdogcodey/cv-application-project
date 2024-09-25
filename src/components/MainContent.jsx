import React, { useState, useEffect } from 'react';

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
            'Responsibilities' : [
                'Developed strong proficiency in programming languages such as Python, Java, and C++ through coursework and personal projects.', 
                'Designed and implemented a database management system using SQL and NoSQL technologies for a university capstone project.', 
                'Collaborated with a team to build a mobile application using React Native, enhancing both frontend and backend skills.'
            ],
        }
    });

    const [formData, setFormData] = useState(null);

    // Sync formData with cvData when the component mounts
    useEffect(() => {
        const initializeFormData = () => {
            const newFormData = {};
            Object.keys(cvData).forEach((section) => {
                newFormData[section] = {};
                Object.keys(cvData[section]).forEach((key) => {
                    if (Array.isArray(cvData[section][key])) {
                        // Copy the array structure from cvData to formData
                        newFormData[section][key] = [...cvData[section][key]];
                    } else {
                        newFormData[section][key] = '';  // Initialize other fields with empty strings
                    }
                });
            });
            setFormData(newFormData);
        };

        initializeFormData();
    }, [cvData]);

    if (!formData) {
        return <div>Loading...</div>; // Ensure that formData is initialized before rendering
    }

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

    const handleChange = (cvItem, index) => (e) => {
        const { value } = e.target;

        setFormData(prevFormData => {
            const updatedArray = [
                ...prevFormData[e.target.dataset.section][cvItem].slice(0, index),
                value,
                ...prevFormData[e.target.dataset.section][cvItem].slice(index + 1)
            ];

            return {
                ...prevFormData,
                [e.target.dataset.section]: {
                    ...prevFormData[e.target.dataset.section],
                    [cvItem]: updatedArray
                }
            };
        });
    };

    const handleAddInput = (cvItem, section) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [section]: {
                ...prevFormData[section],
                [cvItem]: [...prevFormData[section][cvItem], ''] // Add empty input
            }
        }));
    };

    const handleRemoveEmptyInputs = (cvItem, section) => {
        setFormData(prevFormData => {
            const filteredArray = prevFormData[section][cvItem].filter(item => item.trim() !== '');
            return {
                ...prevFormData,
                [section]: {
                    ...prevFormData[section],
                    [cvItem]: filteredArray // Keep only non-empty inputs
                }
            };
        });
    };

    const handleSubmit = (section) => (e) => {
        e.preventDefault();

        // Remove empty inputs before submitting
        Object.keys(formData[section]).forEach((key) => {
            if (Array.isArray(formData[section][key])) {
                handleRemoveEmptyInputs(key, section);
            }
        });

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
                    <form onSubmit={handleSubmit(cvKey)}>
                        {Object.keys(cvData[cvKey]).map((key) => (
                            <div key={key}>
                                <label htmlFor={key}>{key}:</label>
                                {Array.isArray(cvData[cvKey][key]) ? (
                                <>
                                    {formData[cvKey][key]?.map((item, index) => (
                                        <input
                                            key={index} // Using index as a key; if you need a more complex key, you can create unique IDs
                                            id={item}
                                            name={item}
                                            type='text'
                                            placeholder={cvData[cvKey][key][index]}
                                            value={formData[cvKey][key][index] || ''}
                                            onChange={handleChange(key, index)}
                                            data-section={cvKey}
                                        />
                                    ))}
                                    <button type="button" onClick={() => handleAddInput(key, cvKey)}>
                                        Add New
                                    </button>
                                </>
                            ) : (
                                <input
                                    id={key}
                                    name={key}
                                    type={key === 'Email' ? 'email' : key === 'Phone' ? 'tel' : 'text'}
                                    placeholder={cvData[cvKey][key]}
                                    value={formData[cvKey][key] || ''}
                                    onChange={handleChange(key)}
                                    data-section={cvKey}
                                />
                            )}
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
