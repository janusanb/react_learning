import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


export default function App() {
    const cards = data.map(items => {
        return (
            <Card
                key={items.id} 
                // item={items}
                {...items}
            />
        )

    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>            
        </div>
    )
}