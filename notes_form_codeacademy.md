Explanations
============

About JSX
---------

	JSX is a syntax extension for JavaScript.
	It was written to be used with React. JSX code looks a lot like HTML.
	JSX compiler will translate any JSX into regular JavaScript.


1- Pattern
==========

Passing state between a Statefull component to a Stateless component:
---------------------------------------------------------------------

Great work! You just passed information from a stateful component to a stateless component. You will be doing a lot of that.

You learned earlier that a component can change its state by calling this.setState. You may have been wondering: how does a component change its props?

The answer: it doesn't!

A component should never update this.props. Look at Bad.js to see an example of what not to do.

This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?

IMPORTANT: 
==========

> A React component should use props to store information that can be changed, but can only be changed by a different component.
> A React component should use state to store information that the component itself can change.

2- Pattern
==========

Update a the state of a Statefull component from a  Stateless component:
------------------------------------------------------------------------

We can do that passing a function that setState's (full component) chnging it, to the stateLess component via props;
Stateless components updating their parents' state is a React pattern that you'll see more and more. Learning to recognize it will help you understand how React apps are organized.

Automatic binding allows you to pass functions as props, and any this values in the functions' bodies will automatically refer to whatever they referred to when the function was defined. No binding to worry about!

3- Pattern
==========

 A child component updates its parent's state, and the parent passes that state to a sibling component.
 ------------------------------------------------------------------------------------------------------

 In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.

In lesson 2, you learned that lesson 1's pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent's state.

In this lesson, we will expand the pattern one last time. A child component updates its parent's state, and the parent passes that state to a sibling component.

Styles in REACT
===============

> <h1 style={{ color: 'red' }}>Hello world</h1>

Notice the double curly braces. What are those for?
The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."
The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object.

- Primeira dupla de chaves: leia como JavaScript
- Segunda dupla de chaves: criação de um objeto JavaScript

Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. You could have 100 different files, all with global variables named style, and there could be no conflicts.

```javascript
var styles = {
 color: 'darkcyan',
 background: 'mintcream'
};

<h1 style={styles}>Olá</h1>
```

Obs.: Since you aren't injecting an object literal anymore, you will no longer need to use double curly braces.

> { fontSize: 30 }
React will consider the value as 'px', so Specifying "px" with a string will still work, although it's redundant.

What if you want to reuse styles for several different components?
==================================================================

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via module.exports. You can then require your styles into any component that wants them.

```javascript
module.exports = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white
};
```

Separating presentational components from display components
============================================================

A presentational component will always get rendered by a container component.

In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

Stateless functional component
==============================

If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.createClass, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

```javascript
// The same component class, written as a stateless functional component:
function MyComponentClass () {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```

Send props to a Stateless functional component via parameter. EX:

```javascript
function MyFunctionalStatelessComponent (props) {
	return <h1>{props.title}</h1>
}
```

OR

```javascript
// Stateless functional component way to display a prop using a variable:
function MyComponentClass (props) {
	var title = props.title;
  return <h1>{title}</h1>;
}
```

Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components.

Changing STATE
==============

```javascript
var React = require('react');
var ReactDOM = require('react-dom');

var Input = React.createClass({
  getInitialState: function () {
    return {
      userInput: ''
    };
  },
 
  handleUserInput: function (e) {
    this.setState({
      userInput: e.target.value
    });
  },

  render: function () {
    return (
      <div>
        <input          
          type="text" 
          onChange={this.handleUserInput} 
          value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
});

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
```

React forms: controlled component and uncontrolled component
============================================================

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.

In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more 'React' way of doing things.

Ref.: http://bit.ly/28UCrqb

Lifecycle methods
=================
Lifecycle methods are methods that get called at certain moments in a component's life.
You can write a lifecycle method that gets called right before a component renders for the first time.
You can write a lifecycle method that gets called right after a component renders, every time except for the first time.
You can attach lifecycle methods to a lot of different moments in a component's life. This has powerful implications!
There are three categories of lifecycle methods: mounting, updating, and unmounting. 

mounting
--------
A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.
There are three mounting lifecycle methods:

- componentWillMount -> Only for the first time, right before it gets render
- render
- componentDidMount -> gets called right after the HTML from render has finished loading. Only for the first time!

When a component mounts, it automatically calls these three methods, in order.

unmounting
----------

If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.


updating and unmounting lifecycle methods
=========================================

What is updating?
-----------------

The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

There are five updating lifecycle methods:

- componentWillReceiveProps: gets called before the rendering begins. only gets called if the component will receive props.
  						<Example prop="myVal" />
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

componentWillReceiveProps
-------------------------

This is a common use of componentWillReceiveProps: comparing incoming props to current props or state, and deciding what to render based on that comparison.

shouldComponentUpdate
---------------------

When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

```
  shouldComponentUpdate: function (nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  },
```

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

componentWillUpdate
-------------------

The third updating lifecycle method is componentWillUpdate.
componentWillUpdate gets called in between shouldComponentUpdate and render.
componentWillUpdate receives two arguments: nextProps and nextState

The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

componentDidUpdate
------------------

When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.
componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.

componentWillUnmount
--------------------

A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.

Setup
=====

https://www.codecademy.com/articles/react-setup-i