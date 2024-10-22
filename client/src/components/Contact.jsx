// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              {/* Contact Info Items */}
              {/* Address */}
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>
              {/* ... other info items */}
            </div>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                {/* Form Fields */}
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                {/* ... other form fields */}
                <div className="col-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
