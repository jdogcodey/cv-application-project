import React, { useState } from 'react';

export default function MainContent() {
    const [cvName, setCvName] = useState('John Smith');
    const [cvEmail, setCvEmail] = useState('john.smith@gmail.com');
    const [cvPhone, setCvPhone] = useState('07123456789');
    return <main>
        <ControlsPanel 
            cvName={cvName} 
            setCvName={setCvName}
            cvEmail={cvEmail}
            setCvEmail={setCvEmail}
            cvPhone={cvPhone}
            setCvPhone={setCvPhone}
            />
        <CVViewer />
    </main>
}

function ControlsPanel({cvName, setCvName, cvEmail, setCvEmail, cvPhone, setCvPhone}) {
    return <section>
        <section>
            <h2>Personal Details:</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' placeholder={cvName}></input>
                <label htmlFor='email'>Email:</label>
                <input id='email' name='email' placeholder={cvEmail}></input>
                <label htmlFor='phone'>Phone No.:</label>
                <input id='phone' name='phone' placeholder={cvPhone}></input>
                <input type='submit' value='Update'></input>
            </form>
        </section>
        <section>
        </section>
    </section>
}

function CVViewer() {

}