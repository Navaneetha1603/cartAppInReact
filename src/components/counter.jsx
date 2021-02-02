import React, { Component } from 'react';
class Counter extends Component {
    // state = {  
    //     // count:0,
    //     value:this.props.counter.value,
    //     tags:['tag1','tag2','tag3'],
    //     // tags:[],
    //     // address:{
    //     //     name:'ma'
    //     // }

    //     //setting attributes
    //     //it will generate the pic with 200 pixcels size
    //     imageUrl:'https://picsum.photos/200' 
    // }

    //binding event handlers
    //first method
    // constructor(){
    //     super();
    //     // console.log("constructor",this);
    //    this.handleIncrement= this.handleIncrement.bind(this);
    // }
    //setting attributes
    styles={
        fontSize:20,
        fontWeight:"bold"
    }

    //conditional rendering
    // renderTags(){
    //     if(this.state.tags.length===0) return <p>There is no tags!</p>
    //     return  <ul>
    //     {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    //        </ul>
    // }
    //handling events
    // handleIncrement=(product)=>{
    //     console.log(product);
    //     // console.log('Increment is clicked',this); 
    //     // this.state.count++; //it doesnot work
    //     this.setState({value:this.state.value+1})
    // }

    // handleIncrement=()=>{
    //     // console.log(product);
    //     // console.log('Increment is clicked',this); 
    //     // this.state.count++; //it doesnot work
    //     this.setState({value:this.state.value+1})
    // }

   
    render() { 
        // console.log(this.props);
        return (
        // <React.Fragment>
        //     <h1>Hello World</h1>
        //     {/* <h2>{2+2}</h2> */}
        //     {/* <span>{this.state.count}</span> */}
        //     <h3>{this.formatCount()}</h3>
        //     <button>Increment</button>
        // </React.Fragment>

        //setting attributes
        // <div>
        //     {/* <img src={this.state.imageUrl} alt=""></img> */}
        //     <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        //     {/* <span style={{color:'pink',fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        //     <button className="btn btn-secondary btn-sm">Increment</button>
        // </div>

        //rendering classes dynamically
    
        //     <div>
        //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        //     <button className="btn btn-secondary btn-sm">Increment</button>
        // </div>

    //rendering lists dynamically
    //     <div>
    //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //     <button className="btn btn-secondary btn-sm">Increment</button>
    //     <ul>
    //         {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    //     </ul>
    // </div>


    //conditional rendering
    // <div>
    //     {this.state.tags.length===0 && <p>there is nothing</p>}
    //     {this.renderTags()}
    // </div>

    //handling events
    // <div>
    //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //     <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment</button>
    // </div>

    //passing event arguments
    // <div>
    //     {/*passing the children*/}
    //     {/* {this.props.children}  */}
    //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //     <button onClick={()=>this.handleIncrement({id:12})}  className="btn btn-secondary btn-sm">Increment</button>
    // </div>        
    
    //raising handling events
//     <div>
//     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//     <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment</button>
//      <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
// </div>   
//single source of truth

<div>
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm m-2">Increment</button>

     <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
</div> 
        );
    }
    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += (this.state.value === 0) ? "warning" : "primary";
    //     return classes;
    // }
//sst
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //object desctructuring
        const {value: count} =this.props.counter;
        return count===0? "Zero":count;
        //without object destructuring 
        //use it like this
        // return this.state.count===0?"Zero":this.state.count;
    }
}
 
export default  Counter;