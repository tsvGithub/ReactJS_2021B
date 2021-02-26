import React from 'react'
//1
import {withToggler} from './HOCs/withToggler'

// class Menu extends Component{
//     render(){
//         // console.log(this.state.on)
//         return(
//             <div>
//                 <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"}</button>
//                 <nav style={{display: this.props.on ? "block" : 'none'}}>
//                     <a>About </a>
//                     <a>Contacts </a>
//                     <a>Favorites </a>
//                     <a>Likes </a>
//                 </nav>
            
//             </div>
//         )
//     }
// }
function Menu(props){
    return(
            <div>
                <button onClick={props.toggle}>{props.on ? "Hide" : "Show"}</button>
                <nav style={{display: props.on ? "block" : 'none'}}>
                    <a>About </a>
                    <a>Contacts </a>
                    <a>Favorites </a>
                    <a>Likes </a>
                </nav>
            
            </div>

    )
}
//1
export default withToggler(Menu)