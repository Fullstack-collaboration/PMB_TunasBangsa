import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import successGif from "../assets/svg/Centang.svg"; // Replace with the path to your success GIF
import errorGif from "../assets/svg/Cross.svg"; // Replace with the path to your error GIF

export default function Status() {
  const [status, setStatus] = useState("success");
  const [name, setName] = useState("Dedy");


  const renderContent = () => {
    if (status === 'success') {
      return (
        <>
          <h2 className="fw-bold">Selamat {name}</h2>
          <Image src={successGif} alt="Checkmark" fluid style={{ margin: "10px 0" }} />
          <p className="fw-bold" style={{ marginBottom: "5px" }}>Registrasi Mahasiswa Berhasil</p>
          <p className="fw-bold" style={{ marginBottom: "5px" }}>Selamat jadi Mabaaa...</p>
          <p style={{ marginTop: "0" }}>Silahkan datang ke kampus sesuai yang dijadwalkan</p>
        </>
      );
    } else if (status === 'failure') {
      return (
        <>
          <h2 className="fw-bold">Maaf {name}</h2>
          <Image src={errorGif} alt="Error" fluid style={{ margin: "10px 0" }} />
          <p className="fw-bold" style={{ marginBottom: "5px" }}>Registrasi Mahasiswa Kamu Belum Berhasil</p>
          <p>Silahkan coba lagi atau hubungi admin untuk bantuan lebih lanjut.</p>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <div className="Status d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Container className="text-center p-4" style={{ maxWidth: "500px", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
          <Row className="justify-content-center">
            <Col md="auto">
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
}
