
import './App.css';

import MyRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <ToastContainer />
  <Navbar />

    <MyRouter />

    <Footer />
    </div>
  );
}

export default App;
