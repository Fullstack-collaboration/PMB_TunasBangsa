import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import readings from "../assets/svg/asset-readings.svg";
import contributions from "../assets/svg/asset-contribution.svg";
import styles from "./RegisData.module.css";
import axios from "axios";
import CardBuku from "../components/CardBuku";
import CardVideo from "../components/CardVideo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisData() {

  return (
    <>
      <div className="halaman-profile">
        <Container className="mt-5">
          <Row>
            <h2 className="text-center fw-bold">Data Diri</h2>
          </Row>
          <Container className="mt-5">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Nisn">NISN</Form.Label>
                    <Form.Control type="text" id="Nisn" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="fullname">Nama Lengkap</Form.Label>
                    <Form.Control type="text" id="fullname" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TptLahir">Tempat Lahir</Form.Label>
                    <Form.Control type="text" id="TptLahir" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <div>
                      <Form.Check inline label="Laki-laki" name="gender" type="radio" id="radioLaki" />
                      <Form.Check inline label="Perempuan" name="gender" type="radio" id="radioPerempuan" />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIK">NIK</Form.Label>
                    <Form.Control type="number" id="NIK" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NoHP">No. HP</Form.Label>
                    <Form.Control type="number" id="NoHP" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="TglLahir">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="TglLahir" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="country">Kewarganegaraan</Form.Label>
                    <Form.Control type="text" id="country" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="Address">Alamat Lengkap</Form.Label>
                    <Form.Control type="text" id="Address" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>

          <Row className="mt-5">
            <h2 className="text-center fw-bold">Data Orang Tua</h2>
          </Row>

          <Row>
            <h4 className="text-start fw-bold">1. Ayah</h4>
          </Row>
          <Container className="mt-3">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIKAyah">NIK</Form.Label>
                    <Form.Control type="text" id="NIKAyah" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirAyah">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="OtglLahirAyah" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationAyah">Pendidikan</Form.Label>
                    <Form.Select id="EducationAyah">
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
                    <Form.Control type="text" id="NameAyah" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="JobsAyah">Pekerjaan</Form.Label>
                    <Form.Control type="text" id="JobsAyah" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="PenghasilanAyah">Penghasilan</Form.Label>
                    <Form.Select id="PenghasilanAyah">
                      <option value="">Pilih Penghasilan</option>
                      <option value="below1M">Di bawah 1 juta</option>
                      <option value="1M-3M">1 juta - 3 juta</option>
                      <option value="3M-5M">3 juta - 5 juta</option>
                      <option value="above5M">Di atas 5 juta</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>

          <Row className="mt-5">
            <h4 className="text-start fw-bold">2. Ibu</h4>
          </Row>
          <Container className="mt-3">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="NIKIbu">NIK</Form.Label>
                    <Form.Control type="text" id="NIKIbu" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="OtglLahirIbu">Tanggal Lahir</Form.Label>
                    <Form.Control type="date" id="OtglLahirIbu" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="EducationIbu">Pendidikan</Form.Label>
                    <Form.Select id="EducationIbu">
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
                    <Form.Control type="text" id="NameIbu" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="JobsIbu">Pekerjaan</Form.Label>
                    <Form.Control type="text" id="JobsIbu" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="PenghasilanIbu">Penghasilan</Form.Label>
                    <Form.Select id="PenghasilanIbu">
                      <option value="">Pilih Penghasilan</option>
                      <option value="below1M">Di bawah 1 juta</option>
                      <option value="1M-3M">1 juta - 3 juta</option>
                      <option value="3M-5M">3 juta - 5 juta</option>
                      <option value="above5M">Di atas 5 juta</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>

          <Row className="mt-5">
            <h2 className="text-center fw-bold">Data Lainnya</h2>
          </Row>

          <Row className="mt-5">
            <h4 className="text-start fw-bold">Data Asal Sekolah</h4>
          </Row>
          <Container className="mt-3">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolName">Nama Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolName" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="yearGraduate">Tahun Tamat</Form.Label>
                    <Form.Control type="text" id="yearGraduate" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="schoolAddress">Alamat Sekolah</Form.Label>
                    <Form.Control type="text" id="schoolAddress" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="program">Jenjang dan Prodi</Form.Label>
                    <Form.Select id="program">
                      <option value="">Pilih Jenjang dan Prodi</option>
                      <option value="SI">Sistem Informasi (S1)</option>
                      <option value="TI">Teknik Informatika (S1)</option>
                      <option value="MI">Manajemen Informatika(D3)</option>
                      <option value="KA">Komputerisasi Akuntansi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="status">Status</Form.Label>
                    <Form.Control type="text" id="status" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="timeOption">Pilihan Waktu</Form.Label>
                    <Form.Select id="timeOption">
                      <option value="">Pilih Waktu</option>
                      <option value="below1M">08.00 WIB (Pagi)</option>
                      <option value="1M-3M">14.00 WIB (Siang)</option>
                      <option value="3M-5M">18.00 WIB (Malam)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="paymentStatus">Status Pembayaran</Form.Label>
                    <Form.Select id="paymentStatus">
                      <option value="">Pilih Status Pembayaran</option>
                      <option value="belum_bayar">Belum Bayar</option>
                      <option value="uang_pendaftaran">Uang Pendaftaran | Rp 200.000</option>
                      <option value="pendaftaranCicilan">Uang Pendaftaran + Cicilan Pertama</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="fileUpload">Bukti Pembayaran</Form.Label>
                    <div className="input-group mb-3">
                      <input type="file" className="form-control" id="fileUpload" />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3 ">
                <Col>
                  <div className="d-flex justify-content-center ">
                    <Button
                      type="submit"
                      className="btn btn-light bgWarna text-white"
                      id={styles.submitBtn}
                    >
                      Gass Registrasi Kuliah
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
      </div>
    </>
  );
}
