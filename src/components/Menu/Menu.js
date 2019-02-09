import React from 'react';
import Food from './Food/Food'

function Menu(props) {
    return <div className="menu">
        <h3>Меню</h3>
        {props.menu.map((food) => {
                return <Food
                key={food.name}
                name={food.label}
                price={food.price}
                addFood={() => props.changeFood(food.name, +1)}
                />
            })
        }
    </div>
}

export default Menu;