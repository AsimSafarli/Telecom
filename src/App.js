import { Routes,Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Page404 from './Components/ErorPage/Page404';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Signin from './Login/Signin/Signin';
import Signup from './Login/Signup/Signup';

function App() {
  return (
  <>
  <Routes>
        <Route path='/'  index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
  </>
  );
}

export default App;
