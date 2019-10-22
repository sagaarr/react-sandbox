import React, { Component } from 'react'

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {isToggle: true}
        this.handleClick = this.handleClick.bind(this)
        console.log("this", this)
    }

    handleClick () {

        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }
    render() {
        
        return (
             <div>
                 <button  onClick={this.handleClick}>
                    {this.state.isToggle ? 'Hii' : 'Bye'}
                 </button>
             </div>
        );
    }
}
export default Toggle