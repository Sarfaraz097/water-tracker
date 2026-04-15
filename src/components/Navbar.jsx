import { Link, useLocation } from 'react-router-dom';
import { Droplet, Home, LayoutDashboard, BarChart3 } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', name: 'Home', icon: <Home size={18} /> },
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { path: '/reports', name: 'Reports', icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Droplet size={28} color="#4facfe" />
          <span>AquaTrack</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;