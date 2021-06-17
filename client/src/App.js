import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Header from './components/ui/Header'
import HomePage from './pages/HomePage'
import './App.css'
import HistoryPage from './pages/HistoryPage'
import PeoplePage from './pages/PeoplePage'
import NewsPage from './pages/NewsPage'
import CulturePage from './pages/CulturePage'

function App() {
  return (
    <CssBaseline>
      <Router>
        <Header />
        <Route path="/culture" component={CulturePage} exact />
        <Route path="/news" component={NewsPage} exact />
        <Route path="/people" component={PeoplePage} exact />
        <Route path="/history" component={HistoryPage} exact />
        <Route path="/" component={HomePage} exact />
      </Router>
    </CssBaseline>
  )
}

export default App
