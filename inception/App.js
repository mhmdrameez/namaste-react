const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    [React.createElement("h1", {}, "This is simple hello world"),React.createElement("h2", {}, "This is simple hello world")]
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world React"
// );

console.log("haeding", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
