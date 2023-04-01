import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
