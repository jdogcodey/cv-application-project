import React, { useState } from 'react';
import { format, formatDistance } from 'date-fns';
import '../index.css';

export default function CVview({ personalInfo, eduExperience, workExperience }) {

    function courseDate(x) {
        const date = new Date(x);
        const formattedDate = format(date, 'dd MMM yyyy');
        return formattedDate;
    }

    function workDate(x, y) {
        const startDate = new Date(x);
        const finishDate = new Date(y);

        const formattedStart = format(startDate, 'dd/MM/yy');
        const formattedEnd = format(finishDate, 'dd/MM/yy');
        const length = formatDistance(x, y);
        const totalDateOutput = `${formattedStart}-${formattedEnd} | ${length}`

        return totalDateOutput;
    }

    return <>
    <section>
        <h2>{`${personalInfo['First Name']} ${personalInfo['Surname']}`}</h2>
        <p>{`${personalInfo['Email']} • +44${personalInfo['Number']}`}</p>  
    </section>
    <section>
        {eduExperience.map((item, index) => (
            <div key={item + index}>
                <h3>{item['School']}</h3>
                <p>{`${item['Course']} • ${courseDate(item['Date'])}`}</p>
            </div>
        ))}
    </section>
    <section>
        {workExperience.map((item, index) => (
            <div key={item + index}>
                <h3>{item['Position']}</h3>
                <h4>{item['Company']}</h4>
                <p>{workDate(item['Date-start'], item['Date-finish'])}</p>
                {workExperience[index]['Responsibilities'].map((respItem, respIndex) => (
                    <div key={respItem + respIndex}>
                        <p>{`• ${respItem}`}</p>
                    </div>
                ))}
            </div>
        ))}
    </section>
    </>
}