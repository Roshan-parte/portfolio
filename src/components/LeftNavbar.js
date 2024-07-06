import React from 'react'

export default function LeftNavbar() {
  return (
    <div className="left-navbar">
      <div className="pro-account"></div>
        <nav className="personal">
          <h2><b>ROSHAN PARTE</b></h2><br />
          <div className="work">
            <h4 className="dev">REACT DEVELOPER</h4>
          </div>
          <div className="acc"> 
            <a href="/">
              <div className="account" id="github">
                <img src="icons8-github.svg" alt="" srcset="" /></div>
            </a>
            <a href="/">
              <div className="account" id="linkdin">
                <img src="icons8-linkedin.svg" alt="" srcset="" />
              </div>
            </a>
            <a href="https://www.instagram.com/art_by_parte_roshan?igsh=MWp4YnNiN3F6OXpuZg==">
              <div className="account" id="insta">
                <img src="icons8-instagram.svg" alt="" srcset="" />
              </div>
            </a>
            <a href="/">
              <div className="account" id="tweeter">
                <img src="icons8-twitter.svg" alt="" />
              </div>
            </a>
            <div className="info">
              <div className="infomt" id="phone-no">
                <div className="div-logo" id="ph-no">
                  <img src="phone.svg" alt="" />
                </div>
                <h6 className="txt-info">+91 85912 36177</h6>
              </div>
              <hr className="line" />
              <div className="infomt" id="email">
                <div className="div-logo" id="mail">
                  <img src="mail.svg" alt="" />
                </div>
                <h6 className="txt-info">roshanparte0104@gmail.com</h6>
              </div>
              <hr className="line" />
              <div className="infomt" id="location">
                <div className="div-logo" id="loc">
                  <img src="map-pin.svg" alt="" />
                </div>
                <h6 className="txt-info">CHEMBUR, MUMBAI</h6>
              </div>
              <hr className="line" />
              <div className="infomt" id="birth-date">
                <div className="div-logo" id="birth">
                  <img src="calendar.svg" alt="" />
                </div>
                <h6 className="txt-info">02-05-2005</h6>
              </div>
            </div>
          </div>
        </nav>
        <div className="profile">
          <img className="pro-img" src="pro.jpg" alt="" srcset="" />
        </div>
    </div>
  )
}
