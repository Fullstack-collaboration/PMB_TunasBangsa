const Berkas = () => {
    return (
        <>
            <div className="container">
                <form>
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
                                <input class="form-control" type="file" id="sktl" name="sktl" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="ktp" class="form-label">ktp</label>
                                <input class="form-control" type="file" id="ktp" name="ktp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="ijazah" class="form-label">ijazah</label>
                                <input class="form-control" type="file" id="ijazah" name="ijazah" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div class="mb-3">
                                <label htmlFor="kartukeluarga" class="form-label">kartukeluarga</label>
                                <input class="form-control" type="file" id="kartukeluarga" name="kartukeluarga" />
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