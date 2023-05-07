import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Ecl from './pages/Ecl';
import Ec from './pages/Ec';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/empirecitylife" element={<Ecl />} />
        <Route path="/empirecity" element={<Ec />} />
      </Routes>
    </div>
  );
}

export default App;
