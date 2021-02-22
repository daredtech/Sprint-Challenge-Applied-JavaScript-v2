// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');
Header();


function Header() {
    //define the elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //setup the structure
    headerContainer.appendChild(header);
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    //setup the styling
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTitle.classList.add('h1');
    headerTemp.classList.add('temp');

    //setup the content
    headerDate.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';
 
    return header;
}

