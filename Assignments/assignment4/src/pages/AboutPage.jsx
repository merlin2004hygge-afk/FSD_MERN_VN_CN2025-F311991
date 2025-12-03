import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="page-heading">About Our College</h1>
      <p className="page-subheading">A history of excellence, driven by a vision for the future.</p>
      
      <section className="about-section">
        <h2>Our History</h2>
        <div className='about-content'>
          <img src="https://tse3.mm.bing.net/th/id/OIP.kaR1wTx3NfeB4fHtX7ITDAHaEK?pid=Api&P=0&h=220" alt=""  className='about-image'/><p>
          Founded in 1995, our college was established with the goal of fostering technical excellence and ethical leadership. 
          Starting with just two core engineering programs, we have grown significantly over the past decades to become a leading institution 
          known for research, innovation, and industry collaboration. Our commitment to quality education remains unwavering.
        </p>
        </div>
      </section>

      <section className="about-section mission-vision-section">
        <div className="mission-vision-grid">
          <div className="mv-box">
            <h2>Mission</h2>
            <p>To provide high-quality technical education, promote research and innovation, and develop socially responsible professionals.</p>
          </div>
          <div className="mv-box">
            <h2>Vision</h2>
            <p>To be a globally recognized center of excellence in education and research, empowering the next generation of leaders and innovators.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Achievements & Milestones</h2>
        <div className="achievements-timeline">
          <div className="timeline-item">
            <span className="year">2005</span>
            <p>Received 'A' Grade Accreditation from NAAC.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2012</span>
            <p>Launched the dedicated Incubation Center for student startups.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2018</span>
            <p>Secured top 5 ranking among all private technical institutions in the state.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2023</span>
            <p>Achieved 100% placement for CSE and IT departments for the fifth consecutive year.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;