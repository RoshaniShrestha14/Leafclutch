import React from "react";
import { motion } from "framer-motion";
import {Rocket, Zap, Shield, Clock, Sparkles } from "lucide-react";
import "./intro.css";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Intro = () => {
  return (
    <section className="intro">
      
      <motion.div
        className="intro-left"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.span
          className="intro-badge"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} />
          Empowering Business Growth with AI
        </motion.span>

        <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
          We build intelligent <br />
          <span>software, AI, and</span> <span className="automation">automation</span> <br />
          solutions that drive <br />
          measurable business growth.
        </motion.h1>

        <motion.p variants={fadeUp} transition={{ duration: 0.7 }}>
          Unlock new opportunities with reliable software solutions
          and responsible, high-performance AI automation.
        </motion.p>

        <motion.div
          className="intro-buttons"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <button className="btn-primary">Get Started →</button>
          <button className="btn-secondary">View Our Work</button>
        </motion.div>

        <motion.div className="intro-features" variants={stagger}>
          <motion.span variants={fadeUp}>
            <Shield stroke="#1d72b8" strokeWidth={2} size={16} /> Enterprise-ready
          </motion.span>
          <motion.span variants={fadeUp}>
            <Zap stroke="#1d72b8" strokeWidth={2}  size={16} /> High Performance
          </motion.span>
          <motion.span variants={fadeUp}>
            <Sparkles stroke="#1d72b8" strokeWidth={2} size={16} /> Responsible AI
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="intro-right"
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="card">
          <div className="card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="card-body">
            <div className="performance floating">
              <Zap size={14} />
              Performance <strong>+98%</strong>
            </div>

            <div className="chart"></div>

            <div className="uptime floating delay">
              <Clock size={14} />
              Uptime <strong>99.9%</strong>
            </div>
          </div>

          <div className="card-footer">
            <div className="bar dark"></div>
            <div className="bar blue"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
