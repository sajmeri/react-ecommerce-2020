import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoading
})

const CollectionsOverviewContaioner = compose => (
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContaioner;