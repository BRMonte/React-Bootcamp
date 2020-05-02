1- how to start a React app (www.create-react-app.dev/docs/getting-started/)
- npx create-react-app my-app
- cd my-app
- npm start EQUIVALE A "RAILS S" EM RUBY
- yarn start tambem EQUIVALE A "RAILS S" EM RUBY

2- SRC folder
- is where the app lives
- all the react code for the app will be in this folder

3 - on the PACKAGE.JSON we have SCRIPTS actions (start, build, test, eject)
- running NPM BUILD makes my app files go to the PUBLIC folder
- this is they way to put my app into production/deploy
- if a need external react components, I have to install them into the PACKAGE.JSON
- it is soooort of a GEM FILE

4-PUBLIC/INDEX.HTML
-     <div id="root"></div>
"inside this element is where goes our REACT APP"

5- we can write FUNCTIONS that return HTML, but
we ALSO can write CLASSES tha return HTML
- benefits: REACT allow us to create Classes with many functions
- using a CLASS COMPONENT give us access to the THIS.STATE
- STATE = JS object with

6 - KEY THING TO REMEMBER:
 JSX is trying to mimic what HTML does, so we can create the VIRTUAL DOM
