import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import { Component } from 'react';

class App extends Component{
  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]
 }
 //mounting phase
 constructor(){
   super();
   console.log("app -constructor",);
  //  this.state=this.props.something;
 }

    //unmounting phase
    componentWillUnmount(){
      console.log("counter -removed");
    }
 componentDidMount(){
   //ajax call
   console.log('App-Mounted');
   this.setState({})
 }
 handleIncrement=counter=>{
    //  console.log(counter);
    //counters array exactly same as this.state.counters
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter}
    counters[index].value++;
    // console.log(this.state.counters[0])
    this.setState({counters});

 }
 handleDelete=(counterId)=>{
     console.log("event handler called",counterId);
     const counters=this.state.counters.filter(c=>c.id!==counterId)
    //key and value are same then use only one insttead of {counters:counters}
     this.setState({counters})
 }
 handleReset=()=>{
  //  console.log("hello")
    const counters=this.state.counters.map(c=>{c.value=0;return c})
    this.setState({counters})

 }

 //updating phase
 componentDidUpdate(prevprops,prevState)
 {
    console.log("prevProps",prevprops);
    console.log("prevState",prevState);
    // if(prevprops.counter.value!== this.props.counter.value){
    //   //ajax call and get new data from the server
    // }
 }
 render(){
   console.log("app rendered");
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
    <Counters 
    counters={this.state.counters}
    onReset={this.handleReset}
    onIncrement={this.handleIncrement}
    onDelete={this.handleDelete}/>
    </div>
  );

 }
 
}

// function App() {
// //   state = { 
// //     counters:[
// //         {id:1,value:4},
// //         {id:2,value:0},
// //         {id:3,value:0},
// //         {id:4,value:0},
// //     ]
// //  }
// //  handleIncrement=counter=>{
// //     //  console.log(counter);
// //     //counters array exactly same as this.state.counters
// //     const counters=[...this.state.counters];
// //     const index=counters.indexOf(counter);
// //     // counters[index]={...counter}
// //     counters[index].value++;
// //     // console.log(this.state.counters[0])
// //     this.setState({counters});

// //  }
// //  handleDelete=(counterId)=>{
// //      console.log("event handler called",counterId);
// //      const counters=this.state.counters.filter(c=>c.id!==counterId)
// //     //key and value are same then use only one insttead of {counters:counters}
// //      this.setState({counters})
// //  }
// //  handleReset=()=>{
// //     const counters=this.state.counters.map(c=>{c.value=0;return c})
// //     this.setState({counters})

// //  }
// //   return (

// //     // <div className="App">
// //     //   <header className="App-header">
// //     //     <img src={logo} className="App-logo" alt="logo" />
// //     //     <p>
// //     //       Edit <code>src/App.js</code> and save to reload.
// //     //     </p>
// //     //     <a
// //     //       className="App-link"
// //     //       href="https://reactjs.org"
// //     //       target="_blank"
// //     //       rel="noopener noreferrer"
// //     //     >
// //     //       Learn React
// //     //     </a>
// //     //   </header>
// //     // </div>
// //     <React.Fragment>
// //       <Navbar/>
// //     <Counters 
// //     counters={this.state.counters}
// //     onReset={this.handleReset}
// //     onIncrement={this.handleIncrement}
// //     onDelete={this.handleDelete}/>
// //     </React.Fragment>
// //   );
// }

export default App;
