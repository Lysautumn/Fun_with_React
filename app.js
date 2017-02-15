var React = require('react');
var ReactDOM = require('react-dom');

// putting code between curly braces will cause it to be run as a JavaScript expression
ReactDOM.render(
  <h1>{5 + 5}</h1>,
  document.getElementById('container')
);

// first argument can be a variable
var hello = <p>Hello World</p>;
ReactDOM.render(hello, document.getElementById('second_container'));

// be sure to close all tags, even ones considered self-closing
var poem = (
  <div>
    <article>
      Roses are red,
      <br />
      Violets are blue,
      <br />
      I am creative,
      <br />
      So this poem does not rhyme.
    </article>
  </div>
);
ReactDOM.render(poem, document.getElementById('third_container'));
