import React from "react";
import "./App.css";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ color: "red", backgroundColor: "red" }}
            >
                COS420 - UD CISC275 with React Hooks and TypeScript Anthony
                Weaver Hello World!
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>DOG</h1>
            <img
                src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg?w=300"
                alt="Dog"
            ></img>
            <ul>
                <li>Its</li>
                <li>A</li>
                <li>Dog</li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
        </div>
    );
}

export default App;
