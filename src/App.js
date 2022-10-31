import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import DrawerAppBar from './components/AppBar/AppBar'
// import { UserProvider } from './Utils/UserContext'
function App() {
  const [user, setUser] = useState({
    userId: 0,
    role: 'customer',
  })
  return (
    <>
      <div>
        <Router>
          <DrawerAppBar />
        </Router>
      </div>
    </>
  )
}

export default App
