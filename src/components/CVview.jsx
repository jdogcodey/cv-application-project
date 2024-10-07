import React, { useState } from 'react';
import { format } from 'date-fns';

export default function CVview({ personalInfo, eduExperience, workExperience }) {

    function courseDate(x) {
        const date = new Date(x);
        const formattedDate = format(date, 'dd MMM yyyy');
        return formattedDate;
    }

    return <>
    <section>
        <h2>{`${personalInfo['First Name']} ${personalInfo['Surname']}`}</h2>
        <p>{`${personalInfo['Email']} • +44${personalInfo['Number']}`}</p>  
    </section>
    <section>
        {eduExperience.map((item, index) => (
            <div key={item}>
                <h3>{item['School']}</h3>
                <p>{`${item['Course']} • ${courseDate(item['Date'])}`}</p>
            </div>
        ))}
    </section>
    
    {/* <p>{personalInfo['First Name']}</p>
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
    <p>{workExperience[0]['Company']}</p>
    <p>{workExperience[0]['Position']}</p>
    <p>{workExperience[0]['Date-start']}</p>
    <p>{workExperience[0]['Date-finish']}</p>
    {workExperience[1] && <p>{workExperience[1]['Company']}</p>}
    {workExperience[1] && <p>{workExperience[1]['Position']}</p>}
    {workExperience[1] && <p>{workExperience[1]['Date-start']}</p>}
    {workExperience[1] && <p>{workExperience[1]['Date-finish']}</p>}
    {workExperience[2] && <p>{workExperience[2]['Company']}</p>}
    {workExperience[2] && <p>{workExperience[2]['Position']}</p>}
    {workExperience[2] && <p>{workExperience[2]['Date-start']}</p>}
    {workExperience[2] && <p>{workExperience[2]['Date-finish']}</p>}
    {workExperience[3] && <p>{workExperience[3]['Company']}</p>}
    {workExperience[3] && <p>{workExperience[3]['Position']}</p>}
    {workExperience[3] && <p>{workExperience[3]['Date-start']}</p>}
    {workExperience[3] && <p>{workExperience[3]['Date-finish']}</p>} */}
    {/* {workExperience[0]['Responsibilities'][0]}
    {workExperience[0]['Responsibilities'][1]}
    {workExperience[0]['Responsibilities'][2]}
    {workExperience[0]['Responsibilities'][3]}
    {workExperience[0]['Responsibilities'][4]} */}
    {workExperience[1]?.['Responsibilities']?.[0] && <p>{workExperience[1]['Responsibilities'][0]}</p>}
    {workExperience[1]?.['Responsibilities']?.[1] && <p>{workExperience[1]['Responsibilities'][1]}</p>}
    </>
}