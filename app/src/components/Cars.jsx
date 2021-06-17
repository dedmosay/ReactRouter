import React, { Component } from "react";
import Car from "./Car";

class Cars extends Component {
    state = {
        cars: [
            { name: 'Ford', year: 2018, color: 'red' },
            { name: 'Audi', year: 2016, color: 'blue' },
            { name: 'Mazda', year: 2010, color: 'white' }
        ]
    }

    goToHomePage = () => {
        console.log(this.props)
        this.props.history.push({
            pathname: "/"
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.goToHomePage}>Go to Home Page</button>
                <div className="Cars">
                {
                    this.state.cars.map((car, index) => {
                        return <Car key={index}
                            name={car.name}
                            year={car.year}
                            color={car.color}
                            // pathname={car.name}
                            // вместо того чтобы передавать все props - можно в компоненте Car добавить 
                            // import { withRouter } from 'react-router-dom' и этот (Car) компонент обернуть в withRouter
                            // {...this.props} 
                        />
                     }) 
                } 
                </div>
            </div>
        );
    }
}

export default Cars;

