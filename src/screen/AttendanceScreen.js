import React ,{useEffect}from 'react'
import { useDispatch ,useSelector} from "react-redux"; 
import { GetAttendance } from '../Reducer/auth';
// GetAttendance
export const AttendanceScreen = () => {
    const { attendanceData}=useSelector((state)=>state.authReducer)
    console.log(attendanceData)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetAttendance())
    },[dispatch])
  return (
    <>
    
    
    <section className="container">
      <div className="row">
        <div className="col-sm-12 text-start">
          <img src="images/icon.png" className="img-fluid" alt="" />
        </div>
      </div>

      <table className="table table-borderless">
  <thead>
    <tr >
   
      <th scope="col">Date</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody >
    <tr >

      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>

      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </section>
    
    </>
  )
}
