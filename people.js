let characterList = new Array();
let RecordsList=new Array();
var starWarsList= document.querySelector('ul');

function AjouteDivPeople(people){
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<button id="nameSelect" onload="choixPeople">' + people.name + '</button>'; 
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
                console.log("Je ne fais rien"); //à modifier c'est pour l'exemple
        /* Appelons notre fonction */
                    break;
                case "people":
                    //Chaque résultat est concaténé pour apparaître dans un tableau
                    characterList = characterList.concat(result);

                    for(r of result) {
                        console.log(r.name);
                        console.log(r);
                        AjouteDivPeople(r);
                        RecordsList.push(r);
                    }
                    console.log(characterList);
                    affiche(RecordsList);
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
        console.log(r.name);
    }
}

function choixPeople(people) {
     
}

fetchAPI('https://swapi.dev/api/',"people");