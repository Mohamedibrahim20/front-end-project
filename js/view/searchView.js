import {displaysearchRe} from "./element.js"
import {searchInput} from "./element.js"
 

export let getSearchInputValue=()=> searchInput.value
export function displaySearchResults(recipes){
    let markUp=""
    for(let i=0; i<recipes.length; i++){

        markUp+=`
        
        <div class="media py-4">
 <img src=${recipes[i].image_url} class="align-self-center mr-3 rounded-circle" alt="...">
 <div class="media-body">
 <a class="color-hover" href='#${recipes[i].recipe_id}'>
    <h6 id="bg-grey" class="mt-0">${recipes[i].title}</h6>
     <p id="bg-black">${recipes[i].publisher}</p>
</a>
        
        
  </div>
  </div>
        
        
        `



    }
displaysearchRe.innerHTML=markUp;




}


