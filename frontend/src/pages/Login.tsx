import { useState, useEffect, type FormEvent } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { isAuthenticated, login } = useAuth()
  const [name, setName] = useState('')
  const [role, setRole] = useState('USER')
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!name) return alert('Ingrese un nombre')
    login(name, role)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{
          margin: '0 0 30px 0',
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          textAlign: 'center'
        }}>Iniciar Sesion</h2>
        
        <form onSubmit={submit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>Nombre</label>
            <input 
              value={name} 
              onChange={e => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#555'
            }}>Rol</label>
            <select 
              value={role} 
              onChange={e => setRole(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                backgroundColor: 'white'
              }}
            >
              <option value="USER">Usuario Regular</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          
          <button 
            type="submit"
            style={{
              padding: '14px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
