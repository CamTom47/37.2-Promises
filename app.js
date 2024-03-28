// Part 1
// ---------------------

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// const baseURL = 'http://numbersapi.com'

// const h1 = document.querySelector('h1')
// const ul = document.createElement('ul')


// function generateRequestNums()  {
//     let randomNums = [];
    
//     for (let i = 0; i < 4; i ++)  {
//         let num  = Math.floor(Math.random()*100)
//         randomNums.push(num)
//     }
//     return randomNums
// }

// let requests = []

// function makeRequests() {
//     let randomNums = generateRequestNums()
//     for (let num of randomNums)  {
//         let request = axios.get(`${baseURL}/${num}`)
//         requests.push(request)
//     }
//     return requests
// }

// document.addEventListener('DOMContentLoaded', function(e)  {
//     h1.after(ul)
// } )

// makeRequests()


// Promise.all(requests)
// .then(res => res.forEach( (x) => {
//     const li = document.createElement('li')
//     li.innerText = x.data
//     ul.append(li)
// }))
// .catch(err => console.log('Something went wrong'))

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.


// const baseURL = 'http://numbersapi.com'

// const h1 = document.querySelector('h1')
// const ul = document.createElement('ul')


// function generateRequestNums()  {
//     let requestNum = Math.floor(Math.random()*100)
//     return requestNum
// }

// function makeRequests() {
//     let randomNum = generateRequestNums()
//     responses  = []
//     for (let i = 0; i < 4; i++)  {
//         responses.push(axios.get(`${baseURL}/${randomNum}`))
//     }
//     return responses
// }

// document.addEventListener('DOMContentLoaded', function(e)  {
//     h1.after(ul)
// } )

// makeRequests()


// Promise.all(responses)
// .then(res => res.forEach( (x) => {
//     const li = document.createElement('li')
//     li.innerText = x.data
//     ul.append(li)
// }))
// .catch(err => console.log('Something went wrong'))


// Part 2
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// document.addEventListener('DOMContentLoaded', function(e)  {
    
//     const body = document.querySelector('body')
//     let h1 = document.createElement('h1')
//     body.appendChild(h1)
//     let newDeckButton = document.createElement('button')
//     newDeckButton.innerText = 'New Deck'
//     newDeckButton.setAttribute('id','new-deck-button')
//     h1.after(newDeckButton)
//     let drawCardButton = document.createElement('button')
//     drawCardButton.innerText = 'Draw Card'
//     drawCardButton.setAttribute('id','draw-card-button')
//     h1.after(drawCardButton)
//     let shuffleCardsButton = document.createElement('button')
//     shuffleCardsButton.innerText = 'Shuffle Card'
//     shuffleCardsButton.setAttribute('id','shuffle-card-button')
//     h1.after(shuffleCardsButton)
// })

// let newDeckButton = document.querySelector('.new-deck-button')
// let drawCardButton = document.querySelector('.draw-card-button')


// function createNewDeck()  {
//     axios.get('https://deckofcardsapi.com/api/deck/new/')
//     .then(res => {
//         let h1 = document.querySelector('h1')
//         h1.innerText = 'Card Information'

//         for (let obj in res.data)  {
//             let p = document.createElement('p')
//             p.setAttribute('id', `${obj}`)
//             p.setAttribute('data-id', `${res.data[obj]}`)
//             p.innerText = `${obj}: ${res.data[obj]}` 
//             h1.after(p)
//         }
//     })
//     .catch(err => {
//         console.log('Something went wrong')
//     })
// }


// function drawCard()  {
//     let deck = document.getElementById('deck_id')
//     let deckId = deck.getAttribute('data-id')

//     axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//     .then(res => {
//         let remainingCards = document.getElementById('remaining')
//         remainingCards.setAttribute('data-id', res.data.remaining)
//         remainingCards.innerText = `remaining: ${res.data.remaining}`
//         let card = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
//         console.log(card)
//     })
// }

// function ShuffleDeck()  {
//     let deck = document.getElementById('deck_id')
//     let deckId = deck.getAttribute('data-id')
    
//     axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
//     .then(res =>  {
//         console.log(res)
//     })
// }

