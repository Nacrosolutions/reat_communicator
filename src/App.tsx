import './App.css'
// import ManageUser from './components/users/ManageUser'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import ManageUser from './components/users/ManageUser'
import { Routes, Route } from "react-router-dom";
import RootLayout from './RootLayout'
import Welcome from './pages/Welcome'
import ProtectedRoute from './ProtectedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './auth/slices/authSlice';

function App() {


  const dispatch=useDispatch();

  useEffect(()=>{

    const handleStorageChange=()=>{
      const token =localStorage.getItem('token');
      if(!token){
        dispatch(logout());
      }
    }
    window.addEventListener("storage",handleStorageChange);

    return ()=>{
      window.removeEventListener("storage",handleStorageChange)
    }
  },[dispatch])  
  return (
    
    <Routes>
<Route path='/' element ={<RootLayout/>} >
 <Route index  element={<Welcome />} /> 

       <Route path="signup" element={<SignUp />} /> 
 <Route path="signin" element={<SignIn />} /> 

     // ProtectedRoute



 <Route path="manageUser" element={ <ProtectedRoute><ManageUser /></ProtectedRoute>} /> 

</Route>
    </Routes>
  )
}

export default App
