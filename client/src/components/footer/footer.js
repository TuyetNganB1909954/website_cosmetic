import React from "react";
import logo from "../../assets/img/Claudia.jpg"

function Footer(){
    return(
        <footer className="">
            <hr/>
            <section className="footer-top">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"> 
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>SNOW SHOP
                        </h6>
                        <p>
                            {/* <img src="../assets/logo.png" width="150px" height="150px"> */}
                            <img src={logo}  width="150px" height="150px"/>
                        </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Sản Phẩm
                        </h6>
                        <p>
                            <a href="#" className="text-reset">Chăm sóc da</a>
                        </p>
                        <p>
                            <a href="#" className="text-reset">Chăm sóc tóc</a>
                        </p>
                        <p>
                            <a href="#" className="text-reset">Khuyến mãi</a>
                        </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            CỬA HÀNG
                        </h6>
                        <p>
                            <a href="#!" className="text-reset">Trợ giúp</a>
                        </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Liên hệ
                        </h6>
                        <p><i className="fas fa-home me-3"></i>Thành phố Cần Thơ</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            TuyetNgan@gmail.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4 finally  " >
                <div className="container">
                <span >© 2022 Thiết kế bởi Nguyễn Thị Tuyết Ngân</span>  
                </div>
                
            </div>
        </footer>
        
    )
}
export default Footer
