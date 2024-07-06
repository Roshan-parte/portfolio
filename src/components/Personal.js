import React from 'react'

export default function Personal() {
  return (
    <div className="pc-cont fixed-top">
        <div className="personal-container">
            <h2 className="devp-name">ROSHAN PARTE</h2>
            <div className="work-field">
                <h4 className="wf-name">REACT-DEVELOPER</h4>
            </div>
            <div className="anth-accounts">
                <a href="https://www.linkedin.com/in/roshan-parte-a06829303?utm_source=share&utm_campaign=share_via&utm_content=profilr&utm_medium=android_app">
                    <div className="ac-plt" id="linkedin"><img src="icons8-linkedin.svg" alt="linkedIn" /></div>
                </a>
                <a href="https://github.com/Roshan-parte">
                    <div className="ac-plt" id="github"><img src="icons8-github.svg" alt="" /></div>
                </a>
                <a href="https://www.instagram.com/art_by_parte_roshan?igsh=MWp4YnNiN3F6OXpuZg==">
                    <div className="ac-plt" id="insta"><img src="icons8-instagram.svg" alt="" /></div>
                </a>
                <a href="/">
                    <div className="ac-plt" id="facebook"><img src="icons8-twitter.svg" alt="" /></div>
                </a>
            </div>
            <div className="information">
                <div className="block-info">
                    <div className="img-inf">
                        <img className="inf-img-logo" src="phone.svg" alt="" />
                        <h3 className="content-inf">8591236177</h3>
                    </div>
                </div>
                <hr className="hr-line" />
                <div className="block-info">
                    <div className="img-inf">
                        <img className="inf-img-logo" src="mail.svg" alt="" />
                        <h3 className="content-inf">roshanparte0104@gmail.com</h3>
                    </div>
                </div>
                <hr className="hr-line" />
                <div className="block-info">
                    <div className="img-inf">
                        <img className="inf-img-logo" src="map-pin.svg" alt="" />
                        <h3 className="content-inf">CHEMBUR,MUMBAI</h3>
                    </div>
                </div>
                <hr className="hr-line" />
                <div className="block-info">
                    <div className="img-inf">
                        <img className="inf-img-logo" src="calendar.svg" alt="" />
                        <h3 className="content-inf">02/05/2005</h3>
                    </div>
                </div> 
            </div>
            <div className="cv-download">DOWNLOAD-CV</div>
        </div>
        <div className="profil-picture">
            <img className="pro-img" src="pro.jpg" alt="" />
        </div>
    </div>
  )
}
