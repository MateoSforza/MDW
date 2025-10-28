const Admin = () => {
  const stats = [
    { label: 'Usuarios Totales', value: '1,234', color: '#667eea' },
    { label: 'Productos', value: '456', color: '#764ba2' },
    { label: 'Ventas Hoy', value: '$12,345', color: '#48bb78' },
    { label: 'Pedidos Pendientes', value: '23', color: '#ed8936' }
  ]

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '40px',
        marginBottom: '30px',
        boxShadow: '0 8px 30px rgba(102, 126, 234, 0.3)'
      }}>
        <h1 style={{
          margin: '0 0 10px 0',
          fontSize: '36px',
          fontWeight: '700'
        }}>
          Panel de Administracion
        </h1>
        <p style={{
          margin: '0',
          fontSize: '16px',
          opacity: '0.9'
        }}>
          Gestiona tu aplicacion desde aqui (solo accesible para ADMIN)
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              borderLeft: `4px solid ${stat.color}`
            }}
          >
            <div style={{
              fontSize: '32px',
              marginBottom: '10px'
            }}>
            </div>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '5px'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '20px',
            color: '#333'
          }}>
            Acciones Rapidas
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Crear nuevo usuario', 'Agregar producto', 'Ver reportes', 'Configuración avanzada'].map((action, i) => (
              <button
                key={i}
                style={{
                  background: '#f7f7f7',
                  border: '2px solid #e0e0e0',
                  padding: '14px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  textAlign: 'left',
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  color: '#333'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.borderColor = '#667eea'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f7f7f7'
                  e.currentTarget.style.color = '#333'
                  e.currentTarget.style.borderColor = '#e0e0e0'
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            fontSize: '20px',
            color: '#333'
          }}>
            Actividad Reciente
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { text: 'Nuevo usuario registrado', time: 'Hace 5 min' },
              { text: 'Producto actualizado', time: 'Hace 15 min' },
              { text: 'Venta completada', time: 'Hace 1 hora' },
              { text: 'Backup realizado', time: 'Hace 2 horas' }
            ].map((activity, i) => (
              <div 
                key={i}
                style={{
                  padding: '12px',
                  background: '#f9f9f9',
                  borderRadius: '8px',
                  borderLeft: '3px solid #667eea'
                }}
              >
                <div style={{ fontSize: '14px', color: '#333', marginBottom: '4px' }}>
                  {activity.text}
                </div>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
