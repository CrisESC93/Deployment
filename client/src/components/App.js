import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cats: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('/api/cats');

        this.setState({
            cats: response.data
        });
    }

    showCats = () => (
        this.state.cats.map((cat, index) => (
            <li key = { index }>
                { cat.name }
            </li>
        ))
    )

    render() {
        return (
            <div>
                Cats List:
                <ul>
                    { this.showCats() }
                </ul>
            </div>
        );
    }
}

export default App;