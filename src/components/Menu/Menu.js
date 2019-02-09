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
                onAddFood={() => props.onAddFood(food.name)}
                />
            })
        }
    </div>
}

export default Menu;