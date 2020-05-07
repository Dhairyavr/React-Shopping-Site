import React from 'react';
import './collection-page.scss';
import {connect} from 'react-redux';
import Collections from '../../components/collection-item/collection';


const Collectionpage = ({match,collections}) => {
  console.log({match,collections})
  return(
  <div className='collection-page'>
    <h2 className='title'>{collections.title}
    </h2>
    <div className='items'>
      {
        collections.items.map(item => (<Collections key={item.id} item={item}/>))
      }
    </div>
  </div>
);
}

const mapStateToProps = (state,ownProps) => ({
  collections:state.shop.collections[ownProps.match.params.collectionId]
})

export default  connect(mapStateToProps)(Collectionpage);
