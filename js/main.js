import {setSearchFocus} from './searchBar';
import {getSearchTerm} from './dataFunctions';

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();

    }
});

const initApp = () =>{
    //Set focus one input 
    setSearchFocus();
    //3 listeners clear text
    const form = document.getElementById('searchBar');
    form.addEventListener('submit',submitTheSearch);
};

// procedural "Workflow" function 
const submitTheSearch = (event) => {
    event.preventDefault();
    // Delete search result
    // process the search 
    processTheSearch();
    // search the focus
    setSearchFocus();
};

const processTheSearch =  async () =>{
    // Clear the stats line
    const searchTerm = getSearchTerm();
    if(searchTerm ==='')return;
    const resultArray = await retrieveSearchResults(searchTerm); 
}