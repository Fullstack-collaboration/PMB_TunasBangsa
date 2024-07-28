import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function RegisData() {
  const [formData, setFormData] = useState({
    userId: 0,
    fullName: "",
    nisn: "",
    phoneNumber: "",
    nik: "",
    birthDate: "",
    nationality: "",
    address: "",
    fatherName: "",
    fatherNik: "",
    fatherOccupation: "",
    fatherEducation: "",
    fatherSalary: "",
    fatherBirthdate: "",
    motherName: "",
    motherNik: "",
    motherBirthdate: "",
    motherEducation: "",
    motherOccupation: "",
    motherSalary: "",
    schoolOrigin: "",
    schoolGraduateYear: "",
    schoolOriginAddress: "",
    department: "",
    departmentTime: "",
    status: "",
  });

  const [receipt, setReceipt] = useState(null);
  const [biodataExists, setBiodataExists] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"));
    if (user) {
      const userId = parseInt(user.id);
      setFormData((prevFormData) => ({ ...prevFormData, userId }));

// Check if biodata already exists
axios.get(`https://pmb-backend.vercel.app/user/${userId}`)
.then(response => { 
  console.log(response.data); // Log the biodata response
  if (response.data.user.biodata) {
        setBiodataExists(true);
            toast.info("Kamu sudah mengisi biodata.");
            navigate("/"); // Redirect to homepage if biodata exists
        }
      })
      .catch(error => {
        console.error("Error checking biodata:", error);
      });
      }
      }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    if (receipt) {
      form.append("receipt", receipt);
    }

    try {
      await axios.post("https://pmb-backend.vercel.app/biodata", form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success("Data berhasil diinput");
      navigate("/berkas"); // Redirect to the next page on success
    } catch (error) {
      toast.error("Terjadi kesalahan. Coba lagi.");
    }
  };

  // If biodata exists, render nothing to prevent access
  if (biodataExists) {
    return null;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <form onSubmit={handleSubmit}>
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
                    <Form.Control type="text" name="nisn" onChange={handleChange} id="Nisn" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="fullname">Nama Lengkap</Form.Label>
                    <Form.Control type="text" id="fullname" name="fullName" value={formData.fullName} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TptLahir">Tempat Lahir</Form.Label>
                    <Form.Control type="text" id="TptLahir" name="birthPlace" value={formData.birthPlace} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <div>
                      <Form.Check inline label="Laki-laki" name="gender" value={"laki-laki"} onChange={handleChange} type="radio" id="radioLaki" required />
                      <Form.Check inline label="Perempuan" name="gender" type="radio" id="radioPerempuan" value={"perempuan"} onChange={handleChange} required />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIK">NIK</Form.Label>
                    <Form.Control type="text" id="NIK" name="nik" value={formData.nik} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NoHP">No. HP</Form.Label>
                    <Form.Control type="number" id="NoHP" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TglLahir">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="TglLahir" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="country">Kewarganegaraan</Form.Label>
                    <Form.Control type="text" id="country" name="nationality" value={formData.nationality} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Address">Alamat Lengkap</Form.Label>
                    <Form.Control type="text" id="Address" name="address" value={formData.address} onChange={handleChange} required />
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
                    <Form.Control type="text" id="NIKAyah" name="fatherNik" value={formData.fatherNik} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirAyah">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="OtglLahirAyah" name="fatherBirthdate" value={formData.fatherBirthdate} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationAyah">Pendidikan</Form.Label>
                    <Form.Select id="EducationAyah" name="fatherEducation" value={formData.fatherEducation} onChange={handleChange} required>
                      <option value="">Pilih Pendidikan</option>
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
                    <Form.Control type="text" id="NameAyah" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OccupationAyah">Pekerjaan</Form.Label>
                    <Form.Select id="OccupationAyah" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} required>
                      <option value="">Pilih Pekerjaan</option>
                      <option value="Swasta">Swasta</option>
                      <option value="PNS">Pegawai Negeri Sipil (PNS)</option>
                      <option value="TNI/Polri">TNI/Polri</option>
                      <option value="Wiraswasta">Wiraswasta</option>
                      <option value="Buruh">Buruh</option>
                      <option value="Pensiunan">Pensiunan</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="salaryAyah">Penghasilan</Form.Label>
                    <Form.Select id="salaryAyah" name="fatherSalary" value={formData.fatherSalary} onChange={handleChange} required>
                      <option value="">Pilih Penghasilan</option>
                      <option value="<1.000.000">Kurang dari Rp1.000.000</option>
                      <option value="1.000.000-2.500.000">Rp1.000.000-Rp2.500.000</option>
                      <option value="2.500.000-5.000.000">Rp2.500.000-Rp5.000.000</option>
                      <option value="5.000.000-10.000.000">Rp5.000.000-Rp10.000.000</option>
                      <option value=">10.000.000">Lebih dari Rp10.000.000</option>
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
                    <Form.Control type="text" id="NIKIbu" name="motherNik" value={formData.motherNik} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirIbu">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="OtglLahirIbu" name="motherBirthdate" value={formData.motherBirthdate} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationIbu">Pendidikan</Form.Label>
                    <Form.Select id="EducationIbu" name="motherEducation" value={formData.motherEducation} onChange={handleChange} required>
                      <option value="">Pilih Pendidikan</option>
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
                    <Form.Control type="text" id="NameIbu" name="motherName" value={formData.motherName} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OccupationIbu">Pekerjaan</Form.Label>
                    <Form.Select id="OccupationIbu" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} required>
                      <option value="">Pilih Pekerjaan</option>
                      <option value="Swasta">Swasta</option>
                      <option value="PNS">Pegawai Negeri Sipil (PNS)</option>
                      <option value="TNI/Polri">TNI/Polri</option>
                      <option value="Wiraswasta">Wiraswasta</option>
                      <option value="Buruh">Buruh</option>
                      <option value="Pensiunan">Pensiunan</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="salaryIbu">Penghasilan</Form.Label>
                    <Form.Select id="salaryIbu" name="motherSalary" value={formData.motherSalary} onChange={handleChange} required>
                      <option value="">Pilih Penghasilan</option>
                      <option value="<1.000.000">Kurang dari Rp1.000.000</option>
                      <option value="1.000.000-2.500.000">Rp1.000.000-Rp2.500.000</option>
                      <option value="2.500.000-5.000.000">Rp2.500.000-Rp5.000.000</option>
                      <option value="5.000.000-10.000.000">Rp5.000.000-Rp10.000.000</option>
                      <option value=">10.000.000">Lebih dari Rp10.000.000</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Row className="mt-5">
              <h2 className="text-center fw-bold">Data Asal Sekolah</h2>
            </Row>

            <Container className="mt-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolOrigin">Asal Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolOrigin" name="schoolOrigin" value={formData.schoolOrigin} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolAddress">Alamat Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolAddress" name="schoolOriginAddress" value={formData.schoolOriginAddress} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolGraduateYear">Tahun Lulus</Form.Label>
                    <Form.Control type="number" id="schoolGraduateYear" name="schoolGraduateYear" value={formData.schoolGraduateYear} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Row className="mt-5">
              <h2 className="text-center fw-bold">Data Program Studi</h2>
            </Row>

            <Container className="mt-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="programStudy">Program Studi</Form.Label>
                    <Form.Select id="programStudy" name="department" value={formData.department} onChange={handleChange} required>
                      <option value="">Pilih Program Studi</option>
                      <option value="Informatika">Informatika</option>
                      <option value="Sistem Informasi">Sistem Informasi</option>
                      <option value="Teknik Komputer">Teknik Komputer</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="programStudyTime">Waktu Kuliah</Form.Label>
                    <Form.Select id="programStudyTime" name="departmentTime" value={formData.departmentTime} onChange={handleChange} required>
                      <option value="">Pilih Waktu Kuliah</option>
                      <option value="Pagi">Pagi</option>
                      <option value="Sore">Sore</option>
                      <option value="Malam">Malam</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Row className="mt-5">
              <Col className="text-center">
                <Button type="submit" variant="primary">Submit</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </form>
    </>
  );
}
