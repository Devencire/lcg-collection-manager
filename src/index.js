import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { setDefinitions, createCollection, createDeck } from './actions'
import { cardDefinitionsFromJSON } from './utils/dbAPI'
import Immutable from 'immutable'

render(
  <div>Loading cards...</div>,
  document.getElementById('root')
)

import request from 'request';
const cardsURL = 'https://netrunnerdb.com/api/2.0/public/cards'
request(cardsURL, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const definitions = Immutable.Map({cards: cardDefinitionsFromJSON(body)})
        console.log("definitions", definitions, definitions.toJS())
        const store = createStore(reducer)

        store.dispatch(setDefinitions(definitions))
        store.dispatch(createCollection("First Collection", {
            1001: {'maximum': 1, 'current': 1},
            1002: {'maximum': 2, 'current': 2}
        }))
        store.dispatch(createDeck("First Deck", 1001, {
            1001: {'maximum': 1, 'current': 0},
            1002: {'maximum': 2, 'current': 0}
        }))
        console.log(store.getState().toJS())

        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        )

    }
})
