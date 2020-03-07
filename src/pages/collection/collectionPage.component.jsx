import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collectionPage.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
    const { title, items} = collection;
    console.log(items);
    return(
    <div className="collection-page">
       <h2>{ title}</h2> 
       <div className="items">
        { items.map(item =>                
            <CollectionItem className=".collection-item" key={item.id} item={item} />                
            ) }
        </div>
        
       )
       
    </div>
    )
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);