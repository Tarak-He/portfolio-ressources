import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Navigation() {



    return(
        <nav className="navbar">
        <ul className="navbar-nav">
          {/* <!-- ARROW --> */}
          
          <li className="logo">
          <NavLink exact to="/" activeClassName="active" >
            <a href="/" className="nav-link">
              
              <span className="link-text logo-text">
              <i class="fas fa-home"></i> Tarak</span>
  
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"> <g className="fa-group"><path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z" className="fa-secondary" ></path> <path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z" className="fa-primary" ></path> </g> </svg>
            </a>
          </NavLink>
          </li>
          
          {/* <!-- RESSOURCES --> */}
          <li className="nav-item">
          <NavLink to="/library" activeClassName="active" >
            <a href="/" className="nav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" className="svg-inline--fa fa-book fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" className="fa-primary" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
              <span className="link-text">Ressources</span>
            </a>
          </NavLink>
          </li>
  
          {/* <!-- RESUME --> */}
          <li className="nav-item">
          <NavLink to="/resume" activeClassName="active" >
            <a href="/" className="nav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file" className="svg-inline--fa fa-file fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path fill="currentColor" className="fa-primary" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
              <span className="link-text">CV</span>
            </a>
          </NavLink>
          </li>
  
          {/* <!-- CONTACT --> */}
          <li className="nav-item">
            <a href="/" className="nav-link">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" className="fa-primary" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
              <span className="link-text">Contact</span>
            </a>
          </li>
  
          <li className="nav-item" id="themeButton"></li>
        </ul>
      </nav>
    )
}

export default Navigation;