import { BrowserRouter as Router } from 'react-router-dom'
import DrawerAppBar from './components/AppBar/AppBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div style={{ minHeight: '93vh' }}>
        <Router>
          <DrawerAppBar />
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App
