import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import MainContent from "./MainContent"
import App from "./App.js"
import Footer from "./Footer"
import "./style.css"
import logo from "./images/react-logo.png"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>

console.log(logo)

// ReactDOM.render(<p>Hello, everyone! This is Janu</p>, document.getElementById("root"))
// const p = document.createElement("p")
// p.textContent = "This is a test, to show imperative way to program. 
//  Without using innerHTML"
// p.className = "paragraph"
// document.getElementById("root").append(p)
// ReactDOM.render(<ul>
//     <li>Hot</li>
//     <li>Cute</li>
//     <li>Sexy</li>
// </ul>, document.getElementById("root"))

// const navbar = (
//     <div>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Janu</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )

// const page = (
//   <>
//     <img src="./react-logo.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originially created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook (Meta)</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </>
// )

// ReactDOM.render(page, document.getElementById("root"))

// function PageOne() {
//   return (
//   <>
//     <img src={logo} width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originially created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook (Meta)</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </>
// )}

// ReactDOM.render(<PageOne />, document.getElementById("root"))

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      {/* <App /> */}
      <Footer />
    </>
    
  )
}

// ReactDOM.render(<Page />, document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(<Page />)