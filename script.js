function getDogImages() {
    let breed = document.getElementById('entry').value;
    let URL= 'https://dog.ceo/api/breed/'+breed+'/images/random';
    fetch(URL)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Input required!'))
}

function displayResults(responseJson){
    console.log(responseJson);
    if(responseJson.message === "Breed not found"){
        alert('Breed not found!')
    }
    else{
    $('.results').replaceWith(
        `<img src="${responseJson.message}" class="results">`)
    $('.hidden').removeClass('hidden');
}}

function invalidBreed(){

}


function renderSubmitButton(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
        
    })
}

$(function(){
    console.log('App loaded! Waiting for submit!');
    renderSubmitButton();
});
