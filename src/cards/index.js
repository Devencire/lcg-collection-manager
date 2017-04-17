import cards from './collatedCards'
const cardsArray = Object.values(cards)

// TODO: stop getting this from NRDB
const imageUrlTemplate = 'https://netrunnerdb.com/card_image/{code}.png'

const cardName = cardCode => cards[cardCode].title
const cardType = cardCode => cards[cardCode].type_code
const cardImageURL = cardCode => imageUrlTemplate.replace('{code}', cardCode)
const isRunnerCard = cardCode => cards[cardCode].side_code === 'runner'
const isCorpCard = cardCode => !isRunnerCard(cardCode)

const cardsInPack = packCode => (
    cardsArray.filter(cardInfo => cardInfo.pack_code === packCode)
    .reduce(
        (quantities, card) =>
        {quantities[card.code] = card.quantity; return quantities}, {}
    )
)

// Use draft identities as placeholders
const defaultCorpIdentity = '00005'  // The Shadow
const defaultRunnerIdentity = '00006'  // The Masque

export {
    cardName, cardType,
    isRunnerCard, isCorpCard,
    cardsInPack,
    cardImageURL,
    defaultCorpIdentity, defaultRunnerIdentity
}
