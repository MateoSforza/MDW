import { useAuth } from '../auth/AuthProvider'

const Home = () => {
  const { user } = useAuth()
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        marginBottom: '30px'
      }}>
        <h1 style={{
          margin: '0 0 10px 0',
          fontSize: '36px',
          color: '#333',
          fontWeight: '700'
        }}>
          Bienvenido, {user?.name}!
        </h1>
        <p style={{
          color: '#666',
          fontSize: '18px',
          margin: '0'
        }}>
          Has iniciado sesion con el rol: <strong style={{
            color: user?.role === 'ADMIN' ? '#764ba2' : '#667eea',
            background: user?.role === 'ADMIN' ? '#f3e8ff' : '#e8f0ff',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '16px'
          }}>{user?.role}</strong>
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>Dashboard</h3>
          <p style={{ margin: '0', opacity: '0.9', fontSize: '14px' }}>
            Panel principal de la aplicacion
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
          border: '2px solid #f0f0f0'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#333' }}>Estadísticas</h3>
          <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
            Visualiza tus datos en tiempo real
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
          border: '2px solid #f0f0f0'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#333' }}>Configuración</h3>
          <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
            Personaliza tu experiencia
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
