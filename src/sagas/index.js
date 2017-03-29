import { call, put, takeEvery, select } from 'redux-saga/effects'
import { createDeck } from '../actions'

const createDeckFromNRDBData = (data) => {
    console.log(data)
    return createDeck(data.name, data.cards)
}

const fetchDeckFromURL = (url) => {
    // just support NRDB for now
    const deckId = url.split('/').slice(-1)[0]
    const nrdbUrl = 'https://netrunnerdb.com/api/2.0/public/deck/' + deckId
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
    console.log(action)
    const state = yield select()
    console.log("importDeck", state)
    try {
        const createAction = yield call(fetchDeckFromURL, action.url)
        yield put(createAction)
    } catch (e) {
        yield put({type: "AWW", exception: e})
    }
}

function* importDeckSaga() {
    yield takeEvery("IMPORT_DECK", importDeck)
}

const sagas = [importDeckSaga]

export default sagas
