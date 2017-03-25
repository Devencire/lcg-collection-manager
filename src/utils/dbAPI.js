import Immutable from 'immutable'

const definitionsFromJSON = jsonString => {
    const deserializedJSON = JSON.parse(jsonString)
    const imageUrlTemplate = deserializedJSON.imageUrlTemplate
    const cardDefs = deserializedJSON.data
    var cardsMap = Immutable.Map()
    cardDefs.forEach(def => {
        cardsMap = cardsMap.set(def.code, Immutable.fromJS(def))
    })
    return Immutable.Map({cards: cardsMap, imageUrlTemplate})
}

export { definitionsFromJSON }
