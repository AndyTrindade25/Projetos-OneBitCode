import React, { Fragment } from 'react';
import Planet from './planet'

class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [ ] 
        }
    }

    componentDidMount(){

    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new planets
        })
    }
}