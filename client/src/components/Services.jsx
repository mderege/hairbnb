// Services.js
import React from 'react';

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Use any of our features to find the hair service you deserve</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Service Item 1 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Location Search</a>
                </h4>
                <p className="description">
                  See hair services near you, or search for services in a different area
                </p>
              </div>
            </div>
          </div>
          {/* Repeat for other service items with appropriate content */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

export default Services;
