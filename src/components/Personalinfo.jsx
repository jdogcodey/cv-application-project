import React, { useState } from 'react';
import '../index.css'

export default function Personalinfo({ personalInfo, setPersonalInfo }) {
    const [formData, setFormData] = useState(personalInfo);

    const updateDetail = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}))
    }

    const personalUpdate = (e) => {
        e.preventDefault();
        setPersonalInfo(formData);
        console.log(formData)
    }
    return <>
        <form onSubmit={personalUpdate}>
            <span>
                <label htmlFor='First Name'>First Name:</label>
                <input type='text' id='First Name' name='First Name' placeholder={personalInfo['First Name']} onChange={updateDetail}></input>
            </span>
            <span>
                <label htmlFor='Surname'>Surname:</label>
                <input type='text' id='Surname' name='Surname' placeholder={personalInfo['Surname']} onChange={updateDetail}></input>
            </span>
            <span>
                <label htmlFor='Email'>Email:</label>
                <input type='email' id='Email' name='Email' placeholder={personalInfo['Email']} onChange={updateDetail}></input>
            </span>
            <span>
                <label htmlFor='Number'>Phone: <span>Format +44(7123456789)</span>+44</label>
                <input type='tel' id='Number' name='Number' pattern='[0-9]{11}' placeholder={personalInfo['Number']} onChange={updateDetail}></input>
            </span>
            <input className='regButton' type='submit' value='Update'></input>
        </form>
    </>
}