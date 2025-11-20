import './App.css'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import ManageUser from './components/users/ManageUser'
import { Routes, Route } from "react-router-dom";
import RootLayout from './RootLayout'
import Welcome from './pages/Welcome'
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './auth/slices/authSlice';
import { fetchUsers } from './components/users/slices/userThunks';
import type { AppDispatch, RootState } from './store/store';
import { clearUsers } from './components/users/slices/userSlice';
import AdminOrGuestRoute from './AdminOrGuestRoute';
import GuestRoute from './GuestRoute';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  // 🔥 FIX #1 — run fetchUsers() on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  // 🔥 FIX #2 — handle storage changes (other tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        dispatch(logout());
        dispatch(clearUsers());
      }
   
      dispatch(fetchUsers());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        
        <Route index element={<Welcome />} /> 
        
        <Route path="signup" element={ <AdminOrGuestRoute><SignUp /></AdminOrGuestRoute>} /> 
        
          
       <Route path="signin" element={<GuestRoute><SignIn /></GuestRoute>} /> 
       

        {/* ProtectedRoute */}
        <Route
          path="manageUser"
          element={
            <ProtectedRoute>
              <ManageUser />
            </ProtectedRoute>
          }
        />

      </Route>
    </Routes>
  );
}

export default App;
