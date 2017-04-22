import cards from './collatedCards'
import packsArray from 'json-data/packs'
import cyclesArray from 'json-data/cycles'

const cycles = cyclesArray.reduce(
    (cycles, cycle) => {
        cycle.packs = {}
        cycles[cycle.code] = cycle
        return cycles
    }, {}
)

const packs = packsArray.reduce(
    (packs, pack) => {
        pack.cards = {}
        packs[pack.code] = pack
        cycles[pack.cycle_code].packs[pack.code] = pack
        return packs
    }, {}
)

const cardsArray = Object.values(cards)
cardsArray.forEach(card => packs[card.pack_code].cards[card.code] = card)

// TODO: stop getting this from NRDB
const imageUrlTemplate = 'https://netrunnerdb.com/card_image/{code}.png'

const cardName = cardCode => cards[cardCode].title
const cardType = cardCode => cards[cardCode].type_code
const cardImageURL = cardCode => imageUrlTemplate.replace('{code}', cardCode)
const isRunnerCard = cardCode => cards[cardCode].side_code === 'runner'
const isCorpCard = cardCode => !isRunnerCard(cardCode)

const quantitiesOfCards = cards => cards.reduce(
    (quantities, card) =>
    {quantities[card.code] = card.quantity; return quantities}, {}
)

const cardsInPack = packCode => (
    cardsArray.filter(cardInfo => cardInfo.pack_code === packCode)
)

const cardsInCycle = cycleCode => (
    Object.keys(cycles[cycleCode].packs).reduce(
        (cards, pack) => cards.concat(cardsInPack(pack)), []
    )
)

// Use draft identities as placeholders
const defaultCorpIdentity = '00005'  // The Shadow
const defaultRunnerIdentity = '00006'  // The Masque

export {
    cardName, cardType,
    isRunnerCard, isCorpCard,
    cardsInPack, cardsInCycle, cardsArray,
    quantitiesOfCards,
    cardImageURL,
    defaultCorpIdentity, defaultRunnerIdentity
}