// function showCard(card)  {
//     console.log(card)
// }

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'new-deck-button'){
//         createNewDeck()
//     }
// })

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'draw-card-button')  {
//        drawCard()
//     }
// })

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'shuffle-card-button')  {
//        ShuffleDeck()
//     }
// })

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck.
    // Once you have both cards, ***console.log*** the values and suits of both cards.
    
    
   

    // document.addEventListener('DOMContentLoaded', function(e)  {
    
    //     const body = document.querySelector('body')
    //     let h1 = document.createElement('h1')
    //     body.appendChild(h1)
    //     let newDeckButton = document.createElement('button')
    //     newDeckButton.innerText = 'New Deck'
    //     newDeckButton.setAttribute('id','new-deck-button')
    //     h1.after(newDeckButton)
    //     let drawCardButton = document.createElement('button')
    //     drawCardButton.innerText = 'Draw Card'
    //     drawCardButton.setAttribute('id','draw-card-button')
    //     h1.after(drawCardButton)
    //     let shuffleCardsButton = document.createElement('button')
    //     shuffleCardsButton.innerText = 'Shuffle Card'
    //     shuffleCardsButton.setAttribute('id','shuffle-card-button')
    //     h1.after(shuffleCardsButton)
    // })
    
    // let newDeckButton = document.querySelector('.new-deck-button')
    // let drawCardButton = document.querySelector('.draw-card-button')
    
    
    // function createNewDeck()  {
    //     axios.get('https://deckofcardsapi.com/api/deck/new/')
    //     .then(res => {
    //         let h1 = document.querySelector('h1')
    //         h1.innerText = 'Card Information'
    
    //         for (let obj in res.data)  {
    //             let p = document.createElement('p')
    //             p.setAttribute('id', `${obj}`)
    //             p.setAttribute('data-id', `${res.data[obj]}`)
    //             p.innerText = `${obj}: ${res.data[obj]}` 
    //             h1.after(p)
    //         }
    //     })
    //     .catch(err => {
    //         console.log('Something went wrong')
    //     })
    // }
    
    // let hand = [];

    // function drawCard()  {
    //     let deck = document.getElementById('deck_id')
    //     let deckId = deck.getAttribute('data-id')
        
    //     let resp = axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

    //     resp
    //     .then(res => {
    //         let remainingCards = document.getElementById('remaining')
    //         remainingCards.setAttribute('data-id', res.data.remaining)
    //         remainingCards.innerText = `remaining: ${res.data.remaining}`
    //         hand.push(resp)
    //         showCards()

    //     })

    // }

    // function showCards()  {
    //     if (hand.length > 1)  {
    //         Promise.all(hand)
    //         .then(card =>  {
    //             card.forEach( c =>  {
    //                 console.log(`${c.data.cards[0].value} of ${c.data.cards[0].suit}`)

    //         })
    //         })
    //     }
    // }
    
    // function ShuffleDeck()  {
    //     let deck = document.getElementById('deck_id')
    //     let deckId = deck.getAttribute('data-id')
        
    //     axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
    //     .then(res =>  {
    //         console.log(res)
    //     })
    // }
    
    // function showCard(card)  {
    //     console.log(card)
    // }
    
    // document.addEventListener('click', function(e)  {
    //     if(e.target.id === 'new-deck-button'){
    //         createNewDeck()
    //     }
    // })
    
    // document.addEventListener('click', function(e)  {
    //     if(e.target.id === 'draw-card-button')  {
    //        drawCard()
    //     }
    // })
    
    // document.addEventListener('click', function(e)  {
    //     if(e.target.id === 'shuffle-card-button')  {
    //        ShuffleDeck()
    //     }
    // })


// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

// document.addEventListener('DOMContentLoaded', function(e)  {
    
//     const body = document.querySelector('body')
//     const div = document.createElement('div')
//     body.appendChild(div)
//     let h1 = document.createElement('h1')
//     div.appendChild(h1)
//     let newDeckButton = document.createElement('button')
//     newDeckButton.innerText = 'New Deck'
//     newDeckButton.setAttribute('id','new-deck-button')
//     h1.after(newDeckButton)
//     let drawCardButton = document.createElement('button')
//     drawCardButton.innerText = 'Draw Card'
//     drawCardButton.setAttribute('id','draw-card-button')
//     h1.after(drawCardButton)
//     let shuffleCardsButton = document.createElement('button')
//     shuffleCardsButton.innerText = 'Shuffle Card'
//     shuffleCardsButton.setAttribute('id','shuffle-card-button')
//     h1.after(shuffleCardsButton)
// })

// let newDeckButton = document.querySelector('.new-deck-button')
// let drawCardButton = document.querySelector('.draw-card-button')


// function createNewDeck()  {
//     axios.get('https://deckofcardsapi.com/api/deck/new/')
//     .then(res => {
//         let h1 = document.querySelector('h1')
//         h1.innerText = 'Card Information'

//         for (let obj in res.data)  {
//             let p = document.createElement('p')
//             p.setAttribute('id', `${obj}`)
//             p.setAttribute('data-id', `${res.data[obj]}`)
//             p.innerText = `${obj}: ${res.data[obj]}` 
//             h1.after(p)
//         }
//     })
//     .catch(err => {
//         console.log('Something went wrong')
//     })
// }

// function drawCard()  {
//     let deck = document.getElementById('deck_id')
//     let deckId = deck.getAttribute('data-id')
    
//     let resp = axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)

//     resp
//     .then(res => {
//         let remainingCards = document.getElementById('remaining')
//         remainingCards.setAttribute('data-id', res.data.remaining)
//         remainingCards.innerText = `remaining: ${res.data.remaining}`
//         let card = res.data.cards[0]
//         showCard(card)
//     })
//     .catch(err =>  {
//         console.log('There are no more cards in this deck')
//     })

// }

// function showCard(card)  {
//     let cardStack = document.createElement('img')
//     cardStack.setAttribute('src', card.image)
//     let div = document.querySelector('div')
//     div.after(cardStack)
    
// }

// function ShuffleDeck()  {
//     let deck = document.getElementById('deck_id')
//     let deckId = deck.getAttribute('data-id')
    
//     axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
//     .then(res =>  {
//         console.log(res)
//     })
// }

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'new-deck-button'){
//         createNewDeck()
//     }
// })

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'draw-card-button')  {
//        drawCard()
//     }
// })

// document.addEventListener('click', function(e)  {
//     if(e.target.id === 'shuffle-card-button')  {
//        ShuffleDeck()
//     }
// })