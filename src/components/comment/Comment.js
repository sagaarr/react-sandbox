import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
             <div>
                 <h1>Author: {this.props.comment}</h1>
             </div>
        );
    }
}

export default Comment; 