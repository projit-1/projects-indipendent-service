

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound'
import SignIn from './Pages/SignIn/SignIn';
import Services from './Pages/Services/Services';


function App() {
  return (
    <div className=''>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
