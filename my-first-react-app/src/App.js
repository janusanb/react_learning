import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darkMode ? "" : "dark"} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode ? "" : "dark"}/>
        </div>
    )
}

export default App