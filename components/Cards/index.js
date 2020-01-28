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

//const axiosPromise =  axios.get('https://lambda-times-backend.herokuapp.com/articles')

const cardsContainer = document.querySelector('.cards-container');


function createArticle(data) {
    const card = document.createElement('div');
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
    
    
    headlines.textContent = data.headline;
    imgAuthorPhoto.src = data.authorPhoto;
    spanAuthorName.textContent = data.authorName;
    
    return card;
    
    
    
    
};


axios
.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        response.data.articles.javascript.forEach(arry => {
            cardsContainer.appendChild(createArticle(arry))

        });
        response.data.articles.bootstrap.forEach(arry => {
            cardsContainer.appendChild(createArticle(arry))

        });
            
        response.data.articles. technology.forEach(arry => {
            cardsContainer.appendChild(createArticle(arry))

        });
        response.data.articles.jquery.forEach(arry => {
            cardsContainer.appendChild(createArticle(arry))

        });
        response.data.articles.node.forEach(arry => {
            cardsContainer.appendChild(createArticle(arry))

        });
    });





