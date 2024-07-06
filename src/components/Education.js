import React from "react";

export default function Education() {
  return (
    <div className="education">
      <div className="edutitle">
        <h1>Education</h1>
        <br />
        <hr />
      </div>
      <div className="educont">
        <div className="edusch"></div>
        <hr className="schhr" />
        <div className="sch-cont">
          <h2 className="ssc">SSC </h2>
          <h3 className="schname">Chembur High School, Mumbai</h3>
          <h5 className="schyear">2020</h5>
          <h5 className="schcgpa">CGPA : <b>8.59</b></h5>
          <hr className="sch-cgpa" />
        </div>
        <div className="edujr"></div>
        <hr className="jrhr" />
        <div className="jr-cont">
          <h2 className="hsc">HSC ( Commerce with Math ) </h2>
          <h3 className="jrname">
            Shree sanathan Dharam vidhyalaya
            <br /> & jr college, Mumbai
          </h3>
          <h5 className="jryear">2022</h5>
          <h5 className="jrcgpa">CGPA : <b>9.37</b></h5>
          <hr className="jr-cgpa" />
        </div>
        <div className="educlg">
          <div className="edupur"></div>
        </div>
        <hr className="clghr" />
        <div className="clg-cont">
          <h2 className="bsc">BSc(Information Technology) </h2>
          <h3 className="clgname">SIES College, Mumbai Uversity</h3>
          <h5 className="clgyear">2025</h5>
          <h5 className="clgcgpa">CGPA :<b>9.67</b></h5>
          <hr className="clg-cgpa" />
        </div>
      </div>
    </div>
  );
}
