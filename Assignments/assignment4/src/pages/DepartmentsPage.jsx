import { useState, useEffect } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import departmentsData from '../data/departmentsData.json';
import './DepartmentsPage.css';

const DepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setDepartments(departmentsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading-message">Loading departments...</div>;
  }

  return (
    <div className="departments-page">
      <h1 className="page-heading">Our Academic Departments</h1>
      <p className="page-subheading">Explore the programs and facilities offered by our specialized engineering and management departments.</p>
      
      <div className="departments-grid-page">
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} dept={dept} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentsPage;