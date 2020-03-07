import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../pages/collectionPage/collectionPage.component";
const ShopPage = ({match}) => (
    <div>
        <h1>Collections</h1>        
            {/* <CollectionsOverview  /> */}
           
          <Route exact path={`${match.url}`} component={CollectionsOverview} />
          <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
          
        
    </div>
            
)
    

export default ShopPage;