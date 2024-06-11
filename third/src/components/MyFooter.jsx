import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function MyFooter() {
  return (
    <div className='mt-5'>
    <footer className="bg-dark text-light pt-4 pb-2 mt-auto fixed-bottom">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 fw-bold">&copy; All rights reserved to ITI 2024</p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fw-bold">
              Contact:
              <a href="https://www.facebook.com/profile.php?id=100012310412971" className="text-light mx-2" aria-label="Facebook">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://x.com/_Abdalmen3m" className="text-light mx-2" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/3bdalmen3m/?hl=en" className="text-light mx-2" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/abdelmonam-anwar-73710a1ba/" className="text-light mx-2" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
