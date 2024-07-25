import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BoxProgramStudi = ({programStudi, deskripsi}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <div data-aos="fade-up"
              className=" rounded-5 card mt-3"
              style={{ backgroundColor: " #1EA7D1" }}
            >
              <div className="row">
                <div className="col-md ps-sm-5 mx-md-2 my-md-3 col-12">
                  <div className="card-body text-center text-md-start">
                    <h4 className="card-title text-white fw-bold text-center text-md-start">
                      {programStudi}
                    </h4>
                    <p className="card-text text-white text-center text-md-start">
                      {deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BoxProgramStudi