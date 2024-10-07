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

    return <div id='CVview'>
    <section>
        <h2 id='nameCV'>{`${personalInfo['First Name']} ${personalInfo['Surname']}`}</h2>
        <p id='email-phone'><span className='orangeDot'>•</span> {`${personalInfo['Email']}`} <span className='orangeDot'>•</span> {`+44${personalInfo['Number']}`} <span className='orangeDot'>•</span></p>  
    </section>
    <section>
        <h3 className='sectionTitleCV'>Education</h3>
        {eduExperience.map((item, index) => (
            <div key={item + index}>
                <h4 className='schoolCV'>{item['School']}</h4>
                <p className='courseCV'>{`${item['Course']}`} <span className='orangeDot'>•</span> {`${courseDate(item['Date'])}`}</p>
            </div>
        ))}
    </section>
    <section>
        <h3 className='sectionTitleCV'>Work Experience</h3>
        {workExperience.map((item, index) => (
            <div key={item + index}>
                <h4 className='positionCV'>{item['Position']}</h4>
                <h5 className='companyCV'>{item['Company']}</h5>
                <p className='dateCV'>{workDate(item['Date-start'], item['Date-finish'])}</p>
                {workExperience[index]['Responsibilities'].map((respItem, respIndex) => (
                    <div key={respItem + respIndex} className='respItem'>
                        <p><span className='orangeDot'>•</span> {`${respItem}`}</p>
                    </div>
                ))}
            </div>
        ))}
    </section>
    </div>
}