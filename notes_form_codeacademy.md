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

> var styles = {
>  color: 'darkcyan',
>  background: 'mintcream'
> };

> <h1 style={styles}>Olá</h1>

Obs.: Since you aren't injecting an object literal anymore, you will no longer need to use double curly braces.

> { fontSize: 30 }
React will consider the value as 'px', so Specifying "px" with a string will still work, although it's redundant.

What if you want to reuse styles for several different components?
==================================================================

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via module.exports. You can then require your styles into any component that wants them.

> module.exports = {
>   blue: blue,
>   darkBlue: darkBlue,
>   lightBlue: lightBlue,
>   grey: grey,
>   white: white
> };

Separating presentational components from display components
============================================================

A presentational component will always get rendered by a container component.

In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

Stateless functional component
==============================

If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.createClass, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

> // The same component class, written as a stateless functional component:
> function MyComponentClass () {
>   return <h1>Hello world</h1>;
> }
> 
> // Works the same either way:
> ReactDOM.render(
> 	<MyComponentClass />,
> 	document.getElementById('app')
> );

Send props to a Stateless functional component via parameter. EX:

> function MyFunctionalStatelessComponent (props) {
> 	return <h1>{props.title}</h1>
> }

OR

> // Stateless functional component way to display a prop using a variable:
> function MyComponentClass (props) {
> 	var title = props.title;
>   return <h1>{title}</h1>;
> }

Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components.