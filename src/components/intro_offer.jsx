import React from "react";
import {Code2, Globe, Smartphone, Bot, BarChart3, Cloud, GraduationCap } from "lucide-react";
import "./intro_offer.css";

const IntroOffer = () => {
  return (
    <>
    <section className="services">
      <p className="section-tag">WHAT WE OFFER</p>

      <h2 className="section-title">
        Comprehensive Technology
        <br />
        Solutions
      </h2>

      <p className="section-desc">
        From custom software to AI automation, we deliver end-to-end  <br /> solutions
        that transform
  
        your business operations.
      </p>

      <div className="cards-offer">
        <div className="card-offer">
          <div className="icon-box"> 
            <Code2 stroke="#0f4c6e" size={22} />
          </div>
          <h3>Software Services</h3>
          <p>
            Custom software development, backend systems, APIs, and scalable
            enterprise solutions.
          </p>
          <a href="/services#software-services" >Learn more →</a>
        </div>

        <div className="card-offer">
          <div className="icon-box">
            <Globe stroke="#0f4c6e" size={22} />
          </div>
          <h3>Web Development</h3>
          <p>
            Responsive websites, web applications, dashboards, and admin panels
            built for performance.
          </p>
          <a href="/services#web-development">Learn more →</a>
        </div>

        <div className="card-offer">
          <div className="icon-box">
            <Smartphone size={22} />
          </div>
          <h3>App Development</h3>
          <p>
            Android & iOS apps, cross-platform solutions with performance-focused
            development.
          </p>
          <a href="/services#app-development">Learn more →</a>
        </div>

        <div className="card-offer">
          <div className="icon-box">
            <Bot stroke="#0f4c6e" size={22} />
          </div>
          <h3>AI & Automation</h3>
          <p>
            AI-powered solutions, workflow automation, RPA pipelines, and
            intelligent chatbots.
          </p>
          <a href="/services#ai-automation">Learn more →</a>
        </div>

        <div className="card-offer">
          <div className="icon-box">
            <BarChart3 stroke="#0f4c6e" size={22} />
          </div>
          <h3>Data Analysis</h3>
          <p>
            Data cleaning, preprocessing, visualization dashboards, and business
            intelligence.
          </p>
          <a href="/services#data-analysis">Learn more →</a>
        </div>

        <div className="card-offer">
          <div className="icon-box">
            <Cloud size={22} />
          </div>
          <h3>DevOps & Cloud</h3>
          <p>
            Private cloud setup, Nextcloud deployment, CI/CD pipelines, and
            secure infrastructure.
          </p>
          <a href="/services#devops-cloud">Learn more →</a>
        </div>
      </div>
    </section>
    <section className="training-cta">
  <div className="training-box">
    <div className="training-left">
      <div className="training-icon">
        <GraduationCap size={28} stroke="#0f4c6e" />
      </div>

      <div className="training-text">
        <h3>Training & Internship Programs</h3>
        <p>
          Industry-focused learning in Data Science, AI, Software Development & more.
        </p>
      </div>
    </div>

    <a href="#" className="training-btn">
      Explore Programs →
    </a>
  </div>
</section>
</>
  );
};

export default IntroOffer;
