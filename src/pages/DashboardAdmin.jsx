import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function PenerimaanMahasiswaBaru() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pmb-backend.vercel.app/user/getall");
        console.log("API response:", response.data.users); // Print response to console

        if (response.data && response.data.users) {
          const users = response.data.users;
          console.log("User data:", users); // Ensure we're getting the correct user data

          const studentData = users.map((user) => ({
            id: user.id,
            name: user.biodata?.fullName || user.name,
            major: user.biodata?.department,
            status: user.biodata?.status,
            // sesi: user.biodata?.departmentTime,
          }));
          console.log("Parsed student data:", studentData); // Ensure we're parsing the correct student data
          setStudents(studentData);
        } else {
          toast.error("Data tidak ditemukan.");
        }
      } catch (error) {
        toast.error("Gagal memuat data mahasiswa.");
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchData();
  }, []);

  console.log(students);

  return (
    <>
      <div className="halaman-penerimaan-mahasiswa" style={{ paddingTop: "100px" }}>
        <Container className="mt-5">
          <Row>
            <h2 className="text-center fw-bold mb-4">Data Penerimaan Mahasiswa Baru</h2>
          </Row>
          <div className="row mx-auto">
            <div className="col-lg-12 mx-auto">

            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Jurusan</th>
                  <th>Status</th>
                  {/* <th>sesi</th> */}
                </tr>
              </thead>
              <tbody>
                {/* Uang Pendaftaran + Cicilan Pertama */}
                {/* {console.log(students)} */}
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{(!student.major) ?  "Belum isi biodata" : (student.major == "TI")? "Teknik Informatika (S1)" : (student.major == "SI") ? "Sistem Informasi (S1)" : (student.major == "KA") ? "Komputerisasi Akuntansi (D3)" : (student.major == "MI") ? "Manajemen Informatika (D3)" : student.major}</td>
                    <td>{(!student.status) ? "Belum Bayar Pendaftaran" : (student.status == "pendaftaranCicilan") ? "Uang Pendaftaran + Cicilan Pertama" : (student.status == "uang_pendaftaran") ? "Uang Pendaftaran ( Rp 200.000)" : student.status }</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
}
