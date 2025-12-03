import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import departmentsData from '../data/departmentsData.json'; 
import './HomePage.css';

const DepartmentCard = ({ dept }) => (
  <div className="dept-card">
    <h3>{dept.name}</h3>
    <p>{dept.shortDescription}</p>
    <Link to={`/departments/${dept.id}`} className="view-more-btn">View More</Link>
  </div>
);

const HomePage = () => {
  const [topDepartments, setTopDepartments] = useState([]);

  useEffect(() => {
    setTopDepartments(departmentsData.slice(0, 3));
  }, []);

  return (
    <div className="home-page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Igniting Minds, Building Futures</h1>
          <p>Your journey to excellence starts here. Discover our world-class programs.</p>
          <Link to="/departments" className="cta-button">Explore Departments<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdUe5PwvGydyyS5FhBtptVlenuxAg3TpyWyPAqyQDA8_QLV70C5NUHizxHjcmIzBW5KU&usqp=CAU" alt="" /></Link>
        </div>
      </section>
      <section className="why-us-section">
        <h2>Why This College?</h2>
        <div className="reasons-grid">
          <div className='reason-card'><img src="https://tse3.mm.bing.net/th/id/OIP.Rb1j-mn32b-JmenDDJ3cqgHaEK?pid=Api&P=0&h=220" alt="" /><p>Cutting-Edge Curriculum</p></div>
          <div className='reason-card'><img src="https://tse3.mm.bing.net/th/id/OIP.A3q3Sp5CpZbuf2rIxhfPCwHaEG?pid=Api&P=0&h=220" alt="" /><p>Experienced Faculty</p></div>
          <div className='reason-card'><img src="https://tse4.mm.bing.net/th/id/OIP.6B72PgklHh8Nr4pB3WmA8QHaE7?pid=Api&P=0&h=220" alt="" /><p>100% Placement Record</p></div>
        </div>
      </section>
      <section className="top-depts-section">
        <h2>Our Top Departments</h2>
        <div className="departments-grid">
          {topDepartments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>
        <Link to="/departments" className="all-depts-button">View All Departments</Link>
      </section>
    </div>
  );
};

export default HomePage;