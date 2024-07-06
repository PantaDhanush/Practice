import './App.css';
import Nav from './components/Nav';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';
import StudenntTimeTable from './components/StudentTimeTable';
// import StudentLogin from './components/StudentLogin';
// import HomePage from './components/HomePage';
// import { Route,Routes } from 'react-router-dom';
// import ForgotPassword from './components/ForgotPassword';
// import StudentDetails from './components/StudentDetails';
// import StudentFeeDetails from './components/StudentFeeDetails';
function App() {
  return (
    <div className="App">
      <HashRouter>
          <Nav/>
           {/* <StudentDetails/> */}
          {/* <StudentFeeDetails/> */}
          <StudenntTimeTable/>
          {/* <Routes>
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path='/' element={<HomePage/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes> */}
      </HashRouter>
    </div>
  );
}

export default App;
