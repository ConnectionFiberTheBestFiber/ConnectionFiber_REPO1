import { Navigate } from 'react-router-dom'
import { useAuth } from '../pages/Auth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}