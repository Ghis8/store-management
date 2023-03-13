import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Admin from './pages/Admin';
import InStock from './pages/InStock';
import Login from './pages/Login'
import Order from './pages/Order';
import Register from './pages/Register'
import Products from './pages/Products';
import AddUser from './pages/AddUser';
import SaleItem from './pages/SaleItem';
import Loading from './pages/Loading';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin />}/> 
        <Route path="/orders" element={<Order />}/>
        <Route path="/stock" element={<InStock />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/adduser" element={<AddUser/>} />
        <Route path="/sales" element={<SaleItem/>} />
      </Routes>
    </Router>
  );
}

export default App;
