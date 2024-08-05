import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ContentLoader, { List } from "react-content-loader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Swal from "sweetalert2";

export default function ViewData() {
  const [formData, setFormData] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [newStatus, setNewStatus] = useState(null);
  const [newReceipt, setNewReceipt] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = () => {
    const user = JSON.parse(localStorage.getItem("data"));
    if (user) {
      const userId = parseInt(user.id);
      axios
        .get(`https://pmb-backend.vercel.app/user/${userId}`)
        .then((response) => {
          console.log(response.data.user.documents);
          if (response.data.user.biodata) {
            setFormData(response.data.user.biodata);
            // } else if (response.data.user.documents) {
            setDocuments(response?.data?.user?.documents);
          } else {
            toast.info("Kamu belum mengisi biodata.");
            navigate("/regisdata");
          }
        })
        .catch((error) => {
          console.error("Error fetching biodata:", error);
        });
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  console.log(formData);
  console.log(documents);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch /user/updatepayment/4

    const form = new FormData();
    form.append("status", newStatus);
    form.append("receipt", newReceipt);

    // const newData = {
    //   status: newStatus,
    //   receipt: newReceipt,
    // };

    try {
      const response = await axios.post(`https://pmb-backend.vercel.app/user/updatepayment/${formData.userId}`, form);
      toast.success("Data berhasil di update.");
      console.log(response.data);
      // if (response.data.status === "success") {
        Swal.fire({
          title: 'Berhasil',
          text: 'Update Pembayaran berhasil',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // navigate("/profile");
        // refresh 
        fetchUserData();
      // }
    } catch (e) {
      console.log(e.message);
      // toast.info(e.message);
      Swal.fire({
        title: 'GAGAL',
        text: e.message,
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  };

  const handleChange = (e) => {
    setNewStatus(e.target.value);
    console.log(newStatus);
  };

  const handleFileChange = (e) => {
    // const file = e.target.files[0]
    setNewReceipt(e.target.files[0]);
  };

  return (
    <>
      {!formData ? (
        <div className="container h-100" style={{ height: "200px" }}>
          <div className="row justify-content-center text-center h-100">
            <div className="col d-flex align-items-center justify-content-center h-100">
              <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: "100vh" }}>
                {/* <div>Loading....</div> */}
                {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
                <p>
                  {/* <Skeleton count={10} /> || */}
                  {/* <List /> */}
                  <ClimbingBoxLoader color={"#047CB6"} loading={true} size={40} />
                  {/* Sedang memuat data user, mohon tunggu beberapa saat ... */}
                </p>
                {/* </SkeletonTheme> */}
                {/* <Skeleton count={10}/> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
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

            <Container className="mt-3">
              {/* <Form> */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolName">Nama Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolName" name="schoolOrigin" value={formData.schoolOrigin} disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="yearGraduate">Tahun Tamat</Form.Label>
                    <Form.Control type="text" id="yearGraduate" name="schoolGraduateYear" value={formData.schoolGraduateYear} disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolAddress">Alamat Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolAddress" name="schoolOriginAddress" value={formData.schoolOriginAddress} disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="program">Jenjang dan Prodi</Form.Label>
                    <Form.Control type="text" id="department" name="department" value={formData.department} disabled />
                    {/* <Form.Select id="program"  name="department" value={formData.department}  disabled >
                      <option value="">Pilih Jenjang dan Prodi</option>
                      <option value="Teknik Informatika (S1)">Teknik Informatika (S1)</option>
                      <option value="Sistem Informasi (S1)">Sistem Informasi (S1)</option>
                      <option value="Manajemen Informatika(D3)">Manajemen Informatika(D3)</option>
                      <option value="Komputerisasi Akuntansi (D3)">Komputerisasi Akuntansi (D3)</option>
                    </Form.Select> */}
                  </Form.Group>
                </Col>
                {/* <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="status">Status</Form.Label>
                    <Form.Control type="text" id="status" />
                  </Form.Group>
                </Col> */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="timeOption">Pilihan Waktu</Form.Label>
                    <Form.Control type="text" id="departmentTime" name="departmentTime" value={formData.departmentTime} disabled />
                    {/* <Form.Select id="timeOption"  name="departmentTime" value={formData.departmentTime}  disabled >
                      <option value="">Pilih Waktu</option>
                      <option value="08.00 WIB (Pagi)">08.00 WIB (Pagi)</option>
                      <option value="14.00 WIB (Siang)">14.00 WIB (Siang)</option>
                      <option value="18.00 WIB">18.00 WIB (Malam)</option>
                    </Form.Select> */}
                  </Form.Group>
                </Col>
                {/* <Col md={6}> </Col> */}
                <form onSubmit={handleSubmit}>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="paymentStatus">Status Pembayaran</Form.Label>
                      {/* <Form.Control type="text" id="status"  name="status" value={formData.status}   /> */}
                      <Form.Select id="paymentStatus" name="status" placeholder={formData.status} value={newStatus} onChange={handleChange}>
                        <option value="">{formData.status}</option>
                        <option value="Belum Bayar">Belum Bayar</option>
                        <option value="Uang Pendaftaran  (Rp 200.000)">Uang Pendaftaran | Rp 200.000</option>
                        <option value="Uang Pendaftaran + Cicilan Pertama">Uang Pendaftaran + Cicilan Pertama</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="fileUpload">Bukti Pembayaran</Form.Label>
                      <div className="input-group mb-3">
                        <input type="file" className="form-control" id="fileUpload" name="receipt" onChange={handleFileChange} />
                      </div>
                      <p className="text-danger ">* hanya upload foto dengan format jpeg, jpg, png, svg</p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <div className="col mx-auto">
                      <h5>Bukti Pembayaran</h5>
                      <img src={formData.receipt} alt="receipt" width={200} />
                    </div>
                  </Col>
                  <button className="btn btn-primary mt-2">Update Pembayaran</button>
                </form>
              </Row>

              {/* </Form> */}
            </Container>
            <Container className="mt-3">
              {documents ? (
                <div className="row mx-auto">
                  <div className="col mx-auto">
                    <h5>Ktp</h5>
                    <img src={documents.ktp} alt="ktp" width={200} />
                  </div>
                  <div className="col mx-auto">
                    <h5>sktl</h5>
                    <img src={documents.sktl} alt="sktl" width={200} />
                  </div>
                  <div className="col mx-auto">
                    <h5>ijazah</h5>
                    <img src={documents.ijazah} alt="ijazah" width={200} />
                  </div>
                  <div className="col mx-auto">
                    <h5>Kartu Keluarga</h5>
                    <img src={documents.kartukeluarga} alt="kartukeluarga" width={200} />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="fw-medium">Berkas Belum diisi</p>
                </div>
              )}
            </Container>
          </Container>
        </div>
      )}
    </>
  );
}
