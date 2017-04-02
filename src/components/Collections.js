import React from 'react'

import Collection from "./Collection"

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

export default Collections
