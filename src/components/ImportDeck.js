import React from 'react'
import { connect } from 'react-redux'
import { importDeck } from '../actions'

let ImportDeck = ({ dispatch }) => {
    var input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(importDeck(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Import NRDB Deck
                </button>
            </form>
        </div>
    )
}
ImportDeck = connect()(ImportDeck)

export default ImportDeck
