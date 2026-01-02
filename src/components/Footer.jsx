import React from "react";
import "./Footer.css";
import {SiLinkedin, SiInstagram, SiFacebook, SiDiscord, } from "react-icons/si";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="logo">
            <img src="logo.png" alt="Leafclutch Logo" />
            <h2>Leafclutch Technologies<span>.</span></h2>
          </div>

          <p>
            We build intelligent software, AI, and automation solutions that
            drive measurable business growth for startups and enterprises
            worldwide.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/leafclutch-technologies/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit Leafclutch Technologies on LinkedIn"
            >
              <SiLinkedin />
            </a>

            <a
              href="https://www.instagram.com/leafclutch.technologies/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow Leafclutch Technologies on Instagram"
            >
              <SiInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61584902195796"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Like Leafclutch Technologies on Facebook"
            >
              <SiFacebook />
            </a>

            <a
              href="https://discord.gg/4aDwcMZBPq"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Join Leafclutch Technologies on Discord"
            >
              <SiDiscord />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>COMPANY</h4>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-links">
          <h4>SERVICES</h4>
          <a href="/services#software-services">Software Services</a>
          <a href="/services#web-development">Web Development</a>
          <a href="/services#app-development">App Development</a>
          <a href="/services#ai-automation">AI & Automation</a>
          <a href="/services#data-analysis">Data Analysis</a>
          <a href="/services#devops-cloud">DevOps & Cloud</a>
        </div>

        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>
            <Mail size={18} stroke="#ffd166"/> info@leafclutch.dev
          </p>
          <p>
            <MapPin size={18} stroke="#ffd166"/> Bhairahawa, Rupandehi, Nepal
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Leafclutch Technologies. All rights reserved.</p>
        <div>
          <span className="footer-link">Privacy Policy</span>
          <span className="footer-link">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
