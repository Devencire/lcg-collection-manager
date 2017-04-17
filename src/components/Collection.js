import React from 'react'

const Collection = ({ collection }) => {
    const sum = (a, b) => a + b
    return (
        <div>
            {collection.get('name')}
            ({collection.get('contents').reduce(sum)}
            / {collection.get('template').reduce(sum)})
        </div>
    )
}

export default Collection
