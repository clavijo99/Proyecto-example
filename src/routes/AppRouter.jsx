import { Routes, Route } from "react-router";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/resetpassword" element={<h1>ResetPassword</h1>} />
    </Routes>
  );
}
