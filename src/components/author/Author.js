import React, { Component } from 'react'

class Author extends Component {
    render() {
        return (
             <div>
                 <h1>Author: {this.props.author}</h1>
             </div>
        );
    }
}

export default Author; 