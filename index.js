// api key: iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC
// random endpoint information: https://developers.giphy.com/docs/api/endpoint#random

//The search keyword should be sent to GIPHY in &q parameter in the API call.

let baseURL = "http://api.giphy.com/v1/gifs/random?api_key=iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC"

fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        console.log(json);

        let giphyImage = json.data.embed_url
})

//initiate search when enter is pressed
document.getElementById('search-bar').addEventListener("keypress", function(event) {
    if (event.key === 'Enter'){
        //function to map through name
        let name = searchResults
        // let nameArr = searchResults.split('')
        name[0]
        console.log(name);
        // for (nameArr i = 0; i < nameArr.length; i++)
        //function to display cards
    }
})

//function to map through the name and set each letter as a string

//function to display each new card
displayGiphy = (giphy) => {
    const wrapper = document.getElementById('giphy-letter')
    let card = document.createElement("div")
    card.className = "card"
    let card_giphy = document.createElement("video")
    card_giphy.className = "card-img-top"
    card_giphy.src = giphyImage
    card.appendChild(card_giphy)
    wrapper.appendChild(card)
}