import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap';
import Footer from './components/footer';
import Pets from './components/Pets';
import Petadd from './components/petadd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Petedit from './components/petedit';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Navbar />
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} exact /> 
       <Route path="/pets" element={<Pets/>} exact />
       <Route path="/petedit/:id" element={<Petedit/>} exact />
       <Route path="/petadd" element={<Petadd/>} exact />
       </Routes>
       </BrowserRouter>
       <Footer /> 
    </div>
  );
}

export default App;
