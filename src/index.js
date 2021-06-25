import apicalls from "./apicalls";


const eyesSearch = document.getElementById('eye')

apicalls.getData();
console.log('hola');

eyesSearch.addEventListener('click', function(){

    eyesSearch.classList.add('eyes');


    
});

eyesSearch.addEventListener('animationend', function(){

    eyesSearch.classList.remove('eyes');
    console.log('transition ended')
})