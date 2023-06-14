import './App.css';
import Navbar from './comp/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './comp/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './comp/Home';
import About from './comp/About';
import Electronic from './comp/Electronic';
import Paper from './comp/Paper';
import Filing from './comp/Filing';
import Stationery from './comp/Stationery';
import CartDetails from './comp/CartDetails';
import { Route } from 'react-router';
import Branches from './comp/Branches';
import BackToTop from "react-back-to-top-button";
import { SlArrowUp } from 'react-icons/sl';
import ScrollButton from './comp/ScrollButton';
import { Fragment } from 'react';

function App() {
  return (
    <>
      {/* <br></br> */}
      <Provider store={store}>



        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/electronic' element={<Electronic />} />
            <Route exact path='/paper' element={<Paper />} />
            <Route exact path='/filing' element={<Filing />} />
            <Route exact path='/stationery' element={<Stationery />} />
            <Route exact path='/cart' element={<CartDetails />} />
            <Route exact path='/branches' element={<Branches />} />
            {/* <Route exact path='/noProducts' element={<NoProducts/>} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>

      <Footer></Footer>

      
      <Fragment>
        <ScrollButton />
      </Fragment>
    </>

  );
}

export default App;
