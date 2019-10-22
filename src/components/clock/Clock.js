import React ,{Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
    
/* Life-cycle hook  */
    componentDidMount() {
        this.timerID = setInterval(
            () => {
                
                this.tick()
            },
            1000
          );
    }
  /* Life-cycle hook  */
    componentWillUnmount() {
        clearInterval(console.log(this.timerID));
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
             <div>
                 <h3>{this.state.date.toLocaleTimeString()}</h3>
             </div>
        );
    }
}

export default Clock;