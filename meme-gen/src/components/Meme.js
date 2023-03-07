import React from "react"
import ReactDOM from "react-dom"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    const [allMemes, setAllMemes] = React.useState(memesData)

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // This is one way of using async functions if that is what is required
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function getMemeImage(event) {
        event.preventDefault()
        setMeme()
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const imageUrl = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: imageUrl
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
        console.log(meme)
    }
    return (
        <main>
            <div >
                <form className="form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                        onChange={handleChange}
                        value={meme.topText}
                        name="topText"

                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={handleChange}
                        value={meme.bottomText}
                        name="bottomText"
                    />
                    <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
                </form>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
        
        </main>
    )
}