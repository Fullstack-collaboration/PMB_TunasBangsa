import logo from "../assets/svg/footer_logo.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-md-5 col-12">
              <img
                src={logo}
                alt="logo"
                className="w-50 d-flex mx-md-0 mx-auto"
              />
              <p className="font-footer mt-4 opacity-75 text-center text-md-start">
                Our vision is to provide convenience <br />
                and help increase your sales business.
              </p>
              <div className="row justify-content-center mb-3 mb-md-0 justify-content-md-start">
                <span
                  className="bg-white rounded-circle"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "15px",
                    marginLeft: "10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#437EF7"
                    viewBox="0 0 24 24"
                    style={{ marginLeft: "-5px", marginTop: "3px" }}
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </span>
                <span
                  className="bg-white rounded-circle"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "15px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#437EF7"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "-5px", marginTop: "3px" }}
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </span>
                <span
                  className="bg-white rounded-circle"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "15px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#437EF7"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "-5px", marginTop: "3px" }}
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <p className="font-footer opacity-75 fw-bold text-center text-md-start">
                Tentang Kami
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Visi dan Misi STIKOM Tunas Bangsa
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Team Website Development
              </p>
            </div>
            <div className="col-md-3 col-12">
              <p className="font-footer opacity-75 fw-bold text-center text-md-start">
                Program Studi
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Teknik Informatika (S1)
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Sistem Informasi (S1)
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Manajemen Informatika (D3)
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Komputerisasi Akutansi (D3)
              </p>
            </div>
            <div className="col-md-1 col-12">
              <p className="font-footer opacity-75 fw-bold text-center text-md-start">
                Socials
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Discord
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Instagram
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Twitter
              </p>
              <p className="font-footer opacity-75 text-center text-md-start">
                Facebook
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-5 col-12 text-center text-md-start order-3 order-md-0">
              <p className="font-footer opacity-75">
                ©2024 PMB Stikom Tunas Bangsa. All rights reserved
              </p>
            </div>
            <div className="col-md-3 col-12 text-center text-md-start">
              <p className="font-footer opacity-75">Privacy & Policy</p>
            </div>
            <div className="col-md-2 col-12 text-center text-md-start">
              <p className="font-footer opacity-75">Terms & Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
