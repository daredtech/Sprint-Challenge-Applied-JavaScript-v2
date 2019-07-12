// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

//to request information from the server
axios.get('https://lambda-times-backend.herokuapp.com/topics')
//if not successful
.catch(error => {console.log('Unable to return complete GET request')})
//if successful
.then(data => {console.log(data.data); 
    let topicCollection = data.data.topics; 
    topicCollection.forEach(element => {createTabs(element)}); })

function createTabs(topicText){
    //define the element
    const tab = document.createElement('div');
    //setup the structure
    topics.appendChild(tab);
    //setup the styling
    tab.classList.add('tab');
    //setup the content
    tab.textContent = topicText;
    return tab;
}