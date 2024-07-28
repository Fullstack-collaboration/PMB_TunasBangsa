import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ViewData() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"));
    if (user) {
      const userId = parseInt(user.id);
      axios.get(`https://pmb-backend.vercel.app/user/${userId}`)
        .then(response => {
          if (response.data.user.biodata) {
            setFormData(response.data.user.biodata);
          } else {
            toast.info("Kamu belum mengisi biodata.");
            navigate("/regisdata");
          }
        })
        .catch(error => {
          console.error("Error fetching biodata:", error);
        });
    }
  }, [navigate]);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  if (!formData) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <div className="halaman-profile">
        <Container className="mt-5">
          <Row>
            <h2 className="text-center fw-bold">Data Diri</h2>
          </Row>
          <Container className="mt-5">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Nisn">NISN</Form.Label>
                    <Form.Control type="text" name="nisn" value={formData.nisn} id="Nisn" disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="fullname">Nama Lengkap</Form.Label>
                    <Form.Control type="text" id="fullname" name="fullName" value={formData.fullName} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TptLahir">Tempat Lahir</Form.Label>
                    <Form.Control type="text" id="TptLahir" name="birthPlace" value={formData.birthPlace} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <div>
                      <Form.Check inline label="Laki-laki" name="gender" value={"laki-laki"} checked={formData.gender === "laki-laki"} type="radio" id="radioLaki" disabled />
                      <Form.Check inline label="Perempuan" name="gender" type="radio" id="radioPerempuan" value={"perempuan"} checked={formData.gender === "perempuan"} disabled />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIK">NIK</Form.Label>
                    <Form.Control type="text" id="NIK" name="nik" value={formData.nik} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NoHP">No. HP</Form.Label>
                    <Form.Control type="number" id="NoHP" name="phoneNumber" value={formData.phoneNumber} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TglLahir">Tanggal Lahir</Form.Label>
                    <Form.Control type="text" id="TglLahir" name="birthDate" value={formatDate(formData.birthDate)} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="country">Kewarganegaraan</Form.Label>
                    <Form.Control type="text" id="country" name="nationality" value={formData.nationality} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Address">Alamat Lengkap</Form.Label>
                    <Form.Control type="text" id="Address" name="address" value={formData.address} disabled />
                  </Form.Group>
                </Col>
              </Row>
          </Container>

          <Row className="mt-5">
            <h2 className="text-center fw-bold">Data Orang Tua</h2>
          </Row>

          <Row>
            <h4 className="text-start fw-bold">1. Ayah</h4>
          </Row>
          <Container className="mt-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIKAyah">NIK</Form.Label>
                    <Form.Control type="text" id="NIKAyah" name="fatherNik" value={formData.fatherNik} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirAyah">Tanggal Lahir</Form.Label>
                    <Form.Control type="text" id="OtglLahirAyah" name="fatherBirthdate" value={formatDate(formData.fatherBirthdate)} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationAyah">Pendidikan</Form.Label>
                    <Form.Select id="EducationAyah" name="fatherEducation" value={formData.fatherEducation} disabled>
                      <option value="SD">Sekolah Dasar (SD)</option>
                      <option value="SMP">Sekolah Menengah Pertama (SMP)</option>
                      <option value="SMA/SMK">Sekolah Menengah Atas/Kejuruan (SMA/SMK)</option>
                      <option value="S1">Strata 1 (S1)</option>
                      <option value="S2">Strata 2 (S2)</option>
                      <option value="S3">Strata 3 (S3)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NameAyah">Nama Ayah</Form.Label>
                    <Form.Control type="text" id="NameAyah" name="fatherName" value={formData.fatherName} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="JobsAyah">Pekerjaan</Form.Label>
                    <Form.Control type="text" id="JobsAyah" name="fatherOccupation" value={formData.fatherOccupation} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="PenghasilanAyah">Penghasilan</Form.Label>
                    <Form.Select id="PenghasilanAyah" name="fatherSalary" value={formData.fatherSalary} disabled>
                      <option value="below1M">Di bawah 1 juta</option>
                      <option value="1M-3M">1 juta - 3 juta</option>
                      <option value="3M-5M">3 juta - 5 juta</option>
                      <option value="above5M">Di atas 5 juta</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
          </Container>

          <Row className="mt-5">
            <h4 className="text-start fw-bold">2. Ibu</h4>
          </Row>
          <Container className="mt-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIKIbu">NIK</Form.Label>
                    <Form.Control type="text" id="NIKIbu" name="motherNik" value={formData.motherNik} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirIbu">Tanggal Lahir</Form.Label>
                    <Form.Control type="text" id="OtglLahirIbu" name="motherBirthdate" value={formatDate(formData.motherBirthdate)} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationIbu">Pendidikan</Form.Label>
                    <Form.Select id="EducationIbu" name="motherEducation" value={formData.motherEducation} disabled>
                      <option value="SD">Sekolah Dasar (SD)</option>
                      <option value="SMP">Sekolah Menengah Pertama (SMP)</option>
                      <option value="SMA/SMK">Sekolah Menengah Atas/Kejuruan (SMA/SMK)</option>
                      <option value="S1">Strata 1 (S1)</option>
                      <option value="S2">Strata 2 (S2)</option>
                      <option value="S3">Strata 3 (S3)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NameIbu">Nama Ibu</Form.Label>
                    <Form.Control type="text" id="NameIbu" name="motherName" value={formData.motherName} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="JobsIbu">Pekerjaan</Form.Label>
                    <Form.Control type="text" id="JobsIbu" name="motherOccupation" value={formData.motherOccupation} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="PenghasilanIbu">Penghasilan</Form.Label>
                    <Form.Select id="PenghasilanIbu" name="motherSalary" value={formData.motherSalary} disabled>
                      <option value="below1M">Di bawah 1 juta</option>
                      <option value="1M-3M">1 juta - 3 juta</option>
                      <option value="3M-5M">3 juta - 5 juta</option>
                      <option value="above5M">Di atas 5 juta</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
