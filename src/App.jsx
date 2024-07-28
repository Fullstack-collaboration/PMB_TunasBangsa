import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import DashboardAdmin from "./pages/DashboardAdmin";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ProfileUser from "./pages/ProfileUser";
import RegisData from "./pages/RegisData";
import Berkas from "./pages/Berkas";
import Status from "./pages/Status";

function App() {
  const location = useLocation();
  const hideFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      <Navbar />
      {/* routing halaman */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/biodata" element={<RegisData />} />
        <Route path="/berkas" element={<Berkas />} />
        <Route path="/status" element={<Status />} />
        <Route path="/getall" element={false} />

      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
