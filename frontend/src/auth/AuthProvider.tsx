import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export type User = {
  name: string
  role: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (name: string, role: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const raw = localStorage.getItem('auth')
    if (raw) {
      try {
        setUser(JSON.parse(raw))
      } catch {
        localStorage.removeItem('auth')
      }
    }
  }, [])

  const login = (name: string, role: string) => {
    const u = { name, role }
    localStorage.setItem('auth', JSON.stringify(u))
    setUser(u)
    navigate('/home', { replace: true })
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setUser(null)
    navigate('/login', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
