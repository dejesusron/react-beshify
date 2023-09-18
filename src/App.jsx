import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './pages/RootLayout';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={<RootLayout />}>
            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About />}  />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App