import React, { useState } from 'react';

export default function Eduexperience({ eduExperience, setEduExperience }) {
    const [formData, setFormData] = useState(eduExperience);

    const updateDetail = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData[index], [name] : value}))
    };

    const eduUpdate = (e) => {
        e.preventDefault();
        setEduExperience(formData);
        console.log(formData);
    }
    return <>
    {formData.map((item, index) => (
        <form onSubmit={eduUpdate} key={index}>
            <label htmlFor='School'>University:</label>
            <input type='text' id='School' name='School' placeholder={item['School']} onChange={updateDetail}></input>
            <label htmlFor='Course'>Course:</label>
            <input type='text' id='Course' name='Course' placeholder={item['Course']} onChange={updateDetail}></input>
            <label htmlFor='Date'>Date:</label>
            <input type='date' id='Date' name='Date' placeholder={item['Date']} onChange={updateDetail}></input>
        </form>
    ))}
        
    </>
}