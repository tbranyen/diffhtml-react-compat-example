import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Pane from 'react-split-pane';

class RadReact extends Component {
  render() {
    return (
      <div>
        Some rad React component
        <span>{this.props.message.text}</span>
      </div>
    );
  }
}

RadReact.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

class Display {
  render({ message, children }) {
    return [
      <li>{message}</li>,
      <li><RadReact message={{ text: "world" }}/></li>,
      undefined,
      1,
      2,
      3,
      'div',
      ...children,
    ]
  }
}

const App = state => (
  <div>
    <Pane split="vertical" minSize={50} defaultSize={200}>
      <div>
         <ul>
           <Display {...state}>
             <li><b>Test</b></li>
             <li><b>This</b></li>
             <li><b>Out!</b></li>
           </Display>
         </ul>
      </div>
      <div></div>
    </Pane>
  </div>
);

render(<App message="Hello world" />, document.querySelector('main'));
