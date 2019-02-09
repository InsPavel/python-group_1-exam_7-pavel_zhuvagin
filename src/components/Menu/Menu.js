import React from 'react';
import Food from './Food/Food'

function Menu(props) {
    return <div className="menu">
        <h3>Меню</h3>
        {props.foods.map((food) => {
                return <Food
                key={food.name}
                name={food.label}
                price={food.price}
                />
            })
        }
    </div>
}

export default Menu;