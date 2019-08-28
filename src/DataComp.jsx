import React, {Component} from 'react'
import data from './data'
import './App.css'

export default class DataComp extends Component {
    constructor() {
        super()
        this.state = {
            dataIndex: 0
        }
    }

    updateStateAdd(){
        this.setState({dataIndex: this.state.dataIndex + 1})
    }

    updateStateSubtract(){
        this.setState({dataIndex: this.state.dataIndex - 1})
    }

        render() {
        return (
        <div className='data-comp-parent'>
            <div className='counter-parent'>
                <h1 className="counter">{`${this.state.dataIndex + 1}/25 `}</h1>
            </div>
            <div className='data-in-box'>
                <h1 className='name'>
                    Name: {data[this.state.dataIndex].name.first} {data[this.state.dataIndex].name.last}
                </h1>
                <h3 className='from'>From: {data[this.state.dataIndex].city}, {data[this.state.dataIndex].country}</h3>
                <h3 className='job-title'>Job Title: {data[this.state.dataIndex].title}</h3>
                <h3 className='employer'>Employer: {data[this.state.dataIndex].employer}</h3>
                <h3 className='favorite-movies'>
                    Favorite Movies:
                    <p className='movie1'>1: {data[this.state.dataIndex].favoriteMovies[0]}</p>
                    <p className='movie2'>2: {data[this.state.dataIndex].favoriteMovies[1]}</p>
                    <p className='movie3'>3: {data[this.state.dataIndex].favoriteMovies[2]}</p>
                </h3>
            </div>
            <div className="buttons-parent">
                <button onClick ={() => this.updateStateSubtract()} className="previous-button">{'< Previous'}</button>
                <button onClick ={() => this.updateStateAdd()} className='next-button'>{'Next >'}</button>
            </div>
        </div>
        )
    }
}

