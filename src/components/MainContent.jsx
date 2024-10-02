import React, { useState } from 'react';
import Personalinfo from './Personalinfo';
import Eduexperience from './Eduexperience';
import Jobexperience from './Jobexperience';
import CVview from './CVview';
import data from './Basedata.json'

export default function MainContent() {
    let cvData = data;
    const [currentPersonalInfo, setPersonalInfo] = useState(cvData['Personal Details']);
    const [currentEduExperience, setEduExperience] = useState(cvData['Educational Experience']);
    const [currentWorkExperience, setWorkExperience] = useState(cvData['Practical Experience'])

    return <>
    <section>
        <section>
            <h2>Personal Details:</h2>
            <Personalinfo personalInfo={currentPersonalInfo} setPersonalInfo={setPersonalInfo}/>
        </section>
        <section>
            <h2>Education:</h2>
            <Eduexperience eduExperience={currentEduExperience} setEduExperience={setEduExperience}/>
        </section>
        <section>
            <h2>Work Experience:</h2>
            <Jobexperience workExperience={currentWorkExperience} setWorkExperience={setWorkExperience}/>
        </section>
    </section>
    <section>
        <CVview personalInfo={currentPersonalInfo} eduExperience={currentEduExperience}/>
    </section>
    </>
}

