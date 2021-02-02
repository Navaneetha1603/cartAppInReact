import React, { Component } from 'react';
class Practice extends Component {
    state = { 
        count:10
     }
    render() { 
       
        return(
            <div>
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary m-2">increment</button>
            </div>
        );
    }

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "primary" : "warning";
        return classes;
    }
    formatCount(){
        return this.state.count===0?"Zero":this.state.count;
    }
}
 
export default Practice;