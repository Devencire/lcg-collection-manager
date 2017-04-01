import Immutable from 'immutable'

const cardsetsInSection = section => state => (
    state.getIn(['sections', section])
    .map(cardsetId => state.getIn(['cardsets', cardsetId]).set('id', cardsetId))
)
const collections = cardsetsInSection('collections')
const activeDecks = cardsetsInSection('activeDecks')
// const inactiveDecks = cardsetsInSection('inactiveDecks')

const cardsMissingFromCardset = cardset => (
    cardset.get('contents').mergeWith(
        (current, required) => required - current,
        cardset.get('template')
    )
)

const cardsWorthTransferringBetween = (source, destination) => {
    const missing = cardsMissingFromCardset(destination)
    return (
        missing.map((qty, code) => Math.min(qty, source.getIn(['contents', code], 0)))
        .filter(qty => qty > 0)
    )
}

const cardTransfersFrom = sources => destination => (
    sources.map(source => Immutable.Map({
        source: source.get('id'),
        destination: destination.get('id'),
        cards: cardsWorthTransferringBetween(source, destination)
    }))
    .filter(cardTransfer => cardTransfer.get('cards').size > 0)
)

const annotateWithRefinements = state => {
    // console.log("annotating", state.toJS())
    const transfersToActiveDecks = (
        activeDecks(state).flatMap(cardTransfersFrom(collections(state)))
    )
    // console.log(transfersToActiveDecks.toJS())
    return state.set('refinements', transfersToActiveDecks)
}

export default annotateWithRefinements
