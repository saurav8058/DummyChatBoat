

// External library imports
import { Route, Routes } from 'react-router-dom';
import { getDatabase} from "firebase/database";

// Config imports
import { app } from "./config/firebaseData";

// Components and pages imports
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './pages/HomePage';

// CSS imports
import './App.css';

// Firebase database initialization
const db = getDatabase(app);


function App() {
 

  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

