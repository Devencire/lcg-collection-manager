import React from 'react'

import Collection from "./Collection"

const Collections = ({ collections, cardsets }) => {
    return (
        <ul>
            {collections.map(collectionId =>
                <Collection
                    key={collectionId}
                    collection={cardsets.get(collectionId)}/>
            )}
        </ul>
    )
}

export default Collections
