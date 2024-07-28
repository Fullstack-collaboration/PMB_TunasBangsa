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
        console.log("API response:", response.data); // Print response to console

        if (response.data && response.data.user) {
          const user = response.data.user;
          console.log("User data:", user); // Ensure we're getting the correct user data
          
          const student = {
            id: user.id,
            name: user.biodata.fullName,
            major: user.biodata.department,
            status: user.biodata.status,
          };
          console.log("Parsed student data:", student); // Ensure we're parsing the correct student data
          setStudents([student]);
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
              {students.map((student, index) => (
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
