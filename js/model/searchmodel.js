export class SearchModel{


    constructor(searchTerm){
        this.query = searchTerm

    }
    getSearchResults(callback){
        let httpReq = new XMLHttpRequest();
        httpReq.open("get",`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
        httpReq.send()
        httpReq.addEventListener("readystatechange",function(){
            if(httpReq.readyState == 4 && httpReq.status==200){

                let recipes= JSON.parse(httpReq.response).recipes
           
                callback(recipes)
            }

        })




    }


        
    
    
    
     
    
    
    
    
    
}
