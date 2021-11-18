let characterList = new Array();
let RecordsList=new Array();
var starWarsList= document.querySelector('ul');

function AjouteDivMovie(movie){
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p id="nameSelect" onload="choixMovie">' + movie.title + '</p>'; 
    starWarsList.appendChild(listItem);  

}

function fetchAPI (url,type){
    if (type!=""){
        url+=type;
    }
    fetch(url) 
        .then(function(response) {   
        
            return response.json(); 
        })
        .then(function(json) {
            let result = json.results; 
            
            switch(type){
                case "films":
                    for (r of result) {
                        console.log(r.title);
                        console.log(r);
                        AjouteDivMovie(r);
                        RecordsList.push(r);
                    }
                    console.log(characterList);
                    affiche(RecordsList);

            
                    break;
                case "people":
                    //Chaque résultat est concaténé pour apparaître dans un tableau
                    
                    console.log("Pas bouger !")
                    // CreateList(json);
                 
                   
                        //.........
                    break;
                //...................
                default:
                    break;    
            }
      });
      return(characterList);
}

function affiche(Records)
{
    for (r of Records){
        console.log(r.title);
    }
}

function choixPeople(people) {
     
}

fetchAPI('https://swapi.dev/api/', "films");