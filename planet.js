let characterList = new Array();
let RecordsList=new Array();
var starWarsList= document.querySelector('ul');

function AjouteDivPlanet(planets){
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<button id="movieSelect" onload="choixMovie">' + planets.name + '</button>'; 
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
                    console.log("Pas bouger !")
                    break;
                case "planets":
                    for (r of result) {
                        console.log(r.title);
                        console.log(r);
                        AjouteDivPlanet(r);
                        RecordsList.push(r);
                    }
                    console.log(characterList);
                    affiche(RecordsList);
                    break;
                case "people":
                    //Chaque résultat est concaténé pour apparaître dans un tableau
                    
                    console.log("Pas bouger !")
                    break;
                
                default:
                    break;    
            }
        });
    return(characterList);
}

function affiche(Records)
{
    for (r of Records){
        console.log(r.name);
    }
}

function choixPeople(people) {
     
}

fetchAPI('https://swapi.dev/api/', "planets");