import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div>
          <NavLink to="/" className="btn btn-outline-primary me-2">
            Home
          </NavLink>
          <NavLink to="/about" className="btn btn-outline-primary me-2">
            About
          </NavLink>
          <NavLink to="/blog" className="btn btn-outline-primary me-2">
            Blog
          </NavLink>
        </div>

        {user ? (
          <div className="d-flex align-items-center">
            <span className="text-white me-3">
              👤 Bienvenido, <strong>{user.username}</strong>
            </span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-outline-success btn-sm">
            Iniciar Sesión
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
