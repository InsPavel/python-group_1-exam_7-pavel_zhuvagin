import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Order from "./components/Order/Order";

const availableMenu = [
    {name: 'hamburger', label: 'Гамбургер', price: '80'},
    {name: 'chesseburger', label: 'Чизбургер', price: '90'},
    {name: 'burger', label: 'Бургер', price: '60'},
    {name: 'coffe', label: 'Кофе', price: '45'},
    {name: 'tea', label: 'Чай', price: '40'},
    {name: 'cola', label: 'Кола', price: '28'}
];

class App extends Component {

    constructor(props){
        super(props);

        this.state = {};

        this.state.foods = availableMenu.map(item => {
            let food = {...item};
            food.total = 0;
            food.count = 0;
            return food
        });
    }

    changeFood = (name, amount) => {
        let price = availableMenu.find(item => item.name === name).price;

        let index = this.state.foods.findIndex(item => item.name === name);

        let food = {...this.state.foods[index]};

        food.count += amount;
        food.total = food.count * price;

        let foods = [...this.state.foods];
        foods[index] = food;

        let state = {...this.state, foods};

        this.setState(state)
    };

    getTotal = () => {
        let total = 0;
        for(let i = 0; i < this.state.foods.length; i++){
            total += this.state.foods[i].total;
        }
        if(total === 0){
            return 'Заказ пустой!'
        }
        return 'Общая сумма: ' + total;
    };

    render() {
        return (
            <div className="container">
                <Order
                    foods={this.state.foods}
                    menu={availableMenu}
                    changeFood={this.changeFood}
                    getTotal={this.getTotal}
                />
                <Menu
                    menu={availableMenu}
                    changeFood={this.changeFood}
                />
            </div>
        );
    }
}

export default App;
