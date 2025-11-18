import './App.css'
import Header from './components/Header'
// import ManageUser from './components/users/ManageUser'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import ManageUser from './components/users/ManageUser'

function App() {

  return (
    <>
      <div>
  <Header></Header>
  <div>
  {/* <ManageUser/> */}
  <SignUp/>
  </div>
      </div>
    </>
  )
}

export default App
