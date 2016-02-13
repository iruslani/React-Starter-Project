import React, {Component} from 'react'
import Hello from '../../data/Hello.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {Hello.greetText}
      </div>
    );
  }
}

export default Greeter
