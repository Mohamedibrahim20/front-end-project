import{displayRecipeDetails} from "./element.js"
 


export function disrecipeDetails(recipe){
    let ingredients = recipe.ingredients
    

         let markUp=`
        <h3>${recipe.title}</h3>
        <img src="${recipe.image_url}" class="w-100">
      
        <ul class="fa-ul py-4 d-flex flex-wrap">
        
            `
for(let i =0; i<ingredients.length; i++){

    markUp+=`<li class="w-50 py-2"><span class="fa-li"><i class="fas fa-utensils " style="color:#ef4836;"></i></span>${ingredients[i]}</li>`
}
    markUp+=`  
  </ul>`



  
displayRecipeDetails.innerHTML=markUp;




}


