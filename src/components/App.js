import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCounter, removeCounter, addInCounter, subInCounter} from '../actions/reduxActions';

function mapStateToProps(state){
	return{
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch){
	return{
		...bindActionCreators({addCounter, removeCounter, addInCounter, subInCounter}, dispatch)
	}
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.addInCounter = this.addInCounter.bind(this);
    this.subInCounter = this.subInCounter.bind(this);
  }
  addCounter(){
  	this.props.addCounter();
  }

  removeCounter(i){
  	this.props.removeCounter(i);
  }

  addInCounter(i){
  	this.props.addInCounter(i);
  }

  subInCounter(i){
  	this.props.subInCounter(i);
  }
  render() {
  	console.log(this.props.counter);
  	console.log(this.props.counter.length-1);
    return (
      <div className="App">
      {this.props.counter.map((items, i) =>
            <div key={'list'+i}>
            	      <h1>Counter: {this.props.counter[i]}</h1>
            	      <button onClick={this.addInCounter.bind(this, i)}>+</button><button onClick={this.subInCounter.bind(this, i)}>-</button>
            	  </div>)}
      <br /><br />
      <button onClick={this.addCounter.bind(this)}>Add Counter</button><button onClick={this.removeCounter.bind(this, this.props.counter.length-1)}>Remove Counter</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
