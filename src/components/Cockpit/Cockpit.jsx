import React, { useEffect  } from 'react';
import classes from './Cockpit.css'
import { prototype } from 'case-sensitive-paths-webpack-plugin';

const cockpit = ( props ) => {

    // will render for every cycle
    // to render only in specific time: second argument, in below example will only render when persons props changes
    // to render only in the first time: empty array in the second argument
    useEffect(() => {
        console.log('Cockpit.js useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[props.persons]);

    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect');
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default React.memo(cockpit);  
// React memoizes the rendered output then skips unnecessary rendering. When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.