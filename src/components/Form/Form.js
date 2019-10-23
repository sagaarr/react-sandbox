import React , {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {value : ''};
        // console.log("this from constructor", this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({value: event.target.value}) };
    handleSubmit(event) {
        console.log("Form Value", this.state.value);
        console.log("event", event)
        event.preventDefault();
    }
    render() {
        return(
            <div style={{'border': '1px solid red'}}>
                <h2>Form Field Please open console to see result</h2>
               <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}


export default Form;
