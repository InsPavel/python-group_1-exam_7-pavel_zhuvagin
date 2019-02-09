import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'

const availableMenu = [
    {name: 'Hamburger', label: 'Гамбургер', price: '80'},
    {name: 'Chesseburger', label: 'Чизбургер', price: '90'},
    {name: 'Burger', label: 'Бургер', price: '80'},
    {name: 'Coffe', label: 'Кофе', price: '80'},
    {name: 'Tea', label: 'Чай', price: '80'},
    {name: 'Cola', label: 'Кола', price: '80'}
];

class App extends Component {

    state = {
        food: [
            {name: 'hamburger', count: 0, total: 0},
            {name: 'chesseburger', count: 0, total: 0},
            {name: 'burger', count: 0, total: 0},
            {name: 'coffe', count: 0, total: 0},
            {name: 'tea', count: 0, total: 0},
            {name: 'cola', count: 0, total: 0}
        ]
    };

    render() {
        return (
            <div className="container">
                    <Menu
                        foods={availableMenu}
                    />
            </div>
        );
    }
}

export default App;
