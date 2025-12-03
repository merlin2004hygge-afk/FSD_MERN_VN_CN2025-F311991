import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <p>&copy; {new Date().getFullYear()} College Info Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;