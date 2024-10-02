import React, { useState } from 'react';

export default function Jobexperience({ workExperience, setWorkExperience }) {
    const [formData, setFormData] = useState(workExperience);
    const [editedStatus, setEditedStatus] = useState(Array(workExperience.length).fill({
        'Company' : false,
        'Position' : false,
        'Date-start' : false,
        'Date-finish' : false,
        'Responsibilities' : false
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

    const workUpdate = (e) => {
        e.preventDefault();
        setWorkExperience(formData);
        console.log(formData);
    };

    const addIndex = (e, index) => {
        const updatedData = [...formData];

        updatedData.push({
        'Company' : 'New Company',
        'Position' : 'New Position',
        'Date-start' : '2000-00-00',
        'Date-finish' : '2020-00=00',
        'Responsibilities' : [
            'Responsibility 1',
            'Responsibility 2',
            'Responsibility 3s'
        ]
    })
    setFormData(updatedData);
    setEditedStatus((prevStatus) => [...prevStatus, {
        'Company' : false,
        'Position' : false,
        'Date-start' : false,
        'Date-finish' : false,
        'Responsibilities' : false
    }])
    };

    const removeItem = (indexToRemove) => {
        const updatedItems = [...formData];

        updatedItems.splice(indexToRemove, 1);
        setFormData(updatedItems);
        setEditedStatus((prevStatus) => prevStatus.filter((_, index) => index !== indexToRemove))
    }

    return <>
        {formData.map((item, index) => (
            <form onSubmit={workUpdate} key={index}>
                <label htmlFor='Company'>Company:</label>
                <input type='text' id='Company' name='Company' placeholder={item['Company']} value={editedStatus[index]['Company'] ? item['Company'] : ''} onChange={(e) => updateDetail(e, index)}></input>
                <label htmlFor='Position'>Position:</label>
                <input type='text' id='Position' name='Position' placeholder={item['Position']} value={editedStatus[index]['Position'] ? item['Position'] : ''} onChange={(e) => updateDetail(e, index)}></input>
                <label htmlFor='Date-start'>Start Date:</label>
                <input type='date' id='Date-start' name='Date-start' placeholder={item['Date-start']} value={editedStatus[index]['Date-start'] ? item['Date-start'] : ''} onChange={(e) => updateDetail(e, index)}></input>
                <label htmlFor='Date-finish'>End Date:</label>
                <input type='date' id='Date-finish' name='Date-finish' placeholder={item['Date-finish']} value={editedStatus[index]['Date-finish'] ? item['Date-finish'] : ''} onChange={(e) => updateDetail(e, index)}></input>
                <input type='submit' value='Update'></input>
                {formData.length > 1 && <button onClick={() => removeItem(index)}>Remove</button>}
                {index === formData.length - 1 && <button onClick={() => addIndex(index)}>Add New</button>}
            </form>
        ))}
    </>
}