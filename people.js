let characterList = new Array();
let RecordsList = new Array();
let personnageList = new Array();
var starWarsList= document.querySelector('ul');

function AddDivPeople(people){  
    let listItem = document.createElement('li');
    listItem.innerHTML = '<button class="btnInfo" onclick="choicePeople('+people+')" >' + people.name + '</button>'; 
    starWarsList.appendChild(listItem);
}

function fetchAPI (url,type, urldonne){
    if (type!="" && urldonne == false){
        url+=type;
    }
    fetch(url) 
        .then(function(response) {   
            return response.json(); 
        })
        .then(function(json) {
            let result;
            if (urldonne == false) {
                result = json.results; 
            } else {
                result = json;
            }
            switch(type){
                case "films":
                console.log("Je ne fais rien");
                    break;
                case "people":
                    characterList = characterList.concat(result);
                    for(r of result) {
                        personnageList.push(r)
                        console.log(r);}
                        
                        for (i=0; i < personnageList.length; i++){
                            AddDivPeople(personnageList[i]);
                        }
                        RecordsList.push(r);
                    
                    break;
                default:
                    break;    
            }
      });
      return(characterList);
}


function choicePeople(url) {
        fetchAPI(url, "people")
        document.getElementById("afficher").innerHTML += '<div class="cardInfo">' + 'Nom : ' + people.name + '<br>' + 'Genre : ' + people.gender + '<br>' + 'Age galactique : ' + people.birth_year + '<br>' + 'Taille : ' + people.height + 'cm' + '<br>' + 'Poid :' + people.mass + 'kg' +'<br>' + 'Films : <button>'+ people.films +'</button>' + 'Habitat : <button>' + people.homeworld +'</button>' +'</div><br>';
}

fetchAPI('https://swapi.dev/api/',"people", false);