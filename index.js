import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ThemeContext from "./UserNmaeContext"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 */
ReactDOM.render(
    <ThemeContext.Provider value={"Jerome"}>
        <App />
    </ThemeContext.Provider>
, document.getElementById("root"))


