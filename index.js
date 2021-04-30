// api key: iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC
// random endpoint information: https://developers.giphy.com/docs/api/endpoint#random

//The search keyword should be sent to GIPHY in &q parameter in the API call.

let baseURL = "http://api.giphy.com/v1/gifs/random?api_key=iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC"


//initiate search when enter is pressed
document.getElementById('name-input').addEventListener('keypress', function (event) {
    //document.getElementById('name-input').reset()

    if (event.key === 'Enter') {
        let name = document.getElementById("name-input").value
        console.log(name);

        //set each letter as a string
        let nameArray = name.split("")
        console.log(nameArray)
        event.preventDefault() // stops page reload

        //conduct image search for each index in the array
        for (letter of nameArray) {
            fetch("https://api.giphy.com/v1/gifs/search?api_key=iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC&q=alphabet%20letter%20" + `${letter}` + "&limit=25&offset=0&rating=g&lang=en")
                .then(res => res.json())
                .then(json => {
                    let giphyImage = json.data[0].embed_url
                    //how to add an if sttement that prevents duplicates
                    //set it up so they display in order
                    console.log(giphyImage);
                    
                    displayGiphy(giphyImage)

                })
        }
    }
})

//need to set it to reset the page on each submit

//function to display each new card
const displayGiphy = (giphyImage) => {
    const wrapper = document.getElementById('giphy-letter')
    let card = document.createElement("div")
    card.className = "card"
    let card_giphy = document.createElement("iframe")
    card_giphy.className = "card-background"
    card_giphy.src = `${giphyImage}` //link is inserted, but image isn't showing...
    card.appendChild(card_giphy)
    wrapper.appendChild(card)
}

//assign each index to a card


