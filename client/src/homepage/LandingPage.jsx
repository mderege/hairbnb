import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css'; // Adjust the path according to your project structure
// import './assets/js/main.js';

// Import images
import favicon from './assets/img/favicon.png';
import appleTouchIcon from './assets/img/apple-touch-icon.png';
import hairbnbLogo from './assets/img/hairbnblogo.svg';
import heroBg from './assets/img/hero-bg.jpg';
import statsBg from './assets/img/stats-bg.jpg';
import seanImg from './assets/img/team/sean.jpeg';
import brianImg from './assets/img/team/brian.jpeg';
import mahletImg from './assets/img/team/mahlet.jpeg';
import stephanieImg from './assets/img/team/stephanie.jpeg';
import ctaBg from './assets/img/cta-bg.jpg';

function LandingPage() {

  // const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  // const faqData = [
  //   {
  //     question: 'Is Hairbnb free to use? Is it more expensive to book through Hairbnb?',
  //     answer: 'Hairbnb is completely free to use. Prices are set by stylists depending on the service, and are not priced differently on our platform.',
  //   },
  //   // Add other FAQ items here
  // ];
  
  // function toggleFaq(index) {
  //   setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  // }
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    new PureCounter();
  }, []);

  return (
    <div className="index-page">
      {/* <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={hairbnbLogo} alt="" /> =
            <h1 className="sitename">Hairbnb</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html#about">About</a>
              </li>
              <li>
                <a href="index.html#services">Services</a>
              </li>
              <li>
                <a href="index.html#team">Team</a>
              </li>
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header> */}

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src={heroBg} alt="" /> 

          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2 data-aos="fade-up" data-aos-delay="100">
                  Hairbnb
                </h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  Helping you get the haircut or stylist you want
                </p>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
                {/* FIXME: make sign up button just go down to next section */}
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="sign-up-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Sign up / Log in" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}

        {/* About Section */}
        <section id="about" className="about section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3>About Us</h3>
                <h2>We're like Airbnb, but for hairdressers, hair stylists, and barbers.</h2>
                <p>
                  You deserve the haircut or style you want. Our platform lets you browse through, search,
                  filter, and look at the work of stylists in your area, helping you understand which will
                  be the best fit for you. Oh - and you can see availability and book appointments directly
                  through the app.
                </p>
                <a href="#" className="read-more">
                  <span>Browse stylists in your area</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Free to use</h3>
                      <p>Hairbnb never adds hidden fees or requires a subscription to book</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse"></i>
                      <h3>Simple browsing</h3>
                      <p>We make it easy to search and filter for the services you want</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                      <i className="bi bi-command"></i>
                      <h3>Direct management</h3>
                      <p>Appointments, re-bookings, and cancellations are all done here, on the site</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box">
                      <i className="bi bi-graph-up-arrow"></i>
                      <h3>Reviews</h3>
                      <p>See photos of work done in the past so you know what you'll get</p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section dark-background">
          <img src={statsBg} alt="" data-aos="fade-in" />

          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="940k"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Salons</p>
                </div>
              </div>
              {/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="100"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Bookings Made</p>
                </div>
              </div>
              {/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Simple App</p>
                </div>
              </div>
              {/* End Stats Item */}
            </div>
          </div>
        </section>
        {/* /Stats Section */}

        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Use any of our features to find the hair service you deserve</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Location Search
                      </a>
                    </h4>
                    <p className="description">
                      See hair services near you, or search for services in a different area
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Direct Booking
                      </a>
                    </h4>
                    <p className="description">
                      Make appointments and manage them entirely through our platform
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Communication
                      </a>
                    </h4>
                    <p className="description">
                      Running late? Need to reschedule? No more digging for phone numbers or last-minute
                      calls
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        See the service
                      </a>
                    </h4>
                    <p className="description">
                      See previous work, the salon, and/or the area it's in, so you know what to expect
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Get Prices
                      </a>
                    </h4>
                    <p className="description">Find how much what you want is going to cost</p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Leave Reviews
                      </a>
                    </h4>
                    <p className="description">
                      Read other's reviews or write your own - rate your service
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* Faq Section */}
        <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="content px-xl-5">
                  <h3>
                    <span>Frequently Asked </span>
                    <strong>Questions</strong>
                  </h3>
                  <p>
                    Thinking about making an account? Have questions? Check out our FAQ - it might answer
                    your question!
                  </p>
                </div>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <div className="faq-container">
                  <div className="faq-item">
                    <h3>
                      <span className="num">1.</span>{' '}
                      <span>
                        Is Hairbnb free to use? Is it more expensive to book through Hairbnb?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Hairbnb is completely free to use. Prices are set by stylists depending on the
                        service, and are not priced differently on our platform.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">2.</span>{' '}
                      <span>What happens if I miss my booking?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Don't worry! Life happens. You can always re-book or reschedule on the site
                        directly. No need to call or text anyone.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">3.</span> <span>How does it work?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        You search and filter for what you want. You make the booking, and the stylist
                        receives it. You show up, get what you want done, and leave a review. Rinse and
                        repeat.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">4.</span>{' '}
                      <span>I can't see my stylist on Hairbnb. Why is that?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Some stylists don't maintain an online presence and are only using word-of-mouth
                        or social media. Reach out to us and we will add them to the service.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">5.</span>{' '}
                      <span>My booking disappeared, but I wasn't notified. What happened?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        If bookings are cancelled, then that means they were cancelled on the stylists'
                        end. You should receive emails or texts when this occurs.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Section */}

        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>We are a team of 4 students at Vanderbilt University.</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src={seanImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Sean Onamade</h4>
                  <span>Developer</span>
                  <p>Sean is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src={brianImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Brian Shon</h4>
                  <span>Developer</span>
                  <p>Brian is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src={mahletImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Mahlet Derege</h4>
                  <span>Developer</span>
                  <p>Mahlet is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src={stephanieImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Stephanie Ting</h4>
                  <span>Developer</span>
                  <p>Stephanie is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section dark-background">
          <img src={ctaBg} alt="" />

          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Sign up today!</h3>
                  <p>
                    Get the hair services you want and deserve by signing up today and booking appointments
                    with salons in your area.
                  </p>
                  <a className="cta-btn" href="#">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Hairbnb</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna
                derita valies darta donna mare fermentum iaculis eu non diam phasellus.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      {/* <div id="preloader"></div> */}

    </div>
  );
}

export default LandingPage;