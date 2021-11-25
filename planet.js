let characterList = new Array();
let RecordsList=new Array();
var starWarsList= document.querySelector('ul');

function AddDivPlanet(planets){
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<button class="btnInfo" onclick="choicePlanet()">' + planets.name + '</button>'; 
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
                    characterList = characterList.concat(result);
                    for (r of result) {
                        console.log(r.name);
                        console.log(r);
                        AddDivPlanet(r);
                        RecordsList.push(r);
                    }
                    console.log(characterList);
                    break;
                case "people":
                    console.log("Rien faire !")
                    break;
                default:
                    break;    
            }
        });
    return(characterList);
}

function choicePlanet() {
    for (let i=0; i < characterList.length; i++) {
        let listPlanet = characterList[i];
        document.getElementById("afficher").innerHTML += '<div class="cardInfo">' + 'Nom : ' + listPlanet.name + '<br>' + 'Climat : ' + listPlanet.climate + '<br>' + 'Gravité : ' + listPlanet.gravity + '<br>' + 'Diamètre : ' + listPlanet.diameter + 'km' + '<br>' + 'Population :' + listPlanet.population + '<br>' + 'Type de terrain : ' + listPlanet.terrain + '</div><br>';
        console.log(listPlanet);
    }
}

fetchAPI('https:/swapi.dev/api/', "planets");