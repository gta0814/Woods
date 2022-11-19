import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FreedomPage from './components/pages/Freedom/FreedomPage';
import { Button } from 'antd';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/*<Home /> 如果下边不好使用这个 */}

        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        {/* <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path='/Freedom/FreedomPage' component={FreedomPage} />
      </Router>
    </>
  );
}

export default App;
