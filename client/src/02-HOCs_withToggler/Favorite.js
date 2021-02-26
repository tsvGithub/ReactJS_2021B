import React from 'react'
//1
import {withToggler} from './HOCs/withToggler'

// class Favorite extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h2 onClick={this.props.toggle}>{this.props.on? '💖' : '🤍'}</h2>
//             </div>
//         ) 
//     }
// }
function Favorite(props){
    return(
            <div>
                <h3>Click heart to favorite</h3>
                <h2 onClick={props.toggle}>{props.on? '💖' : '🤍'}</h2>
            </div>
     
    )
}

//1
export default withToggler(Favorite)