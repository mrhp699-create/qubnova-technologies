import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function RequireAdminAuth({ children }) {
  const location = useLocation();
  const { isAuthenticated, isBootstrapping } = useAuth();

  if (isBootstrapping) {
    return (
      <section className="section-spacing">
        <div className="container-page flex justify-center">
          <LoadingSpinner label="Checking admin session" />
        </div>
      </section>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}
