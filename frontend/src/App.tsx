import { Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import { useAuth } from './auth/AuthProvider'

import Login from './pages/Login'
import Home from './pages/Home'
import Products from './pages/Products'
import Admin from './pages/Admin'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      {isAuthenticated && (
        <nav style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '16px 40px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ color: 'white', fontWeight: '600', fontSize: '18px' }}>
              🚀 Mi App
            </span>
            <Link 
              to="/home" 
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              🏠 Home
            </Link>
            <Link 
              to="/products" 
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              📦 Productos
            </Link>
            {user?.role === 'ADMIN' && (
              <Link 
                to="/admin" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  transition: 'background 0.3s',
                  background: 'rgba(255,255,255,0.15)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                ⚡ Admin
              </Link>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: 'white', fontSize: '14px' }}>
              👤 {user?.name} <span style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '4px 8px', 
                borderRadius: '4px',
                fontSize: '12px',
                marginLeft: '8px'
              }}>{user?.role}</span>
            </span>
            <button
              onClick={logout}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              🚪 Salir
            </button>
          </div>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </div>
  )
}

export default App
