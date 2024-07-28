
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
                    "Content-Type" : "multipart/form-data"
                }
            })
            toast.success("Berkas berhasil diupload");
            setTimeout(() => {
            navigate("/"); // Redirect to homepage on success
            }, 1500);
        } catch (error) {
        toast.error("Terjadi kesalahan. Coba lagi.");
        }
    }
  
    // check if document true or false
    

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("data"))
        if(!user) {
          toast.error("Anda harus login terlebih dahulu")
          // delay 2 detik
          setTimeout(() => {
            navigate("/login")
          }, 1500)
        } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          userId: parseInt(user.id)
        }))
      }
        console.log(formData.userId)
      }, [])

    //   useEffect(() => {
        // const fetchedUser = axios.get("https://pmb-backend.vercel.app/user/" + formData.userId)

        // if (fetchedUser.) {
        //   navigate("/status")
        // }
        const checkdata = async () => {
            try {
                const response = await axios.get(`https://pmb-backend.vercel.app/user/${formData.userId}`);
                console.log(response)
                  if (response.data.user.document) {
                    // setBiodataExists(true)
                    toast.info("Kamu sudah mengupload berkas.")
                    setTimeout(() => {
                      navigate("/status"); // Redirect to the status page if biodata exists
                    }, 1500);
                  }
            } catch (e) {
                console.log(e)
            }

        }
        checkdata()
    //   }, [navigate])

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem("data"))
    //     if(!user) {
    //         toast.error("Anda harus login terlebih dahulu")
    //         navigate("/login")
    //     } else {
    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             userId: parseInt(user.id)
    //         }))
    //     }
    //     console.log(formData.userId)

    // }, [])

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto mt-5">
                            <div class="mb-3 mt-5 text-center">
                                <br />
                                <h2 className="text-center fw-bold">Berkas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="sktl" class="form-label">SKTL</label>
                                <input class="form-control" type="file" id="sktl" name="sktl" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="ktp" class="form-label">ktp</label>
                                <input class="form-control" type="file" id="ktp" name="ktp" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="ijazah" class="form-label">ijazah</label>
                                <input class="form-control" type="file" id="ijazah" name="ijazah" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="kartukeluarga" class="form-label">kartukeluarga</label>
                                <input class="form-control" type="file" id="kartukeluarga" name="kartukeluarga" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg mx-auto d-flex mt-3 justify-center">
                            <button className="btn btn-primary mx-auto ">Upload Berkas</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
);
};

export default Berkas;
