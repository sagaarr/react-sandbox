import React, {Component} from 'react';

class Test extends Component {
    render() {
        return (
           <div>
                <h1>Hello {this.props.name}</h1>
           </div>
        )
    }
}

 /*  Using Function  */
// function Test (props) {
//     return(
//         <h1>Hello {props.name}</h1>
//     )
// }
export default Test;
