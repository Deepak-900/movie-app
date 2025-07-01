import React from "react";

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-dark mt-5 border-top shadow-sm" style={{ backdropFilter: 'blur(6px)' }}>
            <div className="container-fluid py-5 px-5">
                <div className="row gy-2">
                    {/* Brand Section */}
                    <div className="col-md-4">
                        <h4 className="fw-bold text-primary">CINEMATE</h4>
                        <p className="text-muted">
                            Stream. Discover. Connect. Anytime. Anywhere. Together.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="col-6 col-md-2">
                        <h6 className="text-uppercase fw-semibold">Company</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-muted text-decoration-none">About</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h6 className="text-uppercase fw-semibold">Support</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Terms</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="col-md-4 text-center text-md-start">
                        <h6 className="text-uppercase fw-semibold">Connect</h6>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-dark fs-5"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>


            </div>
            <hr />

            <div className="text-center small text-muted align-items-center py-3">
                &copy; {new Date().getFullYear()} CINEMATE. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
