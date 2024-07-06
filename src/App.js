import './App.css';
import Nav from './components/Nav';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import HomePage from './components/HomePage';
import { Route,Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
function App() {
  return (
    <div className="App">
      <HashRouter>
          <Nav/>
          <Routes>
          <Route path="/student-login" element={<StudentLogin/>} />
          <Route path='/' element={<HomePage/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
