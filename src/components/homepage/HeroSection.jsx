import AOS from "aos";
import "aos/dist/aos.css";
import "../../pages/Homepage.css";
import heroImage from "../../assets/svg/hero_landing_pmb.svg";
import { Link, NavLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
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
                        <NavLink data-aos="fade-right"
                            style={{ backgroundColor: " #199CD4" }}
                            className="btn  border-0 text-white rounded shadow px-3 py-3"
                            to="/register"
                            role="button"
                        >
                            Daftar Sekarang &rarr;
                        </NavLink>
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
        </>
    )
}

export default HeroSection;