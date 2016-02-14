import React, {Component} from 'react'
import Hello from '../../data/Hello.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        <h1>{Hello.greetText}</h1>
      </div>
    );
  }
}

export default Greeter
