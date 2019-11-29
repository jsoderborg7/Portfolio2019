import React from 'react';
import {Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='routes'>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
