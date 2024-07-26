import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/svg/hero_landing_pmb.svg";
import literasiKita from "../assets/svg/LiterasiKita-image.svg";
import programImage1 from "../assets/svg/program-image1.svg";
import programImage2 from "../assets/svg/program-image2.svg";
import donasiImage from "../assets/svg/donasi-image.svg";
import user1 from "../assets/svg/user-1.svg";
import user2 from "../assets/svg/user-2.svg";
import user3 from "../assets/svg/user-3.svg";
import cardDonasi1 from "../assets/svg/cardDonasi1.svg";
import cardDonasi2 from "../assets/svg/cardDonasi2.svg";
import cardDonasi3 from "../assets/svg/cardDonasi3.svg";
import goldMedal from "../assets/svg/goldMedal.svg";
import { Link } from "react-router-dom";
import BoxProgramStudi from "../components/homepage/BoxProgramstudi";
import CarouselBrosur from "../components/homepage/CarouselBrosur";
import HeroSection from "../components/homepage/HeroSection";

export default function Homepage() {
  const [totalDonasiUang, setTotalDonasiUang] = useState(0);
  const [topDonasiBuku, setTopDonasiBuku] = useState([]);
  const [topDonasiVideo, setTopDonasiVideo] = useState([]);
  const [topDonasiUang, setTopDonasiUang] = useState([]);
  const [topAllDonasi, setTopAllDonasi] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const getTotalDonasiUang = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_LINK_API}/donasi/all-donasi-uang`
      );
      setTotalDonasiUang(response.data[0]?.total_nominal_donasi_uang || 0);
    } catch (error) {
      console.error("Error fetching total donasi uang:", error.message);
    }
  };

  const getTopDonasiBuku = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_LINK_API}/donasi/top-donasi-buku`
      );
      setTopDonasiBuku(response.data);
    } catch (error) {
      console.error("Error fetching top donasi buku:", error.message);
    }
  };
  const getTopDonasiVideo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_LINK_API}/donasi/top-donasi-videos`
      );
      setTopDonasiVideo(response.data);
    } catch (error) {
      console.error("Error fetching top donasi buku:", error.message);
    }
  };
  const getTopDonasiUang = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_LINK_API}/donasi/top-donasi-uang`
      );
      setTopDonasiUang(response.data);
    } catch (error) {
      console.error("Error fetching top donasi buku:", error.message);
    }
  };

  const getTopAllDonasi = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_LINK_API}/donasi/top-all-donasi`
      );
      setTopAllDonasi(response.data);
    } catch (error) {
      console.error("Error fetching top all donasi:", error.message);
    }
  };

  useEffect(() => {
    getTotalDonasiUang();
    getTopDonasiBuku();
    getTopDonasiVideo();
    getTopDonasiUang();
    getTopAllDonasi();
  }, []);

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <>
      <div className="homepage">
        <HeroSection />

        <section id="LiterasiKita" className="mt-lg-5 mb-lg-5">
          <div className="container about-content">
            <br />
            <br />
            <div className="row">
              <div className="col-lg  mb-3" data-aos="fade-up">
                <h2 className="text-center fw-bold">
                  PROGRAM STUDI
                </h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg">
                  <BoxProgramStudi data-aos="fade-up" programStudi={"Teknik Informatika"} deskripsi={"Fokus pada pengembangan perangkat lunak dan sistem komputasi. Mahasiswa mempelajari pemrograman, algoritma, jaringan komputer, kecerdasan buatan, dan keamanan siber."} />
                  <BoxProgramStudi programStudi={"Sistem Informasi"} deskripsi={"Menggabungkan ilmu komputer dan bisnis untuk merancang, mengembangkan, dan mengelola sistem informasi. Mahasiswa belajar manajemen data, pengembangan aplikasi bisnis, dan analisis kebutuhan organisasi."} />
                  <BoxProgramStudi programStudi={"Manajemen Informatika"} deskripsi={"Menitikberatkan pada pengelolaan dan pemanfaatan teknologi informasi dalam bisnis. Mahasiswa belajar manajemen proyek IT, analisis sistem, dan penggunaan software untuk efisiensi operasional."} />
                  <BoxProgramStudi data-aos="fade-up" programStudi={"Komputerisasi Akutansi"} deskripsi={"Memadukan ilmu akuntansi dan teknologi informasi. Mahasiswa belajar prinsip akuntansi, pemrograman, dan penggunaan software akuntansi untuk mendukung keputusan bisnis yang akurat dan efisien."} />
              </div>
              
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-7 mx-auto  mb-3" data-aos="fade-up">
                <h2 className="text-center fw-bold">
                  BROSUR
                </h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-7 mx-auto" data-aos="fade-up">
                <CarouselBrosur />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
