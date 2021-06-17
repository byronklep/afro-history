import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
    
    </Router>
  )
}

export default App
