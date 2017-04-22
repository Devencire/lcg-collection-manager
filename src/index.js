import React from 'react'
import './index.css'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { createCollection, createDeck, addToCollection } from './actions'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import { cardsArray, cardsInPack, quantitiesOfCards } from './cards'

const logger = createLogger({
    stateTransformer: state => state.toJS()
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagas.forEach(sagaMiddleware.run)

store.dispatch(createCollection(
    'Collection', quantitiesOfCards(cardsArray)
))
for (var i=0; i<2; i++) {
    store.dispatch(addToCollection(
        store.getState().get('cardsets').first(),
        quantitiesOfCards(cardsInPack('core'))
    ))
}
const noiseDeckCards = {
    '01001':1,'01002':2,'01003':3,'01004':3,'01005':2,'01006':1,'01007':2,
    '01008':2,'01009':2,'01010':2,'01011':2,'01012':2,'01014':2,'01016':2,
    '01019':3,'01022':1,'01034':2,'01047':1,'01049':3,'01050':3,'01051':2,
    '01053':3
}
store.dispatch(createDeck('Core only Noise', noiseDeckCards))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
