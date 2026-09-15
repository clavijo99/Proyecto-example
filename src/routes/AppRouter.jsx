import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}
