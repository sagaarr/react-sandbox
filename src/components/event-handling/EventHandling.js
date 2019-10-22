import React, { Component } from 'react'

class EventHandling extends Component {
    
    render() {
        function triggerEvent(e) {
            e.preventDefault();
            console.log("Clicked")
        }
        return (
             <div>
                 <button onClick={triggerEvent}>
                    Event Triggers
                 </button>
             </div>
        );
    }
}
export default EventHandling