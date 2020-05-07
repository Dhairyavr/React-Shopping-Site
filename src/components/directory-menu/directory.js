import React from 'react';
import Menuitem from '../menu-item/menu-item';
import './directory.styles.scss';
import {connect} from 'react-redux';


const Directory = ({sections}) => (
      <div className='directory-menu'>
      {sections.map(section=>(<Menuitem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />))}
      </div>
    );

const mapStateToProps = (state) => ({
  sections : state.directory.sections
})

export default connect(mapStateToProps)(Directory);
