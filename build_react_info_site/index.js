ReactDOM.render(<p>Hello, everyone! This is Janu</p>, document.getElementById("root"))
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

const navbar = (
    <div>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)
