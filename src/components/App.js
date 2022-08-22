import React from "react";
import Counter from "./Counter";
// import ClassCounter from "./ClassCounter";

function App() {
  return (
    <div className="App">
        <Counter title={"Counter using a functional component!"}/>
        {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
