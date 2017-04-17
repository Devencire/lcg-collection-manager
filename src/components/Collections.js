import React from 'react'
import { connect } from 'react-redux'
import Collection from './Collection'

const Collections = ({ collections, cardsets }) => {
    return (
        <div>
            {collections.map(collectionId =>
                <Collection
                    key={collectionId}
                    collection={cardsets.get(collectionId)}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    collections: state.getIn(['sections', 'collections']),
    cardsets: state.get('cardsets')
})

export default connect(mapStateToProps)(Collections)
