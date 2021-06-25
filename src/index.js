import apicalls from "./apicalls";
import DOM from "./DOM";

let searchValue;

const eyesSearch = document.getElementById('eye');
const searchBar = document.getElementById('searchBar');


eyesSearch.addEventListener('click', function () {

    eyesSearch.classList.add('eyes');

    apicalls.getData(searchValue)
        .then(function (answer){if(answer.cod != 400){DOM.createElements(answer)
        console.log(answer)}})
        .catch(error => console.log(error));

        searchBar.value = "";




});

eyesSearch.addEventListener('animationend', function () {

    eyesSearch.classList.remove('eyes');
    console.log('animation ended')
})

searchBar.addEventListener('input', function(){

    searchValue = searchBar.value;
})