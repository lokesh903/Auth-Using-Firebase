import SignUp from "./components/SignUp";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
function App() {
  // const {currentUser}=useAuth()

  function handelAuth() {
    return true ? <Dashboard /> : <SignUp />;
  }
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            
            <Route path="/updateprofile" element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
