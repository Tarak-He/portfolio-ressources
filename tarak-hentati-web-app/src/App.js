import React from 'react';
import './App.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

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
      <Navigation />

      <Route render={ ({location}) => (

        <TransitionGroup>
        <CSSTransition key={location.key} timeout={3000} classNames="fade">

          <Switch location={location}>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/library" component={Browse} />
            <Route exact path ="/resume" component={Resume} />
          </Switch>

        </CSSTransition>
      </TransitionGroup>
      )} />

    </div>
  );
}

export default App;
