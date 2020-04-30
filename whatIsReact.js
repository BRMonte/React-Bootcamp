1- created by facebook
2- its a JS library for building user interface
3- it structured with reusable components (each one is a piece of the UI)
5- every react app has the ROOT COMPONENT and its CHILDREN COMPONENTS
6- every React app has a tree structure (read nº5)
7- usually, each component is implemented as a JS class, with a state render method
class Tweet {
  state = {}; // data that we want to display when the component is rendered
  render() { // it describes what the UI should look like

  }
}
8- the output of this render is React Element = simple plain JS object that kind of represents the DOM ELEMENT
9- so react keeps a light representation of the DOM Element called VIRTUAL DOM
10- the VIRTUAL DOM is cheaper to create
11- when the state of a component is changed, then we have a new REACT ELEMENT
12- then react will compare this new element with the previous one
13- it will figure out what has changed and update the REAL DOM to make everything sinc with the VIRTUAL DOM
14- this means: working with React makes unecessary to use DOM API in browsers
15- in short: its not necessary to write code to manipulate the DOM
16- so this technologie REACTS TO STATE CHANGES
17- REACT is similar to ANGULAR considering the components architecture
18- but ANGULAR is a FRAMEWORK (complete solution)
                          x
19- REACT is a LIBRARIE (only takes care of the rendering the view and making sure it is sync with the STATE)
20- because of this React has a very small API to learn
21- so React wont cover: routing, HTTP requests etc

