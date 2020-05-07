import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import {Route} from 'react-router-dom';
import Collectionpage from './../collection/collection-page';
const Shop = ({match}) => {
  console.log(match);
  return(

        <div >
          <Route  exact path={`${match.path}`} component={CollectionOverview} />
          <Route path={`${match.path}/:collectionId`} component={Collectionpage} />
        </div>

  );/*categoryID is present in match object params*/
}
export default Shop;
