import React from "react"

export function withExtraPropAdded(component){
    const Component = component
    return function(props){
        return(
            <Component {...props} extraPropAdded='Hola!'/>
        )
    }
}

// export function withExtraPropAdded(component){
//     const Component = component
//     return function(props){
//         return(
//             <Component anotherProp="How do you do?" {...props} />
//         )
//     }
// }