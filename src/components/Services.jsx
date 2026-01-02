import React, { useEffect, useState } from "react";
import { Cloud, Code, GraduationCap } from "lucide-react";
import { Globe, Smartphone,Bot, BarChart3} from "lucide-react";
import "./Services.css";
import "./Services_intro.css";

const Services = () => {
      const [animate, setAnimate] = useState(true);
  return (
    <>
    <section id="web-development" className="services">
      <div className="services-wrapper">
        <div className="services-left">
          <div className="service-box">
            <h3>Responsive Websites</h3>
            <p>Beautiful, mobile-first websites that look perfect on every device.</p>
          </div>

          <div className="service-box">
            <h3>Web Applications</h3>
            <p>Feature-rich web apps with intuitive interfaces and seamless user experiences.</p>
          </div>

          <div className="service-box">
            <h3>Dashboards & Admin Panels</h3>
            <p>Data-driven dashboards for real-time insights and efficient management.</p>
          </div>
        </div>

        <div className="services-right">
          <div className="icon-wrapper">
            <Globe size={30} />
          </div>
          <h2>Web Development</h2>
          <p>
            Modern web solutions that combine stunning design with powerful
            functionality.
          </p>
        </div>
      </div>
    </section>
    <section id="app-development" className="software-services">
        <div className={`software-left ${animate ? "slide-in-left" : ""}`}>
          <div className="icon-wrapper">
            <Smartphone size={30} />
          </div>
          <h2>App Development</h2>

          <p>
            Native and cross-platform mobile applications for iOS and Android.
          </p>
        </div>

        <div className={`software-right ${animate ? "slide-in-right" : ""}`}>
          <div className="service-card">
            <h3>Android & iOS Apps</h3>
            <p>
              Native applications optimized for each platform's unique capabilities.
            </p>
          </div>

          <div className="service-card">
            <h3>Cross-Platform Solutions</h3>
            <p>
              Build once, deploy everywhere with React Native and Flutter.
            </p>
          </div>

          <div className="service-card">
            <h3>Performance-Focused Development</h3>
            <p>
              Fast, responsive apps optimized for the best user experience.
            </p>
          </div>
        </div>
      </section>
      <section id="ai-automation" className="services">
      <div className="services-wrapper">
        <div className="services-left">
          <div className="service-box">
            <h3>AI-Powered Business Solutions</h3>
            <p>Machine learning models and AI systems tailored to your business needs.</p>
          </div>

          <div className="service-box">
            <h3>Workflow Automation</h3>
            <p>Streamline repetitive tasks and boost productivity with smart automation.</p>
          </div>

          <div className="service-box">
            <h3>n8n Automation Pipelines</h3>
            <p>Complex workflow automation with visual, no-code integration tools.</p>
          </div>

          <div className="service-box">
            <h3>Chatbots & Intelligent Systems</h3>
            <p>Conversational AI and intelligent assistants for customer engagement.</p>
          </div>
        </div>

        <div className="services-right">
          <div className="icon-wrapper">
            <Bot size={30} />
          </div>
          <h2>AI & Automation</h2>
          <p>
            Intelligent solutions that transform operations and enhance decision-making.
          </p>
        </div>
      </div>
    </section>
    <section id="data-analysis" className="software-services">
        <div className={`software-left ${animate ? "slide-in-left" : ""}`}>
          <div className="icon-wrapper">
            <BarChart3 size={30} />
          </div>
          <h2>Data Analysis Services</h2>

          <p>
            Transform raw data into actionable insights that drive business growth.
          </p>
        </div>

        <div className={`software-right ${animate ? "slide-in-right" : ""}`}>
          <div className="service-card">
            <h3>Data Cleaning & Preprocessing</h3>
            <p>
              Prepare and structure your data for accurate analysis and modeling. </p>
          </div>

          <div className="service-card">
            <h3>Dashboards & Data Visualization</h3>
            <p>
              Interactive visualizations that make complex data easy to understand.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Intelligence & Insights</h3>
            <p>
              Deep analytical insights to inform strategy and decision-making.
            </p>
          </div>
        </div>
      </section>
      <section id="devops-cloud" className="services">
      <div className="services-wrapper">
        <div className="services-left">
          <div className="service-box">
            <h3>Local/Private Cloud Setup</h3>
            <p>Custom cloud infrastructure tailored to your security and compliance needs.</p>
          </div>

          <div className="service-box">
            <h3>Next cloud Deployment</h3>
            <p>Self-hosted collaboration platforms for secure file sharing and communication.</p>
          </div>

          <div className="service-box">
            <h3>CI/CD Pipelines</h3>
            <p>Automated deployment pipelines for faster, reliable software delivery.</p>
          </div>

          <div className="service-box">
            <h3>Secure Infrastructure & Monitoring</h3>
            <p>24/7 monitoring and security best practices to protect your systems.</p>
          </div>
        </div>

        <div className="services-right devops">
          <div className="icon-wrapper">
            <Cloud size={30} />
          </div>
          <h2>DevOps & Private Cloud</h2>
          <p>
            Secure, scalable infrastructure solutions for modern enterprises.
          </p>
        </div>
      </div>
    </section>
    <section className="software-services ">
        <div className={`software-left ${animate ? "slide-in-left" : ""}`}>
          <div className="icon-wrapper">
            <GraduationCap size={30} />
          </div>
          <h2>Training & Internship Programs</h2>

          <p>
              Industry-focused education and hands-on experience for aspiring technologists.</p>
      
        </div>

        <div className={`software-right ${animate ? "slide-in-right" : ""}`}>
          <div className="service-card">
            <h3>Industry-Focused Learning</h3>
            <p>
             Curriculum designed with real-world applications and industry standards.
            </p>
          </div>

          <div className="service-card">
            <h3>Career Mentorship</h3>
            <p>
             Guidance from experienced professionals to accelerate your career growth.
            </p>
          </div>
          <div className="service-card">
            <h3>Comprehensive Courses</h3>
            <p>
            Data Science, AI, Software Development, DSA, C++, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
