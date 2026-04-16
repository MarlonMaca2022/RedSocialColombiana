import React, { useState } from "react";

export default function Acordeon() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  return (
    <>
      <div className="w3-card w3-round">
        <div className="w3-white">
          <button onClick={() => toggleSection('Demo1')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${openSection === 'Demo1' ? 'w3-theme-d1' : ''}`}>
            <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
          </button>
          <div id="Demo1" className={`w3-container ${openSection === 'Demo1' ? 'w3-show' : 'w3-hide'}`}>
            <p>Some text..</p>
          </div>

          <button onClick={() => toggleSection('Demo2')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${openSection === 'Demo2' ? 'w3-theme-d1' : ''}`}>
            <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
          </button>
          <div id="Demo2" className={`w3-container ${openSection === 'Demo2' ? 'w3-show' : 'w3-hide'}`}>
            <p>Some other text..</p>
          </div>

          <button onClick={() => toggleSection('Demo3')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${openSection === 'Demo3' ? 'w3-theme-d1' : ''}`}>
            <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
          </button>
          <div id="Demo3" className={`w3-container ${openSection === 'Demo3' ? 'w3-show' : 'w3-hide'}`}>
            <div className="w3-row-padding">
              <br />
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/forest.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
              <div className="w3-half">
                <img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
