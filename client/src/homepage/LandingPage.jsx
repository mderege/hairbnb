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

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="col-lg-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
      <div className="faq-container space-y-6">
        {[
          {
            question: "Is Hairbnb free to use? Is it more expensive to book through Hairbnb?",
            answer:
              "Hairbnb is completely free to use. Prices are set by stylists depending on the service, and are not priced differently on our platform.",
          },
          {
            question: "What happens if I miss my booking?",
            answer:
              "Don't worry! Life happens. You can always re-book or reschedule on the site directly. No need to call or text anyone.",
          },
          {
            question: "How does it work?",
            answer:
              "You search and filter for what you want. You make the booking, and the stylist receives it. You show up, get what you want done, and leave a review. Rinse and repeat.",
          },
          {
            question: "I can't see my stylist on Hairbnb. Why is that?",
            answer:
              "Some stylists don't maintain an online presence and are only using word-of-mouth or social media. Reach out to us and we will add them to the service.",
          },
          {
            question: "My booking disappeared, but I wasn't notified. What happened?",
            answer:
              "If bookings are cancelled, then that means they were cancelled on the stylists' end. You should receive emails or texts when this occurs.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`faq-item border rounded-lg shadow-sm ${
              activeIndex === index ? "bg-pink-100" : "bg-white"
            }`}
          >
            <h3
              className="flex justify-between items-center p-4 cursor-pointer text-lg font-semibold text-gray-800 hover:text-pink-600"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center">
                <span className="num mr-2 font-bold text-pink-500">{index + 1}.</span>
                {faq.question}
              </span>
              <i
                className={`faq-toggle bi ${
                  activeIndex === index ? "bi-chevron-down" : "bi-chevron-right"
                } text-2xl text-gray-500`}
              ></i>
            </h3>
            {activeIndex === index && (
              <div className="faq-content px-4 pb-4 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src={heroBg} alt="" /> 

          <div className="container">
            <div className="row">
              <div >
                <h2 data-aos="fade-up" data-aos-delay="100">
                  Hairbnb
                </h2>
                <p className="mt-3" data-aos="fade-up" data-aos-delay="200">
                  Helping you get the haircut or stylist you want
                </p>
              </div>
                <div >
                  <a
                  href="/create"
                  className="inline-block mt-3 px-12 py-3 bg-pink-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-pink-700 transition"
                  data-aos="fade-up" data-aos-delay="300"
                  >
                Get Started!
              </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}

        {/* About Section */}
        <section id="about" className="about section light-background mb-3">
          <div className="container" data-aos="fade-up" data-aos-delay="0">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3 className="mb-3">About Us</h3>
                <h2 className="mb-2 text-lg">We're like Airbnb, but for hairdressers, hair stylists, and barbers.</h2>
                <p className="mb-3">
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
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Free to use</h3>
                      <p>Hairbnb never adds hidden fees or requires a subscription to book</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse"></i>
                      <h3>Simple browsing</h3>
                      <p>We make it easy to search and filter for the services you want</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <i className="bi bi-command"></i>
                      <h3>Direct management</h3>
                      <p>Appointments, re-bookings, and cancellations are all done here, on the site</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
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
          <img src={statsBg} alt="" data-aos="fade-in" className=""/>
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="0">
            {/* <div className="row gy-4"> */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="stats-item text-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="639"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p >Stylists</p>
                </div>
              {/* End Stats Item */}

              {/* <div className="col-lg-3 col-md-6"> */}
                <div className="stats-item text-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1492"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Bookings Made</p>
                </div>
              {/* </div> */}
              {/* End Stats Item */}

              {/* <div className="col-lg-3 col-md-6"> */}
                <div className="stats-item text-center">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Simple App</p>
                </div>
                </div>
              {/* </div> */}
              {/* End Stats Item */}
            </div>
          {/* </div> */}
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
              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
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

              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
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

              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
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

              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
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

              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Get Prices
                      </a>
                    </h4>
                    <p className="description">Find how much what you want is going to cost</p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6 justify-items-center" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
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
        <FAQSection />
        {/* /Faq Section */}

        {/* Team Section */}
        <section id="team" class="team section light-background mt-5">
 
  <div class="container section-title" data-aos="fade-up">
    <h2>Team</h2>
    <p>We are a team of 4 students at Vanderbilt University!</p>
  </div>

  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="member" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img">
          <img src={seanImg} class="img-fluid" alt="Sean Onamade" />
          {/* <div class="social flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-gray-500 hover:text-pink-600"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-700"><i class="bi bi-linkedin"></i></a>
          </div> */}
        </div>
        <div class="member-info text-center">
          <h4>Sean Onamade</h4>
          <span>Developer</span>
          <p>Sean is a 4th year computer science student at Vanderbilt.</p>
        </div>
      </div>
      
      <div class="member" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img">
          <img src={brianImg} class="img-fluid" alt="Brian Shon" />
          {/* <div class="social flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-gray-500 hover:text-pink-600"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-700"><i class="bi bi-linkedin"></i></a>
          </div> */}
        </div>
        <div class="member-info text-center">
          <h4>Brian Shon</h4>
          <span>Developer</span>
          <p>Brian is a 4th year computer science student at Vanderbilt.</p>
        </div>
      </div>
      
      <div class="member" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img">
          <img src={mahletImg} class="img-fluid" alt="Mahlet Derege" />
          {/* <div class="social flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-gray-500 hover:text-pink-600"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-700"><i class="bi bi-linkedin"></i></a>
          </div> */}
        </div>
        <div class="member-info text-center">
          <h4>Mahlet Derege</h4>
          <span>Developer</span>
          <p>Mahlet is a 4th year computer science student at Vanderbilt.</p>
        </div>
      </div>

      <div class="member col-span-1 mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div class="member-img">
          <img src={stephanieImg} class="img-fluid" alt="Stephanie Ting" />
          {/* <div class="social flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-600"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-gray-500 hover:text-pink-600"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-gray-500 hover:text-blue-700"><i class="bi bi-linkedin"></i></a>
          </div> */}
        </div>
        <div class="member-info text-center">
          <h4>Stephanie Ting</h4>
          <span>Developer</span>
          <p>Stephanie is a 4th year computer science student at Vanderbilt.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* /Team Section */}

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section dark-background py-12 mt-5">
          <img src={ctaBg} alt="" />

          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="20">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3 className="pb-2">Sign up today!</h3>
                  <p className="pb-2">
                    Get the hair services you want and deserve by signing up today and booking appointments
                    with salons in your area.
                  </p>
                  <a className="cta-btn mb-0" href="/create">
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
            <p>Reach out to let us know your thoughts on our service, and if we could improve your experience!</p>
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
                      <p>2301 Vanderbilt Pl</p>
                      <p>Nashville, TN 37235</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 555-555-5555</p>
                      <p>+1 615-615-6156</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>hairbnbco@gmail.com</p>
                      <p>hairbnb2co@gmail.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 5:00 PM</p>
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

    <footer id="footer" class="relative bg-gray-100 text-gray-800">
    <div class="container mx-auto py-8 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-1 space-y-4 md:pl-6 mt-3">
        <a href="index.html" class="items-center text-xl font-bold">
          <h4 class="text-2xl font-extrabold text-black">Hairbnb</h4>
        </a>
        <p>
          HairBnB is a marketplace platform designed to connect clients with
          independent hairstylists in a way that’s as easy as booking an Airbnb.
        </p>
        <div class="items-center space-x-4 mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-4">Useful Links</h4>
        <ul class="space-y-2">
          <li><a href="/#" class="text-gray-600 hover:text-gray-900">Stylists</a></li>
          <li><a href="/landing" class="text-gray-600 hover:text-gray-900">About Us</a></li>
          <li><a href="/profilepage" class="text-gray-600 hover:text-gray-900">Profile</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
        <p>2301 Vanderbilt Pl</p>
        <p>Nashville, TN 37235</p>
        <p>United States</p>
        <p class="mt-4">
          <strong>Phone:</strong> <span>+1 555-555-5555</span>
        </p>
        <p>
          <strong>Email:</strong> <span>hairbnbco@gmail.com</span>
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