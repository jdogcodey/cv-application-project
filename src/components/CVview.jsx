import React, { useState } from 'react';

export default function CVview({ personalInfo, eduExperience }) {
    return <>
    <p>{personalInfo['First Name']}</p>
    <p>{eduExperience[0]['School']}</p>
    <p>{eduExperience[0]['Course']}</p>
    <p>{eduExperience[0]['Date']}</p>
    {eduExperience[1] && <p>{eduExperience[1]['School']}</p>}
    {eduExperience[1] && <p>{eduExperience[1]['Course']}</p>}
    {eduExperience[1] && <p>{eduExperience[1]['Date']}</p>}
    {eduExperience[2] && <p>{eduExperience[2]['School']}</p>}
    {eduExperience[2] && <p>{eduExperience[2]['Course']}</p>}
    {eduExperience[2] && <p>{eduExperience[2]['Date']}</p>}
    {eduExperience[3] && <p>{eduExperience[3]['School']}</p>}
    {eduExperience[3] && <p>{eduExperience[3]['Course']}</p>}
    {eduExperience[3] && <p>{eduExperience[3]['Date']}</p>}
    {eduExperience[4] && <p>{eduExperience[4]['School']}</p>}
    {eduExperience[4] && <p>{eduExperience[4]['Course']}</p>}
    {eduExperience[4] && <p>{eduExperience[4]['Date']}</p>}
    </>
}