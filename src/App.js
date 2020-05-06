import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Max', age: 28 },
            { id: 2, name: 'Manu', age: 29 },
            { id: 3, name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: true
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
        console.log(persons, persons[personIndex]);

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
        
        let personsContent = null;
        
        if ( this.state.showPersons ) {
            personsContent = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age} 
                            changed={(event) => this.nameChangedHandler(event,person.id) }
                            />
                    })}
                </div>
            );
        }

        const classes = [];
        if( this.state.persons.length <= 2 ) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }
            
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>
                        Toggle Persons
                </button>
                {personsContent}
            </div>
        );
            // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }

}

export default App;
