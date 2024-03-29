import React from 'react'

const PersonalDetails = () => {
    const Resume = () => {
        const file = '/Assets/Khagendra-Singh-Jora.pdf'
        window.open(file, 'blank')
    }

    return (
        <>
            <div id='personalDetail'></div>
            <div className='title'>Personal Details</div>
            <div className="container">
                <div className="Left">
                    <img src="Assets/kj.jpg" alt="khagendra" style={{ width: "20rem" }} />
                </div>
                <div className="Right">
                    I believe myself as a self-motivated and tech enthusiastic person. Always ready to face challenges.
                    Have a good experience in developer field. Eagger to learn data science.
                    <button id='btn' onClick={Resume}>My Resume</button>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails