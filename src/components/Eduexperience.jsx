import React, { useState } from 'react';

export default function Eduexperience({ eduExperience, setEduExperience }) {
    const [formData, setFormData] = useState(eduExperience);
    const [editedStatus, setEditedStatus] = useState(Array(eduExperience.length).fill({
        'School' : false,
        'Course' : false,
        'Date' : false
    }));

    const updateDetail = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...formData];

        updatedData[index] = {
            ...updatedData[index], 
            [name] : value
        };
        setFormData(updatedData);
        setEditedStatus((prevStatus) => {
            const newStatus = [...prevStatus];
            newStatus[index] = {
                ...newStatus[index],
                [name] : true
            }
            return newStatus;
        })
    };

    const eduUpdate = (e) => {
        e.preventDefault();
        setEduExperience(formData);
        console.log(formData);
    };

    const addIndex = (e, index) => {
        const updatedData =[...formData];

        updatedData.push({
            'School' : 'New University',
            'Course' : 'New Course',
            'Date' : '2000-00-00'
        })
        setFormData(updatedData)
        setEditedStatus((prevStatus) => [...prevStatus, {
        'School' : false,
        'Course' : false,
        'Date' : false
    }]);
    setEduExperience(updatedData)
    };

    const removeItem = (indexToRemove) => {
        const updatedItems = [...formData];

        updatedItems.splice(indexToRemove, 1);
        setFormData(updatedItems);
        setEditedStatus((prevStatus) => prevStatus.filter((_, index) => index !== indexToRemove))
        setEduExperience(updatedItems);
    }
    return <>
    {formData.map((item, index) => (
        <form onSubmit={eduUpdate} key={index}>
            <label htmlFor='School'>University:</label>
            <input type='text' id='School' name='School' placeholder={item['School']} value={editedStatus[index]['School'] ? item['School'] : ''} onChange={(e) => updateDetail(e, index)}></input>
            <label htmlFor='Course'>Course:</label>
            <input type='text' id='Course' name='Course' placeholder={item['Course']} value={editedStatus[index]['Course'] ? item['Course']  : ''} onChange={(e) => updateDetail(e, index)}></input>
            <label htmlFor='Date'>Date:</label>
            <input type='date' id='Date' name='Date' placeholder={item['Date']} value={editedStatus[index]['Date'] ? item['Date']  : ''} onChange={(e) => updateDetail(e, index)}></input>
            <input type='submit' value='Update'></input>
            {formData.length > 1 && <button onClick={() => removeItem(index)}>Remove</button>}
            {index === formData.length - 1 && <button onClick={() => addIndex(index)}>Add New</button>}
        </form>
    ))}
    </>
}