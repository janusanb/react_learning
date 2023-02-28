import React from "react"
import logo from "./images/react-logo.png"

export default function Header() {
    return (
      <header>
        <nav className="nav">
          <img src={logo} className="nav-logo"></img>
          <h1 className="nav-header">ReactFacts</h1>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </header>
    )
  }