function addBtnPeople(people) {
    let listItem = document.createElement('button');
    listItem.id = people.name;
    listItem.innerHTML = '<div class=cardInfo>' + people.name + '</div>';
    listItem.onclick = function() {
        createCardPersoFormPeople(people.url)
    };
    var starwarsList = document.querySelector('ul');
    starwarsList.appendChild(listItem);
}
function loadMovieFormPeople(filmsResult) {
    var afficher = document.getElementById('afficher');
    let infoMovie = document.createElement('p');
    let nameMovieItem = document.createElement('a');
    var linkMovie = document.createTextNode(filmsResult.title);
    nameMovieItem.appendChild(linkMovie);
    nameMovieItem.title = filmsResult.title;
    var indice = filmsResult.url.slice(28, filmsResult.url.length - 1);
    nameMovieItem.href = "movie.html?id=" + indice;
    infoMovie.appendChild(nameMovieItem);
    afficher.appendChild(infoMovie);
}
function loadInfoPeopleFormPeople(peopleResult) {
    console.log("on est ici avec " + peopleResult.name)
    var afficher = document.getElementById('afficher');
        while (afficher.hasChildNodes()) {
            afficher.removeChild(afficher.firstChild);
        }
        let nameItem = document.createElement('div');
        nameItem.id = peopleResult.name;
        nameItem.innerHTML = 'Son nom : '+ peopleResult.name + '<br>' + 'Son genre : ' + peopleResult.gender + '<br>' + 'Son âge galactique : ' + peopleResult.birth_year + '<br>' + 'Sa taille : ' + peopleResult.height + 'cm' + '<br>' + 'Son poid :' + peopleResult.mass + 'kg' +'<br>';
        afficher.appendChild(nameItem);
        if (peopleResult.films.length >0) {
            let listMovie = document.createElement('div');
            listMovie.innerHTML = "La liste des films est : " + peopleResult.name
            afficher.appendChild(listMovie);
            for (i=0; i< peopleResult.films.length; i++) {
                console.log(peopleResult.films[i]);
                fetchAPI(peopleResult.films[i], "films", true, "people");
            }
        }
}
function createCardPersoFormPeople(url){
    fetchAPI(url,"people",true,"people");
      }

function loadPeopleForm() {
    fetchAPI('https://swapi.dev/api/',"people",false,"people");
}
function loadMovieForm() {
    try {
        var parameters = location.search.substring(1).split("&");
        var temp = parameters[0].split("=");
        console.log(temp[1]);
        l = decodeURI(temp[1]); 
        fetchAPI('https://swapi.dev/api/films/' + l,"films",true,"films");
    }
    catch (error) {
        console.error("Il n'y a pas de paramètres");
    }
}

async function fetchAPI (url,type,urldonne,origine){
    try{
    if (type!="" && urldonne==false){
        url+=type;
    }
    await fetch(url) 
        .then( async function(response) {   
            return   await response.json(); 
        })
        .then(function(json) {
            let result;
            if (urldonne){
                result=json;
            } else {
                result = json.results; 
            }
            switch(type){
                case "films":
                    console.log(result);
                    if (urldonne){
                        switch ( origine){
                            case "people":
                                loadMovieFormPeople(result);
                                break;
                            case "films":
                                console.log("on est ici et on va charger les infos du fetch dans le dom")
                                break;
                            default:
                                break;
                            }
                    }
                break;
                case "people":
                    if (urldonne){                
                        switch ( origine){
                            case "people":
                                loadInfoPeopleFormPeople(result);
                        break;
                        default: break;
                        }
                    } else {
                        for(r of result) {
                            console.log(r);
                            addBtnPeople(r);
                        }
                }
                    break;
                default:
                    break;    
            }
      });
    } catch (error) {
        console.log("Error", error)
      }
}
function ShowInfosFilms(film) {
    console.log(film.title);
}
function affiche(Records) {
    for (r of Records){
        console.log(r.name);
    }
}