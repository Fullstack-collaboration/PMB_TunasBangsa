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
        <section id="hero" className="mb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mt-5 mb-lg-5">
                <div className="mt-5 d-flex flex-column justify-content-end content-left">
                  <h1 className="text-center text-lg-start text-warna-third mt-5" data-aos="fade-left">
                    SELEKSI PENERIMAAN <br />
                    <span className="text-white">MAHASISWA BARU</span>
                    <br />
                    2024 - 2025
                  </h1>
                  <div className="text-justify text-center text-lg-start text-warna-third mt-5">
                  <Link data-aos="fade-right"
                    style={{ backgroundColor: " #199CD4" }}
                    className="btn  border-0 text-white rounded shadow px-3 py-3"
                    href="halaman-donasi"
                    role="button"
                  >
                    Learn More &rarr;
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 pt-3 mb-lg-5">
                <img data-aos="fade-up"
                  src={heroImage}
                  width="100%"
                  className="img-fluid mt-3"
                  alt="hero-image"
                />
              </div>
            </div>
            <div className="scroll-btn">
              <a href="#LiterasiKita">
                <div className="circle">
                  <i className="icon">&#x279C;</i>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="LiterasiKita" className="mt-lg-5 mb-lg-5">
          <div className="container about-content">
            <br />
            <br />
            <div className="row">
              <div className="col-lg  mb-3">
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

        <div className="container mt-5">
          
        </div>

        <section id="donasi" className="mt-5 mb-5">
          {/* <div className="container">
            <div className="row mt-lg-5 mb-lg-0">
              <h3 className="fw-bold">
                LiterasiKita <br />
                Mendukung Masa Depan Literasi Indonesia
              </h3>
              <div className="row mt-lg-0">
                <div className="col-lg-7 mt-5">
                  <div className="flex-column justify-content-end content-left">
                    <p className="text-paragraph">
                      Pada tahun 2020, penutupan sekolah karena virus Covid-19
                      selama dua tahun di Indonesia berdampak pada keterbatasan
                      pendidikan dasar anak-anak, terutama kemampuan membaca
                      mereka. Hasil survei LiterasiKita bersama Kementerian
                      Pendidikan dan mitra-mitra menunjukkan kesulitan dalam
                      literasi di kelas 2 dan 3, terutama di daerah terpencil.
                    </p>
                    <p className="text-paragraph">
                      Bergabunglah dengan LiterasiKita untuk memberdayakan
                      anak-anak Indonesia dengan kemampuan membaca yang kuat,
                      menciptakan masa depan cerah bagi generasi penerus bangsa,
                      dan investasikan dalam pendidikan serta literasi untuk
                      keberhasilan di era modern.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 text-center mt-md-5">
                  <img
                    src={donasiImage}
                    className="img-fluid w-75 text-end"
                    alt="donasi-image"
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row mt-5">
                <div className="flex-lg-grow-1 order-last order-lg-first text-lg-start text-center mt-4 mt-lg-0">
                  <a
                    style={{ backgroundColor: " #29AB92" }}
                    className="btn  border-0 text-white rounded-pill shadow px-3 py-2"
                    href="halaman-donasi"
                    role="button"
                  >
                    Ayo donasi &rarr;
                  </a>
                </div>

                <div className="col-lg-4 col-10 text-center text-md-center text-lg-start">
                  <h6 className="text-warna">
                    Donasi Tersalurkan :{" "}
                    <span className="text-danger">Rp 150.000.000</span>
                  </h6>
                </div>
                <div className="col-lg-4 col-12 text-center text-lg-start">
                  <h6 className="text-warna">
                    Donasi Terkumpul :{" "}
                    <span className="text-danger">
                      {formatToRupiah(totalDonasiUang)}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div> */}
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
              <div className="col-md-6 mx-auto" data-aos="fade-up">
                <CarouselBrosur />
              </div>
            </div>
          </div>
        </section>

        <section>
          
        </section>

        <section>
          
        </section>
      </div>
    </>
  );
}
