// About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="about section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>About Us</h3>
            <h2>
              We're like Airbnb, but for hairdressers, hair stylists, and barbers.
            </h2>
            <p>
              You deserve the haircut or style you want. Our platform lets you browse through, search, filter, and look at the work of stylists in your area, helping you understand which will be the best fit for you. Oh - and you can see availability and book appointments directly through the app.
            </p>
            <a href="#" className="read-more">
              <span>Browse stylists in your area</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              {/* Icon Box 1 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Free to use</h3>
                  <p>
                    Hairbnb never adds hidden fees or requires a subscription to book
                  </p>
                </div>
              </div>
              {/* Icon Box 2 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-clipboard-pulse"></i>
                  <h3>Simple browsing</h3>
                  <p>
                    We make it easy to search and filter for the services you want
                  </p>
                </div>
              </div>
              {/* Icon Box 3 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-command"></i>
                  <h3>Direct management</h3>
                  <p>
                    Appointments, re-bookings, and cancellations are all done here, on the site
                  </p>
                </div>
              </div>
              {/* Icon Box 4 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h3>Reviews</h3>
                  <p>
                    See photos of work done in the past so you know what you'll get
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
