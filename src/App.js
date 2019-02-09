import React, { Component } from 'react';
import './App.css';

const availableMenu = [
    {name: 'Hamburger', price: '80', total: 0},
    {name: 'Chesseburger', price: '90', total: 0},
    {name: 'Burger', price: '80', total: 0},
    {name: 'Coffe', price: '80', total: 0},
    {name: 'Tea', price: '80', total: 0},
    {name: 'Cola', price: '80', total: 0}
];

class App extends Component {

    state = {
        food: [
            {name: 'hamburger', total: 0},
            {name: 'chesseburger', total: 0},
            {name: 'burger', total: 0},
            {name: 'coffe', total: 0},
            {name: 'tea', total: 0},
            {name: 'cola', total: 0}
        ]
    };

    render() {
        return (
            <div className="container">

            </div>
        );
    }
}

export default App;
