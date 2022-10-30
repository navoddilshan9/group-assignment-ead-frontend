import { BrowserRouter as Router } from 'react-router-dom'
import DrawerAppBar from './components/AppBar/AppBar'

function App() {
  return (
    <div>
      <Router>
        <DrawerAppBar />
      </Router>
    </div>
  )
}

export default App
