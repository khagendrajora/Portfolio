
import React from 'react'


export const Experience = () => {
    const HEX = () => {
        const file = '/Assets/HEx.jpg'
        window.open(file, 'blank')
    }
    const Dursikshya = () => {
        const file = 'Assets/dursikshya.jpg'
        window.open(file, '_blank')
    }
    const Techfest = () => {
        const file = 'Assets/Khagendra.png'
        window.open(file, '_blank')
    }
    const Docker = () => {

    }
    return (
        <>
            <div className="Experiences">
                <div className="skills">
                    <div className='title'>Skills</div>

                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/letter-c.png' alt='letter' /></div>
                        <div className='icon'><img src='/Assets/c-.png' alt='c' /></div>
                        <div className='icon'><img src='/Assets/java-script.png' alt='js' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/html-5.png' alt='html' /></div>
                        <div className='icon'><img src='/Assets/css-3.png' alt='css' /></div>
                        <div className='icon'><img src='/Assets/bootstrap.png' alt='bot' /></div>
                        <div className='icon'><img src='/Assets/tailwind.png' alt='tss' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages'>
                        <div className='icon'><img src='/Assets/react.png' alt='react' /></div>
                        <div className='icon'><img src='/Assets/express-js.png' alt='react' /></div>
                        <div className='icon'><img src='/Assets/nodejs.png' alt='node' /></div>
                    </div>
                    <hr />
                    <div className='programmingLanguages' >
                        <div className='icon'><img src='/Assets/mdb.png' alt='mdb_icon' /></div>

                    </div>
                    <hr />
                    <div className='programmingLanguages' >

                        <div className='icon'><img src='/Assets/github.png' alt='git_icon' /></div>
                    </div>
                    <hr />
                </div>

                <div className="certificates">
                    <div className='title'>Experience</div>
                    <div className='workshops'>

                        <div className='certificate-one'>
                            <h1 className='one'>1.</h1>
                            <div className='file' onClick={HEX}><span>HEx Genius HACKATHON</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>2.</h1>
                            <div className='file' onClick={Dursikshya}><span>In-House Project Competition</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>3.</h1>
                            <div className='file' onClick={Docker}><span>3-day Workshop on Docker</span></div>
                        </div>
                        <div className='certificate-one'>
                            <h1 className='one'>4.</h1>
                            <div className='file' onClick={Techfest}><span>Participation in IIT Techfest Bombay</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
