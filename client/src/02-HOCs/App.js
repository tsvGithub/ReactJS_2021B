import React from "react"
import {withExtraPropAdded} from "./withExtraPropAdded"

function App(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

// const PointlessHOC = withExtraPropAdded(App)
// export default PointlessHOC

export default withExtraPropAdded(App)