// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

// createCard('TEST NAME', 'TEST AUTHOR', '');

//to request information from the server
axios.get('https://lambda-times-backend.herokuapp.com/articles')
//if not successful
.catch(error => {console.log('Unable to return complete GET request')})
//if successful
.then(data => {console.log(data.data.articles);
    let cardCollection = data.data.articles; 
    //go throught each key, get its values and create the cards
    Object.keys(cardCollection).forEach(function(key){cardCollection[key].forEach(item => {createCard(item.authorName, item.headline, item.authorPhoto)});});
})



function createCard(authorName, headline,authorPhoto){
    //define the elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardImgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardBy = document.createElement('span');

    //setup the structure
    cards.appendChild(card);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContainer);
    cardImgContainer.appendChild(cardImg);
    cardAuthor.appendChild(cardBy);
 
   //setup the styling
   card.classList.add('card');
   cardHeadline.classList.add('headline');
   cardAuthor.classList.add('author');
   cardImgContainer.classList.add('img-container');
   cardImg.classList.add('img');
   cardBy.classList.add('span');

    //setup the content
    cardAuthor.textContent = authorName;
    cardHeadline.textContent = headline;
    // cardImg.src = authorPhoto;
    



    
    return card;
}