import React, {Component, createContext, useState} from 'react';

export const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
//     state = {
//         isLightTheme: true,
//         light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
//     }

//     //to make the function below worked, we binded 'this' to this.toggleTheme on line 20. We could have made the function below an arrow function which would have removed the need to bind 'this'. I just did it this way to see how it works.
//     toggleTheme  () {
//         this.setState({
//             isLightTheme: !this.state.isLightTheme
//         })
//     }
//     render() {
//         return(
//             <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme.bind(this)}}>
//                {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
//}


const ThemeContextProvider = (props) => {
    const [isLightTheme, setLightTheme] = useState(true);
    const [light, setLight] = useState({syntax: '#555', ui: '#ddd', bg: '#eee'});
    const [dark, setDark] = useState({syntax: '#ddd', ui: '#333', bg: '#555'});
    const toggleTheme = () => {
        setLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value = {{isLightTheme, light, dark, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}



export default ThemeContextProvider;