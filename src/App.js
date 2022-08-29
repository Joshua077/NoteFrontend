import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import LandingPage from './Screen/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import MyNotes from './Screen/MyNotes/MyNotes';
import Register from './Screen/Register/register';
import Login from './Screen/Login/login';
import CreateNotes from './Screen/CreateNotes/CreateNotes';
import EditNote from './Screen/EditNote/EditNote';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createnotes" element={< CreateNotes />} />
      <Route path="/note/:id" element={< EditNote />} />
     
    </Routes>
    </div>
  );
}

export default App;
