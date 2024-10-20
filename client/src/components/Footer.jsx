// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Footer About */}
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">Hairbnb</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter"></i></a>
              {/* ... other social icons */}
            </div>
          </div>
          {/* ... other footer sections */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
