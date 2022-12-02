import React ,{useEffect,useState}from 'react'
import { useDispatch ,useSelector} from "react-redux"; 
import { GetAttendance } from '../Reducer/auth';
// GetAttendance
export const AttendanceScreen = () => {
    
    const { attendanceData}=useSelector((state)=>state.authReducer)

let employeeData=[]
    for (let x in attendanceData) {
        employeeData.push(attendanceData[x]) 
      }
     console.log(employeeData[1].attendance["2022-11-30"])

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
      <div className="row ">
          <div className="col-sm-6 bg-primary text-white mx-auto mb-5  rounded-3">
            <h1 className='py-2 text-center'>Attendance information </h1>
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
  {employeeData.map((value,key)=>
   <tbody key={key}>
    <tr  >

      <td>{value.name}</td>
     
    </tr>
    <tr >
     
    {/* <td>{value.attendance["2022-11-30"]}</td> */}
     
    </tr>
    <tr>

     
    </tr>
  </tbody>
  
  )}
 
</table>
      </section>
    
    </>
  )
}
