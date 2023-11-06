/*const heading =React.createElement('h1',{
    id:"heading"
},'Hello from react')*/

/*
HTML Structure
<div id = "parent">
    <div id =child1>
        <h1>"I am H1"</h1>
        <h2>"I am h2 child1"</h2>
    </div>
    <div id =child2>
        <h1>"I am h1 child1" </h1>
        <h2> "I am h2 child2" </h2>
    </div>
</div>
*/
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)