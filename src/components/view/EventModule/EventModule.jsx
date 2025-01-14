import React from 'react'
import './EventModule.css'
import doc_img from '../../../Images/doc-img.png'

function EventModule() {
  return (
    <>
      <div className="event-module-content">
        <h2 className='event-module-heading'>Training/Metting/Workshop Management</h2>
        <div class="event-table-container">
    <table className='event-table'>
      <thead className='event-table-header'>
        <tr>
          <th className='event-table-heading'>SL</th>
          <th className='event-table-heading'>Organizer Name</th>
          <th className='event-table-heading'>Date</th>
          <th className='event-table-heading'>Venue</th>
          <th className='event-table-heading'>Duaration</th>
          <th className='event-table-heading'>Type</th>
          <th className='event-table-heading'>Total Attendance</th>
          <th className='event-table-heading'>Training Material</th>
          <th className='event-table-heading'>Presentations</th>
          <th className='event-table-heading'>Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='event-table-data'>1</td>
          <td className='event-table-data'>Reflect athleticism</td>
          <td className='event-table-data'>11.01.2025</td>
          <td className='event-table-data'>Bengal Eco Intelligent Park Sec-5 Kolkata</td>
          <td className='event-table-data'>3 hr</td>
          <td className='event-table-data'>Sports</td>
          <td className='event-table-data'>40000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>2</td>
          <td className='event-table-data'>Use sports lingo</td>
          <td className='event-table-data'>21.01.2025</td>
          <td className='event-table-data'>Webel More Sec-5 Kolkata</td>
          <td className='event-table-data'>3 hr</td>
          <td className='event-table-data'>Sports</td>
          <td className='event-table-data'>50000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>3</td>
          <td className='event-table-data'>ABC Workshop</td>
          <td className='event-table-data'>10.01.2025</td>
          <td className='event-table-data'>Webel More Sec-5 Kolkata</td>
          <td className='event-table-data'>3 hr</td>
          <td className='event-table-data'>Workshops</td>
          <td className='event-table-data'>60000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>4</td>
          <td className='event-table-data'>The Party Pros</td>
          <td className='event-table-data'>30.01.2025</td>
          <td className='event-table-data'>Mani Casidonia newtown Kolkata</td>
          <td className='event-table-data'>5 hr</td>
          <td className='event-table-data'>Private</td>
          <td className='event-table-data'>30000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>5</td>
          <td className='event-table-data'>Sui Generis</td>
          <td className='event-table-data'>10.02.2025</td>
          <td className='event-table-data'>Mani Casidonia newtown Kolkata</td>
          <td className='event-table-data'>5 hr</td>
          <td className='event-table-data'>Trade</td>
          <td className='event-table-data'>40000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>6</td>
          <td className='event-table-data'>Webhibe Technologies</td>
          <td className='event-table-data'>10.02.2025</td>
          <td className='event-table-data'>Bengal Eco Intelligent Park Sec-5 Kolkata</td>
          <td className='event-table-data'>5 hr</td>
          <td className='event-table-data'>Seminars</td>
          <td className='event-table-data'>30000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>7</td>
          <td className='event-table-data'>Webhibe Technologies</td>
          <td className='event-table-data'>20.02.2025</td>
          <td className='event-table-data'>Bengal Eco Intelligent Park Sec-5 Kolkata</td>
          <td className='event-table-data'>5 hr</td>
          <td className='event-table-data'>Corporate</td>
          <td className='event-table-data'>30000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        <tr>
          <td className='event-table-data'>8</td>
          <td className='event-table-data'>East Bengal Altras</td>
          <td className='event-table-data'>30.02.2025</td>
          <td className='event-table-data'>Vivekananda Yuba Bharati Krirangan </td>
          <td className='event-table-data'>3 hr</td>
          <td className='event-table-data'>Sports</td>
          <td className='event-table-data'>50000</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Training Material</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Presentations</td>
          <td className='event-table-data img-data'><img src={doc_img} alt="" />Documents</td>
        </tr>
        
        
      </tbody>
    </table>
  </div>
      </div>
    </>
  )
}

export default EventModule
