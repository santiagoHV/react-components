import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }


    render() {
        return ( <
            div className = "App" >
            <
            Navbar dark color = "dark" >
            <
            div className = "container" >
            <
            NavbarBrand href = "/" > Ristorante Con Fusion < /NavbarBrand> <
            /div> <
            /Navbar> <
            div className = "container" >
            <
            Menu dishes = { this.state.dishes }
            onClick = {
                (dishId) => this.onDishSelected(dishId) }
            /> <
            DishDetail dish = { this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] }
            /> <
            /div> <
            /div>
        );
    }

}

export default Main;