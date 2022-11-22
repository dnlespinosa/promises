let drawCard = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2';
axios.get(drawCard)
    .then(res =>  {
        axios.get(res.data)
    })
    .then(res => {
        console.log{res.data.value}
        axios.get(res.data)
    })
    .then(res => {
        console.log(res.data.suit)
    })

let newDeck = 'https://deckofcardsapi.com/api/deck/new/'
axios.get(newDeck)
    .then(res => {
        axios.get(drawCard)
    })
    .then(res => {
        console.log(res.data.value)
        console.log(res.data.suit)
        axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/shuffle/?remaining=true`)
    })
    .then(res => {
        console.log(res.data.value)
        console.log(res.data.suit)
    })

function get(newDeck) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function() {
            if (request.readyState  !== 4) return;

            if (request.status >= 200 && request.status < 300)  {
                resolve.request.response
            } else {
                reject( {
                    msg: 'server error', 
                    status: request.status, 
                    request:request
                })
            }
        }
    })
}