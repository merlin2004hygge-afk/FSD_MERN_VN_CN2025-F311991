import { Link } from 'react-router-dom';
import './DepartmentCard.css';

const DepartmentCard = ({ dept }) => {
  return (
    <div className="department-card">
      <img src="https://images.pexels.com/photos/15490406/pexels-photo-15490406/free-photo-of-standing-students-in-academic-dress.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
      <h3 className="card-title">{dept.name}</h3>
      <p className="card-description">{dept.shortDescription}</p>
      <Link to={`/departments/${dept.id}`} className="view-more-button">
        View More
      </Link>
    </div>
  );
};

export default DepartmentCard;