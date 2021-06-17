import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Header from './components/ui/Header'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <CssBaseline>
      <Router>
        <Header />
        <Route path="/" component={HomePage} exact />
      </Router>
    </CssBaseline>
  )
}

export default App
