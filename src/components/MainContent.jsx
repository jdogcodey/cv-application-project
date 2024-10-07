import React, { useState } from 'react';
import Personalinfo from './Personalinfo';
import Eduexperience from './Eduexperience';
import Jobexperience from './Jobexperience';
import CVview from './CVview';
import data from './Basedata.json';
import '../index.css';

export default function MainContent() {
    let cvData = data;
    const [currentPersonalInfo, setPersonalInfo] = useState(cvData['Personal Details']);
    const [currentEduExperience, setEduExperience] = useState(cvData['Educational Experience']);
    const [currentWorkExperience, setWorkExperience] = useState(cvData['Practical Experience']);
    const [currentSection, setSection] = useState(0)



    return <main>
    <section id='left'>
        <section>
            <h2>Personal Details:</h2>
            {currentSection === 1 && <>
            <Personalinfo personalInfo={currentPersonalInfo} setPersonalInfo={setPersonalInfo}/>
            <button className='regButton' onClick={() => {setSection(0)}}>Hide</button>
            </>}
            {currentSection !== 1 && <button className='regButton' onClick={() => {setSection(1)}}>Edit</button>}
        </section>
        <section>
            <h2>Education:</h2>
            {currentSection === 2 && <>
            <Eduexperience eduExperience={currentEduExperience} setEduExperience={setEduExperience}/>
            <button className='regButton' onClick={() => {setSection(0)}}>Hide</button>
            </>}
            {currentSection !== 2 && <button className='regButton' onClick={() => {setSection(2)}}>Edit</button>}
        </section>
        <section>
            <h2>Work Experience:</h2>
            {currentSection === 3 && <>
            <Jobexperience workExperience={currentWorkExperience} setWorkExperience={setWorkExperience}/>
            <button className='regButton' onClick={() => {setSection(0)}}>Hide</button>
            </>}
            {currentSection !== 3 && <button className='regButton' onClick={() => {setSection(3)}}>Edit</button>}
        </section>
    </section>
    <section id='right'>
        <CVview personalInfo={currentPersonalInfo} eduExperience={currentEduExperience} workExperience={currentWorkExperience}/>
    </section>
    </main>
}

