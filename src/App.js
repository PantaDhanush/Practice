import './App.css';
import Nav from './components/Nav';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';
// import StudenntTimeTable from './components/StudentTimeTable';
import StudentLogin from './components/StudentLogin';
import HomePage from './components/HomePage';
import { Route,Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import FacultyLogin from './components/FacultyLogin';
import FacultyForgotpassword from './components/FacultyForgotPassword';
import StudentHomePage from './components/StudentHomePage';
import FacultyHomePage from './components/FacultyHomePage';
import StudentDetails from './components/StudentDetails';
import StudenntTimeTable from './components/StudentTimeTable';
import StudentFeeDetails from './components/StudentFeeDetails';
function App() {
  return (
    <div className="App">
      <HashRouter>
          <Nav/>
          <Routes>
          <Route path='/faculty-login' element={<FacultyLogin/>}/>
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path='/' element={<HomePage/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/faculty-forgot-password' element={<FacultyForgotpassword/>}/>
          <Route path='/student-home' element={<StudentHomePage/>}/>          
          <Route path='/faculty-home' element={<FacultyHomePage/>}/>  
          <Route path='/Student-Details' element={<StudentDetails/>}/>
          <Route path='/Student-TimeTable' element={<StudenntTimeTable/>}/>
          <Route path='/Student-FeeDetails' element={<StudentFeeDetails/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
