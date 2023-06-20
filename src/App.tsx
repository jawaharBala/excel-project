import {useEffect} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import NavBar from './components/navigation/navbar';
import Footer from './components/navigation/footer';
import Login from './components/login-signup/LoginPage';
import SignUp from './components/login-signup/SignUpPage';
import Home from './components/home/Home';
import { setUser } from './state_management/slices/UserSlice';
import Spreadsheet from './components/spreadsheet/Spreadhseet';

function App() {
const user = useSelector((store:any)=>store.user);
const dispatch = useDispatch();
useEffect(()=>{
  console.log(user)
},[user]);
useEffect(()=>{
  dispatch(setUser("jawahar"))
},[]);
  return (
    <div className="App">
       <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/spreadsheet" element={<Spreadsheet/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
