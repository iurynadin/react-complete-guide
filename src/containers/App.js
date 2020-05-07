import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('App.js')
    }

    state = {
        persons: [
            { id: 1, name: 'Max', age: 28 },
            { id: 2, name: 'Manu', age: 29 },
            { id: 3, name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log('App.js getDerivedStateFromProps', props);
        return state;
    }
    
    componentDidMount() {
        console.log('App.js componentDidMount');
    }

    shouldComponentUpdate(nexProps, nextState) {
        console.log('App.js shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('App.js componentDidUpdate');
    }

    switchNameHandler = ( newName ) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState( {
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        } )
    }
    
    nameChangedHandler = ( event, id  ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        }
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons} )
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons})
    }
    
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
    }
    
    render () {  /* everything is executed in the render method */
        console.log('App.js render');
        let personsContent = null;
        
        if ( this.state.showPersons ) {
            personsContent = <Persons 
                        persons={this.state.persons} 
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />

        }
            
        return (
            <div className={classes.App}>
                <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length} 
                    clicked={this.togglePersonsHandler}
                    />
                {personsContent}
            </div>
        );
            // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }

}

export default App;
