export class recipeDetailsModel{


    constructor(id){
        this.id = id
   
    }
    getRecipeDetails(callback){
        let httpReq = new XMLHttpRequest();
        httpReq.open("get",`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        httpReq.send()
        httpReq.addEventListener("readystatechange",function(){
            if(httpReq.readyState == 4 && httpReq.status==200){

                let recipes= JSON.parse(httpReq.response).recipe
                    callback(recipes)
                 
                
            }

        })




    }


        
    
    
    
     
    
    
    
    
    
}
