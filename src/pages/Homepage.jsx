import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import BoxProgramStudi from "../components/homepage/BoxProgramstudi";
import CarouselBrosur from "../components/homepage/CarouselBrosur";
import HeroSection from "../components/homepage/HeroSection";

export default function Homepage() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="homepage">
        <HeroSection />

        <section id="Prodi" className="mt-lg-5 mb-lg-5">
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
