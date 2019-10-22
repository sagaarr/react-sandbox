import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
             <div>
                 <img src={this.props.image} alt="test" />
             </div>
        );
    }
}

export default Comment; 