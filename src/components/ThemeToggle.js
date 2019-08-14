import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


// export default class ThemeToggle extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const {toggleTheme} = context;
//                 return(
//                     <div>
//                         <button onClick = {toggleTheme}>Toggle Mode</button> 
//                      </div>
//                 )

//             }}</ThemeContext.Consumer>
//         )
//     }
// }

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <button onClick = {toggleTheme}>Toggle Mode</button> 
        </div>
    )
        
}

export default ThemeToggle;