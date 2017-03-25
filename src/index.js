import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { createCollection, createDeck } from './actions'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import request from 'request'
import { cardsInPack } from './cards'

const logger = createLogger({
    stateTransformer: state => state.toJS()
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagas.forEach(sagaMiddleware.run)

store.dispatch(createCollection("First Collection", cardsInPack('core')))
store.dispatch(createDeck("First Deck", {
    "01001": 1,
    "01002": 2
}))

console.log(store.getState().toJS())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
