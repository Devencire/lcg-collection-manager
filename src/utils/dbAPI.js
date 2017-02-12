import Immutable from 'immutable'

const cardDefinitionsFromJSON = jsonString => {
    const deserializedJSON = JSON.parse(jsonString)
    const cardDefs = deserializedJSON.data
    var cardsMap = Immutable.Map()
    cardDefs.forEach(def => {
        cardsMap = cardsMap.set(Number(def.code), Immutable.fromJS(def))
    })
    return cardsMap
}

export { cardDefinitionsFromJSON }
