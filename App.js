{/* <div id="parent">
<div id="chiild">
    <h1 id="sibling1"></h1>
    <h2 id="sibling2"></h2>
</div>
</div>  */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', { id: 'parent' },
 [React.createElement('div', { id: "child1" }, 
 [React.createElement('h1', { id: "sibling1" }, "Nested Heading 1 from child 1 "),
 React.createElement('h2', { id: 'sibling2'},"Nested Heading 2 from child 1 ")]
 ),React.createElement('div', { id: "child2" }, 
 [React.createElement('h1', { id: "sibling1" }, "Nested Heading 1 from child 2"),
 React.createElement('h2', { id: 'sibling2'},"Nested Heading 2 from child 2")]
 )])




// const heading = React.createElement("h1", { id: "heading" }, "Vanakam React from app.js");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)