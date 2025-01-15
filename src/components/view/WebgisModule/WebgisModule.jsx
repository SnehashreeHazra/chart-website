import React, { useState } from 'react'
import './WebgisModule.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function WebgisModule() {
  const [isOpen, setIsOpen] = useState(false);

  // Step 2: Toggle the dropdown visibility when the button is clicked
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="webgis-module-content">
        <h2 className='webgis-heading'>View Map</h2>
        <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468600.17407919816!2d91.27959810931303!3d23.42657566094673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753a52ba68c881b%3A0x74a1f999f39c96e7!2sGomati%2C%20Tripura!5e0!3m2!1sen!2sin!4v1736933682253!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      <div className="left-bottom-box">
        <div className="flex-box"><p>Site Inspection</p><FontAwesomeIcon icon={faLocationDot} style={{color: "#0D9902", fontSize: "13px"}}/></div>
        <div className="flex-box"><p>Daily Work Site Checklist</p><FontAwesomeIcon icon={faLocationDot} style={{color: "#372CA2", fontSize: "13px"}}/></div>
        <div className="flex-box"><p>Hazadous Location</p><FontAwesomeIcon icon={faLocationDot} style={{color: "#AC170E", fontSize: "13px"}}/></div>
        <div className="flex-box"><p>Work Zone Safety</p><FontAwesomeIcon icon={faLocationDot} style={{color: "#F6D413", fontSize: "13px"}}/></div>
        <div className="flex-box"><p>Accidental Data</p><FontAwesomeIcon icon={faLocationDot} style={{color: "#783A06", fontSize: "13px"}}/></div>
      </div>
      <div className="right-nav-section">
        <div className="flex-box2"><p>Location</p></div>
        <hr />
        <div className="dropdown-div" onClick={toggleDropdown}><p>Select District</p><FontAwesomeIcon icon={faChevronDown} style={{cursor: "pointer"}}/></div>
        {isOpen && (
        <div className="dropdown-menu">
          <p>Select All</p>
          <p>Dhalai</p>
          <p>Gomati</p>
          <p>Khowai</p>
          <p>Sepahijala</p>
          <p>Dhalai</p>
          <p>Gomati</p>
          <p>Khowai</p>
          <p>Sepahijala</p>
          <p>Dhalai</p>
          <p>Gomati</p>
          <p>Khowai</p>
          <p>Sepahijala</p>
        </div>
      )}
        <div className="flex-box2"><input type="checkbox" /><p>Site Inspection</p></div>
        <hr />
        <div className="flex-box2"><input type="checkbox" /><p>Daily Work Site Checklist</p></div>
        <hr />
        <div className="flex-box2"><input type="checkbox" /><p>Hazadous Location</p></div>
        <hr />
        <div className="flex-box2"><input type="checkbox" /><p>Work Zone Safety</p></div>
        <hr />
        <div className="flex-box2"><input type="checkbox" /><p>Accidental Data</p></div>
      </div>
    </div>
      </div>
    </>
  )
}

export default WebgisModule
