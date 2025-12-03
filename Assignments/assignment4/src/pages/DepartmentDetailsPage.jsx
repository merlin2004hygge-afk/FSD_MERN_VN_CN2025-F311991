import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import departmentsData from '../data/departmentsData.json';
import './DepartmentDetailsPage.css';

const DepartmentDetailsPage = () => {
  const { deptId } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedDept = departmentsData.find(d => d.id === deptId);
    setDepartment(selectedDept);
    setLoading(false);
  }, [deptId]);

  if (loading) {
    return <div className="loading-message">Loading department details...</div>;
  }

  if (!department) {
    return <div className="detail-container">Department ID **{deptId}** not found. Please check the URL.</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-heading">{department.name}</h1>
      <p className="detail-tagline">{department.shortDescription}</p>

      <section className="detail-section">
        <h2>Full Description</h2>
        <p className="full-description-text">{department.fullDescription}</p>
      </section>

      <div className="feature-grid-details">
        <div className="feature-box">
          <h3>Courses Offered</h3>
          <ul>
            {department.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        
        <div className="feature-box">
          <h3>Faculty List</h3>
          <ul>
            {department.faculty.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        
        <div className="feature-box">
          <h3>Labs & Facilities</h3>
          <ul>
            {department.labs.map((lab, index) => (
              <li key={index}>{lab}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetailsPage;
