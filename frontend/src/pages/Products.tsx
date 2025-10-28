const Products = () => {
  const products = [
    { id: 1, name: 'Laptop Pro', price: '$1,299', emoji: '💻', stock: 15 },
    { id: 2, name: 'Smartphone X', price: '$899', emoji: '📱', stock: 32 },
    { id: 3, name: 'Tablet Ultra', price: '$599', emoji: '📲', stock: 24 },
    { id: 4, name: 'Smartwatch', price: '$399', emoji: '⌚', stock: 18 },
    { id: 5, name: 'Auriculares Pro', price: '$299', emoji: '🎧', stock: 45 },
    { id: 6, name: 'Cámara HD', price: '$799', emoji: '📷', stock: 12 }
  ]

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{
        margin: '0 0 30px 0',
        fontSize: '36px',
        color: '#333',
        fontWeight: '700'
      }}>
        Catalogo de Productos
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {products.map(product => (
          <div 
            key={product.id}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid #f0f0f0',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{
              fontSize: '48px',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {product.emoji}
            </div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '20px',
              color: '#333',
              textAlign: 'center'
            }}>
              {product.name}
            </h3>
            <p style={{
              margin: '0 0 12px 0',
              fontSize: '24px',
              fontWeight: '700',
              color: '#667eea',
              textAlign: 'center'
            }}>
              {product.price}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderTop: '1px solid #f0f0f0'
            }}>
              <span style={{ fontSize: '14px', color: '#666' }}>
                Stock: <strong>{product.stock}</strong>
              </span>
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                Ver mas
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
