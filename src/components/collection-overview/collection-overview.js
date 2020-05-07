import React from 'react';
import {connect} from 'react-redux';
import './collection-overview.scss';
import Previewcollection from './../collection-preview/collection-preview';

const CollectionOverview = ({collections}) => {
  return (
  <div className='collections-overview'>
    {collections.map(section => (
       <Previewcollection title={section.title} items={section.items} key={section.id} />
     ))}
  </div>
);
}
const mapStateToProps = (state) => ({
  collections :Object.keys(state.shop.collections).map(key => state.shop.collections[key])
})

export default connect(mapStateToProps)(CollectionOverview);
