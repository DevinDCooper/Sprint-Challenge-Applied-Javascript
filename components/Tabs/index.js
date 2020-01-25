// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics')

    const tabCard = (tab) => {
        const  tabs = document.createElement('div')

        tabs.textContent = tab;

        tabs.classList.add('tabs')
        
        return tabs;
    
    };





    axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(tab => {
            //const newTab = tabCard(tab);
            topics.appendChild(tabCard(tab));
        })
    })
    .catch(error => {
        console.log('the data was not returned', error);
    });