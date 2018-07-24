# What is React?

## API KEY AIzaSyDkdXISGWBfJubqarIW1CuQsH-h0CdJLi0

- React is a javascript library that is used to create HTML.
- When we write React code we are creating individual Components or Views
- Components / Views are snippets of code that produce HTML
- When I write React code I write multiple different Components

## Javascript modules

- Code written in different files is separate from other code and other libraries installed
- You must explicitly create connections to the files that need code from other files

## React

- React is used to create and manage relationships between components
- ReactDOM is used to render HTML to the DOM
- When I create a component it is a class of component - it can have many different instances.
- A function is a factory that produces instances of the components that get rendered to the DOM.
- I Must instantiate a component before I render it to the DOM
- jsx tags (ie. <div></div>) automatically produce React.createElement (an instance of the component)

## ReactDom.render

- Can use single closing tag (<App />)
- I can use auto closing tags <div /> 
- ReactDom.render takes 2 arguments 
  1. what component it should render (<App />)
  2. And WHere it should render to (target DOM node) - VIA -> document.querySelector('.container')
      - ie. reactDOM.render(<App />, document.querySelector('.container'))

- root container element in HTML doc is what ever React Component gets nested within
- I create a single component for each element(ie. Search bar, video, etc) to be placed in the DOM
- I can place multiples of any component on the screen at any time
- ** ONLY MAKE ONE COMPONENT PER FILE **

## Functional Components

- Literally a function that returns JSX(HTML)
- considered a 'DUMB' component -> has no awareness of state

## Class based Components

- using js class (ES6 object) 
- needs to be able to render itself  -> to return some jsx.
- every class based component MUST have a defined render () method to output jsx
- syntax for defining a method in a class -> render () { ... }
- has awareness of state -> creates functionality in the app

## Event handling with React ( 2 steps )
  
  1. Declare event handler -> a function that runs whenever the event occurs (ie. mouseover)
  2. Pass the event handler to the element (in the jsx) that we want to handle for event (ie <input />)

## State

- State is a plain javaScript object that is used to record and react to user events
- each class based Component defined has its own state object.
- whenever a component's state is changed the component immediately re-renders
- it also forces all of its children to re-render as well
- before using state within a component I need to initialize the state object
- each initialized instance of a class has its own copy of the state object
- to initialize state I set the property's state to a plain js object inside the class' constructor method
- create a new object in the constructor function and assign it to this.state
- the object I assign to this.state will contain properties that I want to record on the state
- When a components state changes it updates the relevant properties in the object assigned to this.state
- **FUNCTIONAL COMPONENTS DO NOT HAVE STATE**
- **All js classes have a special function called constructor**
- the constructor function is the only function called automatically whenever a new instance of the class is created
- the constructor function is reserved for doing setup inside the class (initializing variables, initializing state, etc)
- ** I will ONLY ever use this.state to define state in the constructor function -> everywhere else is this.setState

## constructor method

- the constructor function is the only function called automatically whenever a new instance of the class is created
- always gets called with props

### Updating state

- in order to change state we use this.setState()
- this.state manually defines the state ONLY in the constructor method 
- this.setState() changes the initial state based on the parameters of the code

## controlled field(form element)

- a form element whose value is set by the state -> ie. value={this.state.term}
- it's value only ever changes when the state changes

## super

- super is used to call a method on the parent class or superclass from extends React.Component
- React.Component -> Component has it's own constructor function. super gives my created class access to it

## Downwards Dataflow

- ONLY the most parent Component in an application should be responsible for fetching data (api's, flux, redux, etc)

## props

- in a functional component the props object is an argument
- in a class-based component props are available anywhere in any method I define as this.props

## ** ALWAYS ask myself before creating a new component -> Do I need this component to maintain any type of state? -> if so use a class component - if not use a function component

## ** RECOMMENDED - name my top level classNames in JSX the same as the Component for styling purposes.

- this makes it easier in the CSS
- eg. // class SearchBar + className="search-bar" makes it easy and clear to style in CSS

``` class **SearchBar** extends Component {
        constructor (props) {
            super(props);
        
            this.state = { term: '' };
        }
      // The input below tells the state what it SHOULD be
        render () {
          return (
            <div **className="search-bar"**> // className search-bar makes it easy and clear to style in CSS
            <input 
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
            </div>
          );
        }
      } 
```

