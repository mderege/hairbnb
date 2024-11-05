// HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Hairbnb</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Helping you get the haircut or stylist you want
            </p>
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            {/* Sign-up form */}
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              {/* <div className="sign-up-form">
                <input type="email" name="email" />
                <input type="submit" value="Sign up / Log in" />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
