// api key: iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC
// random endpoint information: https://developers.giphy.com/docs/api/endpoint#random

//The search keyword should be sent to GIPHY in &q parameter in the API call.

let baseURL = "http://api.giphy.com/v1/gifs/random?api_key=iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC"


//initiate search when enter is pressed
document.getElementById('name-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let name = document.getElementById("name-input").value
        console.log(name); 
        //map through the name input and set each letter as a string
        let nameArray = name.split("")
        console.log(nameArray)
        event.preventDefault()
        //conduct search for each index in the array
        for(letter of nameArray){
            fetch("https://api.giphy.com/v1/gifs/search?api_key=iPMwiJS956zJ5N4dsf3vQwcl2gnNQASC&q=alphabet letter" + `${letter}` + "&limit=25&offset=0&rating=g&lang=en")
            .then(res => res.json())
            .then(json => {
                let giphyImage = json.data.embed_url
            })
        }
    }
})



//assign each index to a card

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