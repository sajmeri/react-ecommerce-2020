import React, { Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";


import CollectionPage from "../collection/collectionPage.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import COllectionsOverviewContainer from "../../components/collections-overview/collections-overview.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    
    componentDidMount(){
       const { fetchCollection } = this.props;
       fetchCollection()
    }
    render(){        
        const { match} =this.props;  
        const { isCollectionFetching } = this.props;    
        return(
            <div>
                <h1>Collections</h1>        
                    {/* <CollectionsOverview  /> */}
                   
                  <Route exact path={`${match.url}`} 
                        component={COllectionsOverviewContainer} />
                  <Route path={`${match.url}/:collectionId`} render=
                        {(props) => (
                        <CollectionPageWithSpinner isLoading={ isCollectionFetching} {...props} />)} />
                  
                
            </div>
                    
        )
    }
}
    

const mapDispatchToProps = dispatch =>({
    fetchCollection: collectionMap => dispatch(fetchCollectionsStartAsync(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);