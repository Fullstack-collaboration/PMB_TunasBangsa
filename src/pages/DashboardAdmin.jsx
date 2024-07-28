import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PenerimaanMahasiswaBaru() {
  const sampleData = [
    { id: 1, name: "Ahmad Fauzi", major: "Teknik Informatika", status: "Belum Bayar" },
    { id: 2, name: "Siti Aisyah", major: "Sistem Informasi", status: "Sudah Bayar + Biaya Cicilan Pertama" },
    { id: 3, name: "Budi Santoso", major: "Teknik Komputer", status: "Sudah Bayar" },
    { id: 4, name: "Rina Kurnia", major: "Teknik Informatika", status: "Sudah Bayar" }
  ];

  return (
    <>
      <div className="halaman-penerimaan-mahasiswa" style={{ paddingTop: "100px" }}>
        <Container className="mt-5">
          <Row>
            <h2 className="text-center fw-bold mb-4">Data Penerimaan Mahasiswa Baru</h2>
          </Row>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.major}</td>
                  <td>{student.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
}
