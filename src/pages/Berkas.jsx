import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Berkas = () => {
  const [formData, setFormData] = useState({
    userId: 0,
    sktl: "",
    ktp: "",
    ijazah: "",
    kartukeluarga: ""
  });
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", formData.userId);
    data.append("sktl", formData.sktl);
    data.append("ktp", formData.ktp);
    data.append("ijazah", formData.ijazah);
    data.append("kartukeluarga", formData.kartukeluarga);

    try {
      const response = await axios.post("https://pmb-backend.vercel.app/document", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response);
      toast.success("Berkas berhasil diupload");
      navigate("/"); // Redirect to homepage on success
    } catch (error) {
      toast.error("Terjadi kesalahan. Coba lagi.");
      console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"));
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        userId: parseInt(user.id)
      }));
    }
    console.log(formData.userId);
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-8 mx-auto mt-5">
              <div className="mb-3 mt-5 text-center">
                <br />
                <h2 className="text-center fw-bold">Berkas</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="mb-3">
                <label htmlFor="sktl" className="form-label">SKTL</label>
                <input className="form-control" type="file" id="sktl" name="sktl" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="mb-3">
                <label htmlFor="ktp" className="form-label">KTP</label>
                <input className="form-control" type="file" id="ktp" name="ktp" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="mb-3">
                <label htmlFor="ijazah" className="form-label">Ijazah</label>
                <input className="form-control" type="file" id="ijazah" name="ijazah" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="mb-3">
                <label htmlFor="kartukeluarga" className="form-label">Kartu Keluarga</label>
                <input className="form-control" type="file" id="kartukeluarga" name="kartukeluarga" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg mx-auto d-flex mt-3 justify-center">
              <button className="btn btn-primary mx-auto">Upload Berkas</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Berkas;
