import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <div className='navbar__content'>
          <Link className='n9to5'to='/'>9to5.tv</Link>
          <a className='no-slash' href='http://live.9to5.tv'>Streaming</a>
          <a className='no-slash' href='http://gallery.9to5.tv'>Gallery</a>
          <Link className='no-slash' to='/'>Artists & Schedule</Link>
        </div>
      </div>
    );
  }
}

export default Nav;