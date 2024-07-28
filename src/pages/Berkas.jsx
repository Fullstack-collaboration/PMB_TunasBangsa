import axios from "axios"
import { useState } from "react"

const Berkas = () => {
    const [formData, setFormData] = useState({
        sktl: "",
        ktp: "",
        ijazah: "",
        kartukeluarga: ""
    })

    const handleFileChange = (e) => {
        // const {name, files} = e.target
        // setFormData({
        //     ...formData,
        //     [name]: files[0]
        // })

        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0]
        })
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("sktl", formData.sktl)
        formData.append("ktp", formData.ktp)
        formData.append("ijazah", formData.ijazah)
        formData.append("kartukeluarga", formData.kartukeluarga)

        try {
            const response = await axios.post("http://localhost:3003/document", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
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
    )
}

export default Berkas