import React from 'react'
import './ReportModule.css'
import number_three from '../../../Images/number-3.png'
import rajkumar_img from '../../../Images/image.png'
import trishit_img from '../../../Images/trishit-img.png'
import sneha_img from '../../../Images/sneha-img.png'
import rajib_img from '../../../Images/rajib-img.png'
import anushka_img from '../../../Images/anushka-img.png'

function ReportModule() {
  return (
    <>
      <div className="report-module-content">
        <h2 className='report-module-heading'>Reports on Events</h2>
        <div className="report-boxes-wrapper">
          <div className="report-three-box-wrapper">
            <div className="report-wrapper-heading">
                <h2>Training</h2>
                <img src={number_three} alt="" />
            </div>

            <div className="report-card">
              <div className="report-img-name">
                <img src={rajkumar_img} alt="" />
                <div className="name-info">
                  <h2>Rajkumar Mahato</h2>
                  <p>Event name use Alliteration</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={trishit_img} alt="" />
                <div className="name-info">
                  <h2>Trishit Majumder</h2>
                  <p>Event name Captain's Course</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={sneha_img} alt="" />
                <div className="name-info">
                  <h2>Sneha Das</h2>
                  <p>Event name Captain's Course</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
          </div>

          <div className="report-three-box-wrapper">
            <div className="report-wrapper-heading">
                <h2>Workshop</h2>
                <img src={number_three} alt="" />
            </div>

            <div className="report-card">
            <div className="report-img-name">
                <img src={rajib_img} alt="" />
                <div className="name-info">
                  <h2>Rajib Das</h2>
                  <p>Event name Eco-Conscious</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={anushka_img} alt="" />
                <div className="name-info">
                  <h2>Anushka Das</h2>
                  <p>Event name Innovation Ignited</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={sneha_img} alt="" />
                <div className="name-info">
                  <h2>Sneha Das</h2>
                  <p>Event name Captain's Course</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
          </div>

          <div className="report-three-box-wrapper">
            <div className="report-wrapper-heading">
                <h2>Meetings</h2>
                <img src={number_three} alt="" />
            </div>

            <div className="report-card">
            <div className="report-img-name">
                <img src={rajkumar_img} alt="" />
                <div className="name-info">
                  <h2>Rajkumar Mahato</h2>
                  <p>Event name use Alliteration</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={trishit_img} alt="" />
                <div className="name-info">
                  <h2>Trishit Majumder</h2>
                  <p>Event name use Alliteration</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
            <div className="report-card">
            <div className="report-img-name">
                <img src={sneha_img} alt="" />
                <div className="name-info">
                  <h2>Sneha Das</h2>
                  <p>Event name use Alliteration</p>
                </div>
              </div>
              <p className='report-card-paragraph'>This is very Beautiful Event I like This Event Every Time</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportModule
