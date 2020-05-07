import React from 'react';
import './collection.styles.scss';
import Collections from '../collection-item/collection';
const Previewcollection = (props) => {
  return(
        <div className='collection-preview'>
        <h1 className='title' id={props.id}>{props.title}</h1>

              <div className='preview'>
              {props.items
                .filter((items,id)=> id<4)
                .map(item=>(<Collections key={item.id} item={item} /> ))}
              </div>

        </div>
  );
}
export default Previewcollection;
