import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About';
import Grid from './pages/Grid';
import Graph from './pages/Graph';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;