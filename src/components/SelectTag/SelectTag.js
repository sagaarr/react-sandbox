import React, {Component} from 'react';


class SelectTag extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }
    render() {
        return (
            <div>
                <select onChange={this.state.value}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                </select>
            </div>
        )
    }
}


export default SelectTag;