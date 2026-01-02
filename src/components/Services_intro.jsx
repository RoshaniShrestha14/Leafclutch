import React, { useEffect, useState } from "react";
import { Code } from "lucide-react";
import "./Services_intro.css";

const Services_intro = () => {
  const [animate] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <section className="services-intro">
        <p className="services-label">OUR SERVICES</p>

        <h1 className="services-title">
          End-to-End Technology <br />
          <span>Solutions</span>
        </h1>

        <p className="services-description">
          From concept to deployment, we provide comprehensive technology services
          that transform your business and drive measurable results.
        </p>
      </section>

      <section id="software-services" className="software-services">
        <div className={`software-left ${animate ? "slide-in-left" : ""}`}>
          <div className="icon-box">
            <Code size={32} color="#1d72b8" />
          </div>

          <h2>Software Services</h2>

          <p>
            Custom software solutions tailored to your unique business
            requirements.
          </p>
        </div>

        <div className={`software-right ${animate ? "slide-in-right" : ""}`}>
          <div className="service-card">
            <h3>Custom Software Development</h3>
            <p>
              Bespoke applications designed from scratch to solve your specific
              challenges.
            </p>
          </div>

          <div className="service-card">
            <h3>Backend Systems & APIs</h3>
            <p>
              Robust, scalable backend architectures and RESTful APIs for seamless
              integration.
            </p>
          </div>

          <div className="service-card">
            <h3>Scalable Enterprise Solutions</h3>
            <p>
              Enterprise-grade systems built to handle growing demands and
              complex workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services_intro;
