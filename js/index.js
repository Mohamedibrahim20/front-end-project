import {searchBtn} from "./view/element.js"
import {displaySearchResults,getSearchInputValue} from "./view/searchView.js"
import {SearchModel} from "./model/searchmodel.js"
import {recipeDetailsModel} from "./model/recipeDetailsModel.js"
import {disrecipeDetails} from "./view/recipeDetailsView.js"

// let controller =()=>{
//     let query =getSearchInputValue() 
// let search = new SearchModel(query )
// search.getSearchResults(displaySearchResults)


// }

// searchBtn.addEventListener("click",controller)
let controller =()=>{
    let query = getSearchInputValue()
    let search = new SearchModel( query)
    search.getSearchResults(displaySearchResults)
    
}
searchBtn.addEventListener("click" ,controller)


let recipeController=()=>{
  let recipeId =window.location.hash.replace('#','')
  console.log(recipeId)
    let recipeDetails = new recipeDetailsModel(recipeId)
recipeDetails.getRecipeDetails(disrecipeDetails)
}
window.addEventListener("hashchange",recipeController)
