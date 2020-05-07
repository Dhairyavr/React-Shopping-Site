import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory-menu/directory';
const Homepage = (props) => {
  console.log(props);
  return (

      <div className="homepage">

        <Directory />

      </div>
  );
}
export default Homepage;
