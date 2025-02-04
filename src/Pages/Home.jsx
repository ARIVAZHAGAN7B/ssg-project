import React from "react";
import BackgroundImage from "../assets/background.webp";  
import "@fontsource/poppins";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-div-home">
        <div className="home-page">
          <h1 className="heading">
            🏆 Your Ultimate Sports Companion 🏆<br />
            <span>Train. Book. Compete. All in One Place!</span>
          </h1>
        </div>
      </div>

      <div className="content-section">
        <h2 className="sub-heading">🔥 What We Offer</h2>
        <ul className="features-list">
          <li>✅ <b>Training Programs</b> – Access expert-led training sessions customized for your sport.</li>
          <li>✅ <b>Coach Booking</b> – Find and book professional coaches to level up your skills.</li>
          <li>✅ <b>Tournament Management</b> – Register for tournaments and track your progress.</li>
          <li>✅ <b>Sports Facility Booking</b> – Reserve courts, fields, and training centers near you.</li>
          <li>✅ <b>Performance Analytics</b> – Track and improve your stats with AI-driven insights.</li>
        </ul>
      </div>

      <div className="benefits-section">
        <h2 className="sub-heading">🚀 Why Choose <span className="app-name-first">Sport</span><span className="new-app-name">i</span><span className="app-name-second">Fy</span><span className="new-app-name">?</span></h2>
        <ul className="benefits-list">
          <li>⚡ <b>Seamless Experience</b>  Everything you need in one powerful platform.</li>
          <li>🎯 <b>Expert Guidance</b> Learn from the best in your sport.</li>
          <li>📊 <b>Smart Insights</b> Data-driven performance tracking.</li>
          <li>🌍 <b>Community & Competition</b> Connect, challenge, and grow with like-minded athletes.</li>
        </ul>
      </div>  

      <div className="cta-section">
        <h2 className="cta-heading">👉 Ready to Elevate Your Game?</h2>
        <p>Join now and take your sports journey to the next level!</p>
        <button className="cta-button">📥 Download the App</button>
      </div>
    </>
  );
};

export default Home;
