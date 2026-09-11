import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi';
import Logo from '../../components/common/Logo/Logo';

const Register = () => {
  return (
    <div className="register-page bg-soft-lavender min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <Logo width={120} />
                </div>
                <h3 className="fw-bold mb-1">Create Your Account</h3>
                <p className="text-muted mb-4">Join HomeBazz and support home makers</p>

                <form className="text-start">
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">Full Name</label>
                    <input type="text" className="form-control form-control-lg rounded-pill bg-light border-0 px-4" placeholder="Enter your full name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-muted small fw-semibold">Mobile Number</label>
                    <input type="tel" className="form-control form-control-lg rounded-pill bg-light border-0 px-4" placeholder="Enter mobile number" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-muted small fw-semibold">Password</label>
                    <input type="password" className="form-control form-control-lg rounded-pill bg-light border-0 px-4" placeholder="Create password" />
                  </div>
                  
                  <button type="button" className="btn btn-primary btn-lg rounded-pill w-100 fw-bold shadow-sm mb-4">
                    Sign Up
                  </button>
                </form>

                <div className="position-relative mb-4">
                  <hr className="text-muted" />
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                    Or signup with
                  </span>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <button className="btn btn-outline-secondary rounded-pill w-50 d-flex align-items-center justify-content-center gap-2">
                    <BiLogoGoogle className="text-danger" size={20} /> Google
                  </button>
                  <button className="btn btn-outline-secondary rounded-pill w-50 d-flex align-items-center justify-content-center gap-2">
                    <BiLogoFacebook className="text-primary" size={20} /> Facebook
                  </button>
                </div>

                <p className="text-muted mb-0">
                  Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
