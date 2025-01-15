import React from 'react'
import './TaskTracking.css'
import group_img from "../../../Images/group-img.png"
import file_four_img from '../../../Images/file-4.png'
import number_three from '../../../Images/number-3.png'
import number_four from '../../../Images/number-4.png'
import number_two from '../../../Images/number-2.png'
import footer_four from '../../../Images/footer-4.png'


function TaskTracking() {
  return (
    <div className='task-container'>
      <div className="task-content">
      <h2 className='task-module-heading'>Task Management</h2>
          <div className="boxes-wrapper">

          <div className="small-boxes-wrapper">
                <div className="wrapper-heading">
                  <h2>Pending</h2>
                  <img src={number_four} alt="" />
                </div>

                  <div className="small-box">
                    <div className="small-box-heading">
                      <h2>Dhalai(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Road Construction</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>


                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>Gomati(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Pipeline</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />

                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>



                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>North Tripura(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Pipeline</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>


                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>Khowai(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Tourisum Model</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>
                </div>








                <div className="small-boxes-wrapper">
                <div className="wrapper-heading">
                  <h2>Ongoing</h2>
                  <img src={number_three} alt="" />
                </div>

                  <div className="small-box">
                    <div className="small-box-heading">
                      <h2>Sepahijala(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Road Construction</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                        <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>


                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>South Tripura(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Pipeline</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>



                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>Unakoti(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Tourisum Model</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>
                </div>







                <div className="small-boxes-wrapper">
                <div className="wrapper-heading">
                  <h2>Development Done</h2>
                  <img src={number_three} alt="" />
                </div>

                  <div className="small-box">
                    <div className="small-box-heading">
                      <h2>West Tripura(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Road Construction</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>


                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>North Tripura(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Pipeline</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>



                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>Unakoti (District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Tourisum model</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>
                </div>









                <div className="small-boxes-wrapper">
                <div className="wrapper-heading">
                  <h2>Completed</h2>
                  <img src={number_two} alt="" />
                </div>

                  <div className="small-box">
                    <div className="small-box-heading">
                      <h2>Unakoti (District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Road Construction</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>


                  <div className="small-box">
                  <div className="small-box-heading">
                      <h2>North Tripura(District Tripura)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Pipeline</p>
                    <div className="img-wrapper">
                      <div className="left-img">
                      <img src={group_img} alt="" />
                      </div>
                      <div className="right-img"><img src={footer_four} alt="" /></div>
                    </div>
                  </div>
                </div>




          </div>
      </div>
    </div>
  )
}

export default TaskTracking
