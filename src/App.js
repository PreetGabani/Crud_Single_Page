import './App.css';
import Home from './component/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer transition={Zoom}/>
      <Home/>
    </>
  );
}

export default App;
