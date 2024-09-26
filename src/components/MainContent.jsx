import React, { useState } from 'react';
import Personalinfo from './Personalinfo';
import Eduexperience from './Eduexperience';
import Jobexperience from './Jobexperience';
import CVview from './CVview';

export default function MainContent() {
    return <>
    <section>
        <section>
            <h2>Personal Details:</h2>
            <Personalinfo />
        </section>
        <section>
            <h2>Education:</h2>
            <Eduexperience />
        </section>
        <section>
            <h2>Work Experience:</h2>
            <Jobexperience />
        </section>
    </section>
    <section>
        <CVview />
    </section>
    </>
}

