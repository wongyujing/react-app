import React from 'react';
import ReactDom from 'react-dom'

// create by React element
// const div = React.createElement(
//   'button',
//   {
//     onClick: () => alert('Hello World')
//   },
//   'hello'
// )

// create by jsx
const div = <button onClick={() => console.log()}>Hello</button>;

ReactDom.render(div, document.getElementById("app"));
