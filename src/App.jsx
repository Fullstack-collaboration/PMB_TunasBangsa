import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Buku from "./pages/Halaman-Buku/Buku";
import BacaBuku from "./pages/Halaman-Buku/BacaBuku";
import DetailBuku from "./pages/Halaman-Buku/DetailBuku";
import Video from "./pages/Halaman-Video/Video";
import DetailVideo from "./pages/Halaman-Video/DetailVideo";
import TontonVideo from "./pages/Halaman-Video/TontonVideo";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import TeamLiterasiKita from "./pages/TimLiterasiKita";
import ProfileUser from "./pages/ProfileUser";
import RegisData from "./pages/RegisData";
import Donasi from "./pages/Halaman-Donasi/Donasi";
import DonasiUang from "./pages/Halaman-Donasi/Donasi-Uang/DonasiUang";
import Payment from "./pages/Halaman-Donasi/Donasi-Uang/Payment";
import HistoryDonasi from "./pages/Halaman-Donasi/Donasi-Uang/HistoryDonasi";
import DonasiBarang from "./pages/Halaman-Donasi/Donasi-Barang/DonasiBarang";
import DonasiBuku from "./pages/Halaman-Donasi/Donasi-Barang/DonasiBuku";
import DonasiVideo from "./pages/Halaman-Donasi/Donasi-Barang/DonasiVideo";
import Berkas from "./pages/Berkas";

function App() {
  const location = useLocation();
  const hideFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      <Navbar />
      {/* routing halaman */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/biodata" element={<RegisData />} />
        <Route path="/berkas" element={<Berkas />} />
        <Route path="/status" element={false} />
        <Route path="/getall" element={false} />

      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
