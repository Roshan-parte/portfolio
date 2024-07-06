import React from 'react'

export default function Skills() {
  return (
    <div className="skills">
      <div className="skl-title">
        <h1>Skill</h1>
        <br />
        <hr />
      </div>
      <div className="skl-content">
        <div className="skl-content-ln">
          <h3>HTML/CSS</h3>
          <h4><b>90%</b></h4>
          <hr className="ht" />
          <h3>CSS</h3>
          <h4><b>90%</b></h4>
          <hr className="cs" />
          <h3>Bootstrap</h3>
          <h4><b>50%</b></h4>
          <hr className="bsp" />
          <h3>JavaScript</h3>
          <h4><b>60%</b></h4>
          <hr className="jsp" />
          <h3>React js</h3>
          <h4><b>60%</b></h4>
          <hr className="rj" />
          
        </div>
        <div className="skl-content-ln" id="pr-ln">
          <div className="programming-ln" id="C">30%</div>
          <h2 className="cp">C</h2>
          <div className="programming-ln" id="C++">40%</div>
          <h2>C++</h2>
          <div className="programming-ln" id="python">40%</div>
          <h2>PYTHON</h2>
          <div className="programming-ln" id="Java">30%</div>
          <h2>JAVA</h2>
          <div className="programming-ln" id="C#">30%</div>
          <h2>C#</h2>
        </div>
      </div>
    </div>
  )
}
