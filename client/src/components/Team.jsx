// Team.js
import React from 'react';

function Team() {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>We are a team of 4 students at Vanderbilt University.</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {/* Team Member 1 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src="assets/img/team/sean.jpeg" className="img-fluid" alt="" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                {/* ... other social icons */}
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Sean Onamade</h4>
              <span>Developer</span>
              <p>Sean is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div>
          {/* Repeat for other team members with appropriate content */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

export default Team;
