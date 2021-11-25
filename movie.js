let characterList = new Array();
let RecordsList=new Array();
var starWarsList= document.querySelector('ul');

function AddDivMovie(movie){
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<button class="btnInfo" onclick="choiceMovie()">' + movie.title + '</button>'; 
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
                    characterList = characterList.concat(result);
                    for (r of result) {
                        AddDivMovie(r);
                        RecordsList.push(r);
                    }
                    affiche(RecordsList);
                    break;
                case "people":
                    console.log("Pas bouger !")
                    break;
                default:
                    break;    
            }
      });
      return(characterList);
}

function choiceMovie() {
    for (let i=0; i < characterList.length; i++) {
        let listMovie = characterList[i];
        document.getElementById("afficher").innerHTML += '<div class="cardInfo">' + 'Titre : ' + listMovie.title + '<br>' + 'Producteur :' + listMovie.producer + '<br>' + 'Date :' + listMovie.release_date + 'Numéro de l\'épisode :' + listMovie.episode_id + '<br></div><br>';
        console.log(listMovie);
    }
}


fetchAPI('https://swapi.dev/api/', "films");