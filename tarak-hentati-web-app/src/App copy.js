import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './component/Home/Home';
import './component/Home/Home.css';

import Navigation from './component/Navigation/Navigation';
import './component/Navigation/Navigation.css';

import Browse from './component/Browse/Browse';
import './component/Browse/Browse.css';

import Resume from './component/Resume/Resume';
import './component/Resume/Resume.css';


function App() {
  return (
    <div className="App">

<Router>
      <Navigation />


      <Route path="/" exact component={Home} />
      <Route path="/library" exact component={Browse} />
      <Route path="/resume" exact component={Resume} />

      </Router>

    </div>
  );
}

export default App;