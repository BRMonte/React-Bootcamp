1- in the old days, it was hard to sync the app with all the browsers
2- initially, JQuery make it simpler, by handling this complexity and stablishing a unified syntax
3- because it got easier to work with the DOM, apps became bigger and bigger and more complex
4- this gaves us the SPA: single page application
5- traditionally each page of the app would have its own HTML/JS/CSS files and requests
6- now, thanks to AJAX we can focus on the JS files ans less on the HTML and CSS
7- because we only load the HTML and CSS once
8- so again SPA: we spend the whole time in the same page and the JS only updates what is needed
9- meanning we can sign in to an app and never having to speak with the server
10- SPA became a trend. In 2010 Google created ANGULAR.JS
11- the MVC pattern became POPULAR by ANGULAR.JS
12- and with this structured it became harder to debug code
13- this brought atention to architecture: how the code is structured and the data manipulated
14- and FACEBOOK developed REACT as a response
15- it is the most popular front end Librarie
16- key concepts in react:

A- we don't have to manipulate the DOM(doc obj module): tree representation of a page
A.1- working directly with the DOM is called IMPERATIVE PARADIGM
A.2- IMPERATIVE PARADIGM makes difficult to see the relationship between elements
A.3- REACT brought a more DECLARATIVE approuch
A.4- DOM manipulation is a bottle neck and an expensive operation
A.5- so with the DECLARATIVE paradigm we don't have to command the DOM
A.6- we only declare through JS objects how things should be and REACT handles the DOM

B- build websites like lego blocks: reusable components
B.1- ex: react Bootstrap or Blueprint

C- unidirectional dataflow
C.1- any change in the website means a change in the STATE
C.2- so the flow is: user press a button -> it changes the state -> combine new state + components -> update the DOM
C.4- data only flows one way also because It never goes up (to parents), only down (to children)

D- React is just the UI, the rest its up to us
D.1- React doesn't make assumptions about what else I'm using

How to be a good React Developer?
R: 1- decide what is a component/how and if to brake it into more components
R: 2- decide the STATE and where it lives. In what level
R: 3- decide what changes when the STATE changes






