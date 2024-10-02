import React, { useState } from 'react';

export default function Eduexperience({ eduExperience, setEduExperience }) {
    const [formData, setFormData] = useState(eduExperience);

    const updateDetail = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...formData];

        updatedData[index] = {
            ...updatedData[index], 
            [name] : value
        };
        setFormData(updatedData)
    };

    const eduUpdate = (e) => {
        e.preventDefault();
        setEduExperience(formData);
        console.log(formData);
    };

    const addIndex = (e, index) => {
        const updatedData =[...formData];

        updatedData[index + 1] = {
            'School' : 'New University',
            'Course' : 'New Course',
            'Date' : '2000-00-00'
        }
        setFormData(updatedData)
    }
    return <>
    {formData.map((item, index) => (
        <form onSubmit={eduUpdate} key={index}>
            <label htmlFor='School'>University:</label>
            <input type='text' id='School' name='School' placeholder={item['School']} onChange={(e) => updateDetail(e, index)}></input>
            <label htmlFor='Course'>Course:</label>
            <input type='text' id='Course' name='Course' placeholder={item['Course']} onChange={(e) => updateDetail(e, index)}></input>
            <label htmlFor='Date'>Date:</label>
            <input type='date' id='Date' name='Date' placeholder={item['Date']} onChange={(e) => updateDetail(e, index)}></input>
            <input type='submit' value='Update'></input>
            {index === formData.length - 1 && <button onClick={(e) => addIndex(e, index)}>Add New</button>}
        </form>
    ))}
        
    </>
}