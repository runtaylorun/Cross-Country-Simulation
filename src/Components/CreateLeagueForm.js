import initializeDatabase from '../Scripts/IndexedDb/MainMenu'
import React, {Component} from 'react';

class CreateLeagueForm extends Component {
    constructor(props) {
        super(props)
        this.state = {leagueName: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({leagueName: event.target.value})
        indexedDB.databases().then(r => console.log(r))
    }

    handleSubmit() {
        initializeDatabase(this.state.leagueName)
    }

    render() {
        return (
            <div>
                <h1>Create New League</h1>
                <form onSubmit={this.handleSubmit}>
                    <lable>League Name</lable>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default CreateLeagueForm;