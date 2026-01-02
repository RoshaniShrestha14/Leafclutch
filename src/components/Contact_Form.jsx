import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import "./Contact_Form.css";

const Contact_Form = () => {
  return (
    <>
      <section className="contact-hero">
        <p className="contact-hero-label">GET STARTED</p>

        <h1 className="contact-hero-title">
          Let's Build Something Great
          <br />
          <span>Together</span>
        </h1>

        <p className="contact-hero-subtitle">
          Tell us about your project and we'll get back to you with a free consultation.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Reach out to us through any of these channels and we'll respond promptly.
            </p>

            <div className="info-item">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div>
                <strong>Email Us</strong>
                <p>info@leafclutch.dev</p>
                <p>support@leafclutch.dev</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <strong>Visit Us</strong>
                <p>Bhairahawa</p>
                <p>Rupandehi, Nepal NP</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Your Company" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

                <div className="form-group">
                    <label>Service Interested In</label>
                    <select className="service-select">
                        <option value="">Select a service</option>
                        <option>Software Development</option>
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>AI & Automation</option>
                        <option>Data Analysis</option>
                        <option>DevOps & Cloud</option>
                        <option>Training & Internship</option>
                        <option>Other</option>
                    </select>
                    </div>


              <div className="form-group">
                <label>Project Details *</label>
                <textarea placeholder="Tell us about your project, goals, and any specific requirements..." />
              </div>

              <button className="submit-btn" onClick={"submit"}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Form;
