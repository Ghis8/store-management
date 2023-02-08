import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Admin from './pages/Admin';
import InStock from './pages/InStock';
import Login from './pages/Login'
import Order from './pages/Order';
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin />}/> 
        <Route path="/orders" element={<Order />}/>
        <Route path="/stock" element={<InStock />}/>
      </Routes>
    </Router>
  );
}

export default App;
