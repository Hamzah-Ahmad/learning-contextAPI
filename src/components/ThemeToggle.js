import React, { Component } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
export default class ThemeToggle extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const {toggleTheme} = context;
                return(
                    <div>
                        <button onClick = {toggleTheme}>Toggle Mode</button> 
                     </div>
                )

            }}</ThemeContext.Consumer>
        )
    }
}
