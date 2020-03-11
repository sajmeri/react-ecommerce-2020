import React, { Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import { firestore, convertSnapshotDataToObject } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }

    unsubscribefromSnapshot = null;
    componentDidMount(){
        const { updateCollectionProp } = this.props;
        const collectionSnapshot = firestore.collection("collections");
        // this commented out method below is the observable/obersermer method of querying 
        // this would ensure hot reloading of data whenever the firebase database updated
        // collectionSnapshot.onSnapshot(async snapshot => {
        //     const collectionMap = convertSnapshotDataToObject(snapshot);
        //     updateCollectionProp(collectionMap);
        //     this.setState({
        //         loading: false
        //     })
        // });


        // this is the Promise way of getting data - get/then
        // this data fetch happens only on componentDidMount and doesn't update without the component reload
        collectionSnapshot.get().then(snapshot => {
            const collectionMap = convertSnapshotDataToObject(snapshot);
            updateCollectionProp(collectionMap);
            this.setState({
                loading: false
            })
        })
        // the following fetch method also works but only on https connections
        // fetch('https://react-ecommerce-2020.firebaseio.com/users')
        // .then(response=>response.json())
        // .then(users => console.log(users))
        // .catch(error =>console.log(error));
    }
    render(){        
        const { match} =this.props;  
        const { isLoading } = this.state.loading;    
        return(
            <div>
                <h1>Collections</h1>        
                    {/* <CollectionsOverview  /> */}
                   
                  <Route exact path={`${match.url}`} 
                    render= {(props)=>(
                    <CollectionsOverviewWithSpinner isLoading = { isLoading } {...props} />)} />
                  <Route path={`${match.url}/:collectionId`} render=
                        {(props) => (
                        <CollectionPageWithSpinner isLoading={ isLoading} {...props} />)} />
                  
                
            </div>
                    
        )
    }
}
    
const mapDispatchToProps = dispatch =>({
    updateCollectionProp: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);