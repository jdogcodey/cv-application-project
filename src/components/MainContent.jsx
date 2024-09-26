import React, { useState } from 'react';
import Personalinfo from './Personalinfo';
import Eduexperience from './Eduexperience';
import Jobexperience from './Jobexperience';
import CVview from './CVview';

export default function MainContent() {
    return <>
    <Personalinfo />
    <Eduexperience />
    <Jobexperience />
    <CVview />
    </>
}

