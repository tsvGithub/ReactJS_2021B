import React, {Component} from 'react'

//2 Toggler Component
class Toggler extends Component{
    state = {
        on: false
    }
    
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
                }
        })
    }
    render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}

//1 HOC
export function withToggler(component){
    return function(props){
        return(
            <Toggler component={component} {...props} />
        )
    }
}