import { call, put, takeEvery } from 'redux-saga/effects'
import { createDeck } from '../actions'

const createDeckFromNRDBData = (data) => {
    return createDeck(data.name, data.cards)
}

const fetchDeckFromURL = (url) => {
    // just support NRDB for now
    const typeIdMatcher = /(deck\/|decklist\/).*?(\d+)/
    const [_, type, deckId] = url.match(typeIdMatcher)
    const nrdbUrl = 'https://netrunnerdb.com/api/2.0/public/' + type + deckId
    return fetch(nrdbUrl).then(response => {
        return response.json().then(jsonResponse =>
            createDeckFromNRDBData(jsonResponse.data[0])
        )
    })
    .catch(error => {
        throw error
    })
}

function* importDeck(action) {
    try {
        const createAction = yield call(fetchDeckFromURL, action.url)
        yield put(createAction)
    } catch (e) {
        yield put({type: 'IMPORT_DECK_FAILURE', exception: e})
    }
}

function* importDeckSaga() {
    yield takeEvery('IMPORT_DECK', importDeck)
}

const sagas = [importDeckSaga]

export default sagas
