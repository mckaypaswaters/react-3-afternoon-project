import React, {Component} from 'react'
import data from './data'

export default class DataComp extends Component {
    constructor() {
        super()
        this.state = {
            dataIndex: 0
        }
    }
        render() {
        return (
            <div className='data-in-box'>
                <h1 className='name'>
                    Name: {data[this.state.dataIndex].name.first} {data[this.state.dataIndex].name.last}
                </h1>
                <h3>From: {data[this.state.dataIndex].city}, {data[this.state.dataIndex].country}</h3>
                <h3>Job Title: {data[this.state.dataIndex].title}</h3>
                <h3>Employer: {data[this.state.dataIndex].employer}</h3>
                <h3>
                    Favorite Movies:
                    <p>1: {data[this.state.dataIndex].favoriteMovies[0]}</p>
                    <p>2: {data[this.state.dataIndex].favoriteMovies[1]}</p>
                    <p>3: {data[this.state.dataIndex].favoriteMovies[2]}</p>
                </h3>
            </div>
        )
    }
}

