import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

const ProtectedRoute = ({ requiredRole }: { requiredRole?: string }) => {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requiredRole && user?.role !== requiredRole) {
    // redirect to home if role not allowed
    return <Navigate to="/home" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
