import './App.css'
// import ManageUser from './components/users/ManageUser'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import ManageUser from './components/users/ManageUser'
import { Routes, Route } from "react-router-dom";
import RootLayout from './RootLayout'
import Welcome from './pages/Welcome'

function App() {

  return (
    <Routes>
<Route path='/' element ={<RootLayout/>} >
 <Route index  element={<Welcome />} /> 
 <Route path="signup" element={<SignUp />} /> 
 <Route path="signin" element={<SignIn />} /> 
 <Route path="manageUser" element={<ManageUser />} /> 

</Route>
    </Routes>
  )
}

export default App
