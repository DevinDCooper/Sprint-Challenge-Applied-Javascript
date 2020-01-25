// 4STEP 3: Create Article cards.
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
const cardsContainer = document.querySelector('.card-container');

//const axiosPromise =  axios.get('https://lambda-times-backend.herokuapp.com/articles')

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    response.data.articles.javascript.forEach(item => {
        const newCard = createArticle(item);
    });
    .then(response => {
        response.data.articles.javascript.forEach(newCard =>{
            cardsContainer.appendChild(newCard(data.articles.javascript.headline, data.articles.javascript.authorName, data.articles.javascript.authorPhoto))
        });
    });
});

    









const createArticle = (headline, authorName, authorPhoto ) =>{
    const card = document.createElement('div')
    const headlines = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div')
    const imgAuthorPhoto = document.createElement('img')
    const spanAuthorName = document.createElement('span')


    card.appendChild(headlines);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(imgAuthorPhoto);
    author.appendChild(spanAuthorName);

card.classList.add('card')
headlines.classList.add('headline')
author.classList.add('author')
imgContainer.classList.add('img-container')
spanAuthorName.classList.add('span')


headlines.textContent = headline;
imgAuthorPhoto.src = authorPhoto;
spanAuthorName.textContent = authorName;

return card;




}

