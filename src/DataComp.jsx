import React, {Component} from 'react'
import data from './data'
import './App.css'

export default class DataComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className='data-comp-parent'>
            <div className='counter-parent'>
                <h1 className="counter">{`${this.props.dataIndexNum + 1}/${data.length} `}</h1>
            </div>
            <div className='data-in-box'>
                <div className="another-parent">
                    <h1 className='name'>
                        Name: {data[this.props.dataIndexNum].name.first} {data[this.props.dataIndexNum].name.last}
                    </h1>
                </div>
                <div className="another-parent-2">
                    <h3 className='from'>From: {data[this.props.dataIndexNum].city}, {data[this.props.dataIndexNum].country}</h3>
                </div>
                <div className="another-parent-3">
                    <h3 className='job-title'>Job Title: {data[this.props.dataIndexNum].title}</h3>
                </div>
                <div className="another-parent-4">
                    <h3 className='employer'>Employer: {data[this.props.dataIndexNum].employer}</h3>
                </div>
                <div className="another-parent-5">
                    <h3 className='favorite-movies'>Favorite Movies: </h3>
                </div>
                <div className="another-parent-6">
                    <ol className='ordered-list'>
                        <li className='movie1'> {data[this.props.dataIndexNum].favoriteMovies[0]}</li>
                        <li className='movie2'> {data[this.props.dataIndexNum].favoriteMovies[1]}</li>
                        <li className='movie3'> {data[this.props.dataIndexNum].favoriteMovies[2]}</li>
                    </ol>
                </div>

            </div>
        </div>
        )
    }
}


