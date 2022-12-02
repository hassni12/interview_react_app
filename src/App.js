import logo from './logo.svg';
import './App.css';
import { SignUpScreen } from './screen/SignUpScreen';
import {Routes,Route}from 'react-router-dom'
import {LoginFormScreen} from './screen/LoginFormScreen'
import { AttendanceScreen } from './screen/AttendanceScreen';
import { useSelector } from 'react-redux';
// useSelector
// AttendanceScreen
// FirstSingUpScreen
function App() {
  const { token}=useSelector((state)=>state.authReducer)
  console.log(token);
  return (
   <Routes>
    {token? <Route path='/attendance' element={<AttendanceScreen/>}/>:<>
      <Route  path='/'  element={<SignUpScreen/>} />
    <Route  path='/login'  element={<LoginFormScreen/>} /></>}
  

   </Routes>
  );
}

export default App;
