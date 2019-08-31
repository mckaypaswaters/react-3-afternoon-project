import React, {Component} from 'react'
import data from './data'
import './App.css'

export default class ButtonBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="buttons-parent">
                <button onClick ={() => this.props.updateStateSubtractFn()} className="previous-button">{'< Previous'}</button>
                <button onClick ={() => this.props.updateStateAddFn()} className='next-button'>{'Next >'}</button>
            </div>
        )
    }
}