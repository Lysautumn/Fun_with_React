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

// using curly braces will also bring in variables
var name = 'Ally';
ReactDOM.render({name}, document.getElementById('name'));

function greeting(name) {
  alert('Hello, ' + name + '!');
};

// using images
var image = (
  <img
    src="http://i1308.photobucket.com/albums/s602/lysautumn/Facebook/Mobile%20Uploads/2016-12/20161216_110149_zps9nqxln2l.jpg"
    alt="image"
    onClick={greeting} />
);

// Can't inject if statements in JSX, code will not run:
// Example: The following code would break:
// (
//   <h1>
//     { if (purchase.complete) 'Thank you for placing an order!' }
//   </h1>
// )

// Most common way is to use ternary operators
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// ternary operator is here:
var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img,
	document.getElementById('coin_toss')
);

// can also use && operator instead of if statements
// works best for conditionals that will sometimes do something and sometimes do nothing
var pirate = Math.random() < 0.5;
var treasure = (
  <ul>
    <li>Apples</li>
    { !pirate && <li>Gold</li>}
    <li>Plants</li>
    <li>Books</li>
  </ul>
);

ReactDOM.render(treasure, getElementById('treasureChest'));

// .map will cycle through an array
var colors = ['Purple', 'Red', 'Blue', 'Brown'];

var colorList = colors.map(function(color) {
  return <li>{color}</li>;
});

ReactDOM.render(<ul>{colorList}</ul>, document.getElementById('colors'));
