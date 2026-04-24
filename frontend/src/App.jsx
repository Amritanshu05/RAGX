import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { useRAGX } from './hooks/useRAGX'
import './styles/globals.css'

export default function App() {
  const { health } = useRAGX()

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#0b0f1a' }}>
      <Sidebar health={health} />
      <main style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Dashboard />
      </main>
    </div>
  )
}
