/* Assume an array of JSON objects where the objects are of some products in an e-commerce platform, 
containing name, price, description, reviews, etc. Write a JS function to search within that array
and list the searches when the query is 50% similar or more. (Search query can be by "name" or "type of the product")
*/

// declaring the array of products
var arr= [
    {
        "name":"Watch",
        "price":"999",
        "description":"Titan Watch",
        "reviews":"Water proof, long lasting, classy"
    },
    {
        "name":"Bags",
        "price":"499",
        "description":"Girls carry bags",
        "reviews":"Perfect bags for college/office"
    },
    {
        "name":"Floral Dress",
        "price":"2499",
        "description":"Floral dress",
        "reviews":"Gorgeous, pink floral dress perfect for summers"
    },
    {
        "name":"Men's Dress",
        "price":"3999",
        "description":"Men's dress ( suit and blazer )",
        "reviews":"Polyester material, men's fashion, formal suit and blazer."
    },
]

console.log("Products array : ")
console.log(arr);
var searchItem = window.prompt("Search by name or by type");
// var searchItem = "dress for men";
searchQuery(Array.from(arr), searchItem);   // calling function to search the entered query ( by name or by product)

function searchQuery(arr, searchItem){
    // Here we have performed search on either name,  or the description (type) of the product
    var word=searchItem.split(" ");
    searchedResults = [];
    var count=0;
    var total=word.length;

    for(let i =0; i<arr.length;i++){
        count=0;
        var nameArr=(arr[i]['name']).split(" ");  // creating an array named nameArr of all words in name property of ith object
        // console.log("Namearr: " + i + " " + nameArr); // (debugging)
        var descArr=(arr[i]['description']).split(" ");   // creating an array named descArr of all the words in description property of ith object
        // console.log("DescArr : " + i + " " + descArr); // (debugging)

        for(let j=0; j<word.length;j++){
            var matched = false;
            
            for (let x of nameArr){
                // checking if substring of the jth word in search query exists in nameArr or vice versa
                if(word[j].toLowerCase().includes(x.toLowerCase()) || x.toLowerCase().includes(word[j].toLowerCase())){
                    count++;
                    matched=true;
                } 
            }
            for (let y of descArr){
                // checking if substring of the jth word in search query exists in descArr or vice versa
                if(word[j].toLowerCase().includes(y.toLowerCase()) || y.toLowerCase().includes(word[j].toLowerCase())){
                    if(matched===false){
                        /* if the jth word did not match with any word in name, but it matched with any word in description, then only increase match count
                        however if the word already matched with name, count should not be increased again if it matches with description also.
                        */
                        count++;
                    }
                    matched=true;
                }
            }
            // console.log("Count: "+count);
        }
        // checking if the similarity of query with matched words in ith object is greater than or equal to 50%, then pushing the ith object in searched list.
        if(count/total>=0.5){
            // console.log("matched obj: ")
            searchedResults.push(arr[i]);
        }
    }
    console.log("Searched results: ");
    console.log(searchedResults);
}
