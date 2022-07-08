import './App.css';
import Login from './components/login/login';
// import Navbar from './components/navbar/navbar';
import SectionOne from './components/section-one/section-one';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SectionTwo from './components/section-two/section-two';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SectionOne />} />
        <Route path='/sectionTwo' element={<SectionTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
