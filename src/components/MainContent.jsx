import React, { useState } from 'react';

export default function MainContent() {

    const [cvData, setCvData] = useState({
        'Personal Details': {
            'Name': 'John Smith',
            'Email': 'john.smith@gmail.com',
            'Phone': '07123456789'
        },
        'Education Experience': [
            {
                'University/School': 'University of Life',
                'Course/Subject': 'Computer Science',
                'Responsibilities': ['Developed proficiency in programming...'],
            },
        ],
        'Work Experience': [
            {
                'Company Name': 'Tech Corp',
                'Position': 'Software Engineer',
                'Responsibilities': ['Developed software applications...'],
            },
        ]
    });

    const [formData, setFormData] = useState({
        'Personal Details': {
            'Name': '',
            'Email': '',
            'Phone': ''
        },
        'Education Experience': [
            {
                'University/School': '',
                'Course/Subject': '',
                'Responsibilities': [],
            },
        ],
        'Work Experience': [
            {
                'Company Name': '',
                'Position': '',
                'Responsibilities': [],
            },
        ]
    });

    const handleAddNewSection = (sectionKey) => {
        const emptySection = {
            ...(sectionKey === 'Education Experience' && {
                'University/School': '',
                'Course/Subject': '',
                'Responsibilities': []
            }),
            ...(sectionKey === 'Work Experience' && {
                'Company Name': '',
                'Position': '',
                'Responsibilities': []
            })
        };

        setCvData((prevData) => ({
            ...prevData,
            [sectionKey]: [...prevData[sectionKey], emptySection]
        }));

        setFormData((prevFormData) => ({
            ...prevFormData,
            [sectionKey]: [...prevFormData[sectionKey], emptySection]
        }));
    };

    return (
        <main>
            <ControlsPanel 
                cvData={cvData}
                setCvData={setCvData}
                formData={formData}
                setFormData={setFormData}
                handleAddNewSection={handleAddNewSection}
            />
            <CVViewer cvData={cvData} />
        </main>
    );
}

function ControlsPanel({ cvData, setCvData, formData, setFormData, handleAddNewSection }) {

    const handleChange = (sectionKey, index, field) => (e) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [sectionKey]: prevFormData[sectionKey].map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        }));
    };

    const handleSubmit = (section) => (e) => {
        e.preventDefault();
        setCvData((prevCvData) => ({
            ...prevCvData,
            [section]: formData[section]
        }));
    };

    const getSectionFields = (sectionKey, index) => {
        switch (sectionKey) {
            case 'Education Experience':
                return (
                    <>
                        <label>University/School:</label>
                        <input
                            type="text"
                            value={formData[sectionKey][index]?.['University/School'] || ''}
                            onChange={handleChange(sectionKey, index, 'University/School')}
                        />
                        <label>Course/Subject:</label>
                        <input
                            type="text"
                            value={formData[sectionKey][index]?.['Course/Subject'] || ''}
                            onChange={handleChange(sectionKey, index, 'Course/Subject')}
                        />
                    </>
                );
            case 'Work Experience':
                return (
                    <>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            value={formData[sectionKey][index]?.['Company Name'] || ''}
                            onChange={handleChange(sectionKey, index, 'Company Name')}
                        />
                        <label>Position:</label>
                        <input
                            type="text"
                            value={formData[sectionKey][index]?.['Position'] || ''}
                            onChange={handleChange(sectionKey, index, 'Position')}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {Object.keys(cvData).map((cvKey) => (
                <section key={cvKey}>
                    <h2>{cvKey}:</h2>
                    {Array.isArray(cvData[cvKey]) ? (
                        cvData[cvKey].map((section, index) => (
                            <form key={index} onSubmit={handleSubmit(cvKey)}>
                                {getSectionFields(cvKey, index)}
                                {/* Responsibilities would be handled here similarly */}
                                <input type="submit" value="Save Section" />
                            </form>
                        ))
                    ) : (
                        <form onSubmit={handleSubmit(cvKey)}>
                            {/* Rendering Personal Details */}
                            {Object.keys(cvData[cvKey]).map((fieldKey) => (
                                <div key={fieldKey}>
                                    <label>{fieldKey}:</label>
                                    <input
                                        type={fieldKey === 'Email' ? 'email' : fieldKey === 'Phone' ? 'tel' : 'text'}
                                        value={formData[cvKey][fieldKey]}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            [cvKey]: {
                                                ...formData[cvKey],
                                                [fieldKey]: e.target.value
                                            }
                                        })}
                                    />
                                </div>
                            ))}
                            <input type="submit" value="Save Personal Details" />
                        </form>
                    )}

                    {/* Add "Add New Section" button for sections that are arrays */}
                    {cvKey !== 'Personal Details' && (
                        <button type="button" onClick={() => handleAddNewSection(cvKey)}>
                            Add New {cvKey} Section
                        </button>
                    )}
                </section>
            ))}
        </>
    );
}

function CVViewer({ cvData }) {
    return (
        <section>
            <h2>CV Preview</h2>
            {Object.keys(cvData).map((cvKey) => (
                <div key={cvKey}>
                    <h3>{cvKey}:</h3>
                    {Array.isArray(cvData[cvKey]) ? (
                        cvData[cvKey].map((item, index) => (
                            <div key={index}>
                                {cvKey === 'Education Experience' && (
                                    <>
                                        <p><strong>University/School:</strong> {item['University/School']}</p>
                                        <p><strong>Course/Subject:</strong> {item['Course/Subject']}</p>
                                    </>
                                )}
                                {cvKey === 'Work Experience' && (
                                    <>
                                        <p><strong>Company Name:</strong> {item['Company Name']}</p>
                                        <p><strong>Position:</strong> {item['Position']}</p>
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        // Rendering Personal Details here
                        Object.keys(cvData[cvKey]).map((fieldKey) => (
                            <p key={fieldKey}><strong>{fieldKey}:</strong> {cvData[cvKey][fieldKey]}</p>
                        ))
                    )}
                </div>
            ))}
        </section>
    );
}
