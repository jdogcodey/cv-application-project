import React, { useState } from 'react';

export default function CVview({ personalInfo, eduExperience }) {
    return <>
    <p>{personalInfo['First Name']}</p>
    <p>{eduExperience[0]['School']}</p>
    <p>{eduExperience[0]['Course']}</p>
    <p>{eduExperience[0]['Date']}</p>
    {eduExperience[1] && <p>{eduExperience[1]['School']}</p>}
    </>
}